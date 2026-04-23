import {
    useAccount,
    useReadContract,
    useWriteContract,
    useWaitForTransactionReceipt,
} from 'wagmi';
import { parseUnits, formatUnits, zeroAddress } from 'viem';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { config as appConfig } from '../config';

// StakingDuration enum: 0=SevenDays, 1=NinetyDays, 2=OneEightyDays, 3=ThreeSixtyFiveDays
export const STAKING_DURATIONS = [
    { label: '7 Days',   apy: '0.5% Daily',  durationIndex: 0 },
    { label: '90 Days',  apy: '0.7% Daily',  durationIndex: 1 },
    { label: '180 Days', apy: '0.85% Daily', durationIndex: 2 },
    { label: '365 Days', apy: '1.00% Daily', durationIndex: 3 },
];

export const UseStaking = () => {
    const { address, isConnected } = useAccount();
    const pendingArgsRef = useRef(null);
    const [stakePhase, setStakePhase] = useState('idle'); // idle | approving | staking | done

    // ── Read: USDT balance ────────────────────────────────────────────────
    const { data: usdtBalance, refetch: refetchUsdtBalance } = useReadContract({
        address: appConfig.USDT_CONTRACT_ADDRESS,
        abi: appConfig.TOKEN_ABI,
        functionName: 'balanceOf',
        args: [address],
        query: { enabled: !!address && isConnected },
    });

    // ── Read: user staking info (totalStakedInARX) ────────────────────────
    const { data: userInfo, refetch: refetchUserInfo } = useReadContract({
        address: appConfig.STAKING_CONTRACT_ADDRESS,
        abi: appConfig.STAKING_ABI,
        functionName: 's_users',
        args: [address],
        query: { enabled: !!address && isConnected && !!appConfig.STAKING_CONTRACT_ADDRESS },
    });

    // ── Write: USDT approve ───────────────────────────────────────────────
    const {
        writeContract: writeApprove,
        data: approveHash,
        isPending: isApprovePending,
        error: approveError,
    } = useWriteContract();

    const { isLoading: isApproveConfirming, isSuccess: isApproveConfirmed } =
        useWaitForTransactionReceipt({ hash: approveHash });

    // ── Write: stakeWithUSDT ──────────────────────────────────────────────
    const {
        writeContract: writeStake,
        data: stakeHash,
        isPending: isStakePending,
        error: stakeError,
    } = useWriteContract();

    const { isLoading: isStakeConfirming, isSuccess: isStakeConfirmed } =
        useWaitForTransactionReceipt({ hash: stakeHash });

    // ── Trigger stake after approval confirmed ────────────────────────────
    useEffect(() => {
        if (isApproveConfirmed && stakePhase === 'approving' && pendingArgsRef.current) {
            toast.dismiss();
            toast.loading('Staking in progress...');
            setStakePhase('staking');
            writeStake({
                address: appConfig.STAKING_CONTRACT_ADDRESS,
                abi: appConfig.STAKING_ABI,
                functionName: 'stakeWithUSDT',
                args: pendingArgsRef.current,
            });
        }
    }, [isApproveConfirmed, stakePhase]);

    // ── Stake confirmed ───────────────────────────────────────────────────
    useEffect(() => {
        if (isStakeConfirmed && stakePhase === 'staking') {
            toast.dismiss();
            toast.success('Staked successfully!');
            setStakePhase('done');
            pendingArgsRef.current = null;
            refetchUsdtBalance();
            refetchUserInfo();
            setTimeout(() => setStakePhase('idle'), 2000);
        }
    }, [isStakeConfirmed, stakePhase]);

    // ── Error: approve rejected ───────────────────────────────────────────
    useEffect(() => {
        if (approveError && stakePhase === 'approving') {
            toast.dismiss();
            toast.error('Approval rejected. Please try again.');
            setStakePhase('idle');
            pendingArgsRef.current = null;
        }
    }, [approveError]);

    // ── Error: stake failed ───────────────────────────────────────────────
    useEffect(() => {
        if (stakeError && stakePhase === 'staking') {
            toast.dismiss();
            toast.error(stakeError?.shortMessage || 'Staking failed. Please try again.');
            setStakePhase('idle');
            pendingArgsRef.current = null;
        }
    }, [stakeError]);

    // ── Derived values ────────────────────────────────────────────────────
    const formattedUsdtBalance = usdtBalance
        ? formatUnits(usdtBalance, appConfig.USDT_DECIMALS)
        : '0';

    // userInfo is returned as a tuple; totalStakedInARX is at index 8
    const totalStakedInARX = userInfo?.[8]
        ? formatUnits(userInfo[8], appConfig.ARX_DECIMALS)
        : '0';

    const isLoading =
        isApprovePending || isApproveConfirming || isStakePending || isStakeConfirming;

    // ── stake(amountStr, durationIndex, referrer) ─────────────────────────
    const stake = (amountStr, durationIndex, referrer = zeroAddress) => {
        if (!isConnected || !address) return;
        const num = parseFloat(amountStr);
        if (!amountStr || isNaN(num) || num <= 0) {
            toast.error('Enter a valid USDT amount.');
            return;
        }
        const bal = parseFloat(formattedUsdtBalance);
        if (num > bal) {
            toast.error('Amount exceeds your USDT balance.');
            return;
        }

        const amountBig = parseUnits(amountStr, appConfig.USDT_DECIMALS);
        pendingArgsRef.current = [amountBig, durationIndex, referrer];
        setStakePhase('approving');
        toast.dismiss();
        toast.loading('Approving USDT...');

        writeApprove({
            address: appConfig.USDT_CONTRACT_ADDRESS,
            abi: appConfig.TOKEN_ABI,
            functionName: 'approve',
            args: [appConfig.STAKING_CONTRACT_ADDRESS, amountBig],
        });
    };

    return {
        isConnected,
        address,
        formattedUsdtBalance,
        totalStakedInARX,
        isLoading,
        stakePhase,
        stake,
    };
};
