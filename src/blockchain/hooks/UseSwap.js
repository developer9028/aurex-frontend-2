import {
    useAccount,
    useReadContract,
    useWriteContract,
    useWaitForTransactionReceipt,
} from 'wagmi';
import { parseUnits, formatUnits } from 'viem';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { config as appConfig } from '../config';

// swapPhase: 'idle' | 'approving' | 'swapping' | 'done'
export const UseSwap = () => {
    const { address, isConnected } = useAccount();
    const pendingAmountRef = useRef(null);
    const onSuccessRef = useRef(null);   // callback to reset amount in UI
    const [swapPhase, setSwapPhase] = useState('idle');

    const userEnabled   = !!address && isConnected;
    const configEnabled = !!appConfig.STAKING_CONTRACT_ADDRESS;

    // ── Reads ─────────────────────────────────────────────────────────────
    // ARX balance — only when wallet connected
    const { data: arxBalance, refetch: refetchArxBalance } = useReadContract({
        address: appConfig.AUREX_TOKEN_CONTRACT_ADDRESS,
        abi: appConfig.TOKEN_ABI,
        functionName: 'balanceOf',
        args: [address ?? '0x0000000000000000000000000000000000000000'],
        query: { enabled: userEnabled },
    });

    // ARX price — public state var, no wallet needed
    const { data: arxPriceRaw, isLoading: isPriceLoading } = useReadContract({
        address: appConfig.STAKING_CONTRACT_ADDRESS,
        abi: appConfig.STAKING_ABI,
        functionName: 's_aurexTokenPriceInUSDT',
        query: { enabled: configEnabled },
    });

    // Swap fee BPS — public constant, no wallet needed
    const { data: swapFeeBpsRaw, isLoading: isFeeLoading } = useReadContract({
        address: appConfig.STAKING_CONTRACT_ADDRESS,
        abi: appConfig.STAKING_ABI,
        functionName: 'SWAP_FEE_BPS',
        query: { enabled: configEnabled },
    });

    // ARX allowance for the staking contract — refetched after each swap
    const { data: arxAllowanceRaw, refetch: refetchAllowance } = useReadContract({
        address: appConfig.AUREX_TOKEN_CONTRACT_ADDRESS,
        abi: appConfig.TOKEN_ABI,
        functionName: 'allowance',
        args: [address ?? '0x0000000000000000000000000000000000000000', appConfig.STAKING_CONTRACT_ADDRESS],
        query: { enabled: userEnabled },
    });

    // Swap start time — to detect SwapNotActive before submitting tx
    const { data: swapStartTime } = useReadContract({
        address: appConfig.STAKING_CONTRACT_ADDRESS,
        abi: appConfig.STAKING_ABI,
        functionName: 's_swapStartTime',
        query: { enabled: configEnabled },
    });

    const arxPriceInUSDT  = arxPriceRaw != null ? arxPriceRaw : null; // BigInt | null
    const swapFeeBps      = swapFeeBpsRaw != null ? swapFeeBpsRaw : 0n;
    const arxAllowance    = arxAllowanceRaw != null ? arxAllowanceRaw : 0n;
    const isConfigLoading = isPriceLoading || isFeeLoading;

    // ── Writes ────────────────────────────────────────────────────────────
    const { writeContract: writeApprove, data: approveHash, isPending: isApprovePending, error: approveError } =
        useWriteContract();

    const { isLoading: isApproveConfirming, isSuccess: isApproveConfirmed, isError: isApproveReverted, error: approveTxError } =
        useWaitForTransactionReceipt({ hash: approveHash });

    const { writeContract: writeSwap, data: swapHash, isPending: isSwapPending, error: swapError } =
        useWriteContract();

    const { isLoading: isSwapConfirming, isSuccess: isSwapConfirmed, isError: isSwapReverted, error: swapTxError } =
        useWaitForTransactionReceipt({ hash: swapHash });

    // ── Trigger swap after approval ───────────────────────────────────────
    useEffect(() => {
        if (isApproveConfirmed && swapPhase === 'approving' && pendingAmountRef.current) {
            toast.dismiss();
            toast.loading('ARX approved. Confirming swap...');
            setSwapPhase('swapping');
            _execSwap(pendingAmountRef.current);
        }
    }, [isApproveConfirmed, swapPhase]);

    // ── Swap confirmed ────────────────────────────────────────────────────
    useEffect(() => {
        if (isSwapConfirmed && swapPhase === 'swapping') {
            toast.dismiss();
            toast.success('Swap successful! USDT has been sent to your wallet.');
            setSwapPhase('done');
            pendingAmountRef.current = null;
            refetchArxBalance();
            refetchAllowance();
            onSuccessRef.current?.();
            onSuccessRef.current = null;
            setTimeout(() => setSwapPhase('idle'), 2000);
        }
    }, [isSwapConfirmed, swapPhase]);

    // ── Errors ────────────────────────────────────────────────────────────
    const _extractMsg = (err, fallback) => {
        // wagmi v2: ContractFunctionRevertedError has reason or data.errorName
        const reason = err?.cause?.reason
            || err?.cause?.data?.errorName
            || err?.shortMessage
            || err?.message
            || fallback;
        // Map known contract errors to friendly messages
        if (reason?.includes('SwapNotActive'))          return 'Swap is not active yet.';
        if (reason?.includes('ARXPriceNotSet'))         return 'Token price not configured. Contact support.';
        if (reason?.includes('InsufficientUSDTBalance'))return 'Contract has insufficient USDT liquidity.';
        if (reason?.includes('InvalidSwapAmount'))      return 'Invalid swap amount.';
        if (reason?.includes('FeeWalletNotSet'))        return 'Fee wallet not configured. Contact support.';
        return reason;
    };
    useEffect(() => {
        if (approveError && swapPhase === 'approving') {
            toast.dismiss();
            toast.error(_extractMsg(approveError, 'Approval rejected.'));
            setSwapPhase('idle');
            pendingAmountRef.current = null;
        }
    }, [approveError]);

    useEffect(() => {
        if (isApproveReverted && swapPhase === 'approving') {
            toast.dismiss();
            toast.error(_extractMsg(approveTxError, 'Approval transaction failed.'));
            setSwapPhase('idle');
            pendingAmountRef.current = null;
        }
    }, [isApproveReverted]);

    useEffect(() => {
        if (swapError && swapPhase === 'swapping') {
            toast.dismiss();
            toast.error(_extractMsg(swapError, 'Swap failed.'));
            setSwapPhase('idle');
            pendingAmountRef.current = null;
        }
    }, [swapError]);

    useEffect(() => {
        if (isSwapReverted && swapPhase === 'swapping') {
            toast.dismiss();
            toast.error(_extractMsg(swapTxError, 'Swap transaction failed.'));
            setSwapPhase('idle');
            pendingAmountRef.current = null;
        }
    }, [isSwapReverted]);

    // ── Computed values ───────────────────────────────────────────────────
    const formattedArxBalance = arxBalance != null
        ? formatUnits(arxBalance, appConfig.ARX_DECIMALS)
        : '0';

    // Compute USDT output for a given ARX input string
    // Contract formula: fee taken from ARX first, then convert; same as (amount * price / 1e18) * (1 - fee)
    const computeUsdtOut = (arxAmountStr) => {
        if (!arxAmountStr || isNaN(Number(arxAmountStr)) || Number(arxAmountStr) <= 0) return '0.00';
        if (arxPriceInUSDT == null || arxPriceInUSDT === 0n) return '—';
        try {
            const amountRaw = parseUnits(arxAmountStr, appConfig.ARX_DECIMALS);
            const usdtRaw = (amountRaw * arxPriceInUSDT) / BigInt(10 ** 18);
            const afterFee = (usdtRaw * (10000n - BigInt(swapFeeBps))) / 10000n;
            return Number(formatUnits(afterFee, appConfig.USDT_DECIMALS)).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 4,
            });
        } catch {
            return '0.00';
        }
    };

    const isLoading = isApprovePending || isApproveConfirming || isSwapPending || isSwapConfirming;

    // ── Pre-flight check + execute swap tx ────────────────────────────────
    const _execSwap = (amountRaw) => {
        // SwapNotActive: start time not set or not reached yet
        if (!swapStartTime || swapStartTime === 0n) {
            toast.dismiss();
            toast.error('Swap is not active yet. Please try again later.');
            setSwapPhase('idle');
            pendingAmountRef.current = null;
            return;
        }
        const nowSec = BigInt(Math.floor(Date.now() / 1000));
        if (nowSec < swapStartTime) {
            toast.dismiss();
            toast.error('Swap has not started yet.');
            setSwapPhase('idle');
            pendingAmountRef.current = null;
            return;
        }
        writeSwap({
            address: appConfig.STAKING_CONTRACT_ADDRESS,
            abi: appConfig.STAKING_ABI,
            functionName: 'swapARXToUSDT',
            args: [amountRaw],
        });
    };

    // ── swap() ────────────────────────────────────────────────────────────
    const swap = (arxAmountStr, onSuccess) => {
        if (!isConnected || !address) return;
        if (!arxAmountStr || Number(arxAmountStr) <= 0) {
            toast.error('Enter a valid ARX amount.');
            return;
        }
        if (arxPriceInUSDT == null || arxPriceInUSDT === 0n) {
            toast.error('Price not available yet. Please wait.');
            return;
        }
        let amountRaw;
        try {
            amountRaw = parseUnits(arxAmountStr, appConfig.ARX_DECIMALS);
        } catch {
            toast.error('Invalid amount.');
            return;
        }
        if (arxBalance != null && amountRaw > arxBalance) {
            toast.error('Insufficient ARX balance.');
            return;
        }
        pendingAmountRef.current = amountRaw;
        onSuccessRef.current = onSuccess ?? null;

        // If existing allowance covers the amount, skip approval and swap directly
        if (arxAllowance >= amountRaw) {
            toast.dismiss();
            toast.loading('Confirming swap...');
            setSwapPhase('swapping');
            _execSwap(amountRaw);
            return;
        }

        setSwapPhase('approving');
        toast.dismiss();
        toast.loading('Waiting for ARX approval...');
        writeApprove({
            address: appConfig.AUREX_TOKEN_CONTRACT_ADDRESS,
            abi: appConfig.TOKEN_ABI,
            functionName: 'approve',
            args: [appConfig.STAKING_CONTRACT_ADDRESS, amountRaw],
        });
    };

    return {
        isConnected,
        address,
        formattedArxBalance,
        arxPriceInUSDT,
        swapFeeBps,
        computeUsdtOut,
        swapPhase,
        isLoading,
        isConfigLoading,
        swap,
    };
};
