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

    // ── Read: USDT allowance ─────────────────────────────────────────────
    const { data: usdtAllowance, refetch: refetchAllowance } = useReadContract({
        address: appConfig.USDT_CONTRACT_ADDRESS,
        abi: appConfig.TOKEN_ABI,
        functionName: 'allowance',
        args: [address, appConfig.STAKING_CONTRACT_ADDRESS],
        query: { enabled: !!address && isConnected },
    });

    // ── Read: USDT balance ────────────────────────────────────────────────
    const { data: usdtBalance, isLoading: isUsdtLoading, refetch: refetchUsdtBalance } = useReadContract({
        address: appConfig.USDT_CONTRACT_ADDRESS,
        abi: appConfig.TOKEN_ABI,
        functionName: 'balanceOf',
        args: [address],
        query: { enabled: !!address && isConnected },
    });

    // ── Read: all user stakes ─────────────────────────────────────────────
    const { data: userStakes, isLoading: isStakesLoading, refetch: refetchUserStakes } = useReadContract({
        address: appConfig.STAKING_CONTRACT_ADDRESS,
        abi: appConfig.STAKING_ABI,
        functionName: 'getAllStakedOfUser',
        args: [address],
        query: { enabled: !!address && isConnected && !!appConfig.STAKING_CONTRACT_ADDRESS },
    });

    // ── Read: reward overview ─────────────────────────────────────────────
    const { data: rewardOverview, isLoading: isRewardsLoading, refetch: refetchRewards } = useReadContract({
        address: appConfig.STAKING_CONTRACT_ADDRESS,
        abi: appConfig.STAKING_ABI,
        functionName: 'getRewardOverview',
        args: [address],
        query: { enabled: !!address && isConnected && !!appConfig.STAKING_CONTRACT_ADDRESS },
    });

    // ── Write: claimStakingRewards ────────────────────────────────────────
    const {
        writeContract: writeClaim,
        data: claimHash,
        isPending: isClaimPending,
        error: claimError,
    } = useWriteContract();

    const { isLoading: isClaimConfirming, isSuccess: isClaimConfirmed, isError: isClaimReverted, error: claimTxError } =
        useWaitForTransactionReceipt({ hash: claimHash });

    // ── Write: unstakeAll ─────────────────────────────────────────────────
    const {
        writeContract: writeUnstake,
        data: unstakeHash,
        isPending: isUnstakePending,
        error: unstakeError,
    } = useWriteContract();

    const { isLoading: isUnstakeConfirming, isSuccess: isUnstakeConfirmed, isError: isUnstakeReverted, error: unstakeTxError } =
        useWaitForTransactionReceipt({ hash: unstakeHash });

    // ── Write: USDT approve ───────────────────────────────────────────────
    const {
        writeContract: writeApprove,
        data: approveHash,
        isPending: isApprovePending,
        error: approveError,
    } = useWriteContract();

    const { isLoading: isApproveConfirming, isSuccess: isApproveConfirmed, isError: isApproveReverted, error: approveTxError } =
        useWaitForTransactionReceipt({ hash: approveHash });

    // ── Write: stakeWithUSDT ──────────────────────────────────────────────
    const {
        writeContract: writeStake,
        data: stakeHash,
        isPending: isStakePending,
        error: stakeError,
    } = useWriteContract();

    const { isLoading: isStakeConfirming, isSuccess: isStakeConfirmed, isError: isStakeReverted, error: stakeTxError } =
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
            refetchAllowance();
            refetchUserStakes();
            refetchRewards();
            setTimeout(() => setStakePhase('idle'), 2000);
        }
    }, [isStakeConfirmed, stakePhase]);

    // ── Claim confirmed ───────────────────────────────────────────────────
    useEffect(() => {
        if (isClaimConfirmed) {
            toast.dismiss();
            toast.success('Rewards claimed!');
            refetchRewards();
            refetchUserStakes();
        }
    }, [isClaimConfirmed]);

    useEffect(() => {
        if (claimError) {
            toast.dismiss();
            toast.error(claimError?.shortMessage || claimError?.message || 'Claim failed.');
        }
    }, [claimError]);

    useEffect(() => {
        if (isClaimReverted) {
            toast.dismiss();
            toast.error(claimTxError?.shortMessage || claimTxError?.message || 'Claim transaction failed.');
        }
    }, [isClaimReverted]);

    // ── Unstake confirmed ─────────────────────────────────────────────────
    useEffect(() => {
        if (isUnstakeConfirmed) {
            toast.dismiss();
            toast.success('Unstaked successfully!');
            refetchUserStakes();
            refetchRewards();
            refetchUsdtBalance();
        }
    }, [isUnstakeConfirmed]);

    useEffect(() => {
        if (unstakeError) {
            toast.dismiss();
            toast.error(unstakeError?.shortMessage || unstakeError?.message || 'Unstake failed.');
        }
    }, [unstakeError]);

    useEffect(() => {
        if (isUnstakeReverted) {
            toast.dismiss();
            toast.error(unstakeTxError?.shortMessage || unstakeTxError?.message || 'Unstake transaction failed.');
        }
    }, [isUnstakeReverted]);

    // ── Error: approve wallet rejected ────────────────────────────────────
    useEffect(() => {
        if (approveError && stakePhase === 'approving') {
            toast.dismiss();
            const msg = approveError?.shortMessage || approveError?.message || 'Approval rejected.';
            toast.error(msg);
            setStakePhase('idle');
            pendingArgsRef.current = null;
        }
    }, [approveError]);

    // ── Error: approve tx reverted on-chain ───────────────────────────────
    useEffect(() => {
        if (isApproveReverted && stakePhase === 'approving') {
            toast.dismiss();
            const msg = approveTxError?.shortMessage || approveTxError?.message || 'Approval transaction failed.';
            toast.error(msg);
            setStakePhase('idle');
            pendingArgsRef.current = null;
        }
    }, [isApproveReverted]);

    // ── Error: stake wallet rejected ──────────────────────────────────────
    useEffect(() => {
        if (stakeError && stakePhase === 'staking') {
            toast.dismiss();
            const msg = stakeError?.shortMessage || stakeError?.message || 'Staking failed.';
            toast.error(msg);
            setStakePhase('idle');
            pendingArgsRef.current = null;
        }
    }, [stakeError]);

    // ── Error: stake tx reverted on-chain ─────────────────────────────────
    useEffect(() => {
        if (isStakeReverted && stakePhase === 'staking') {
            toast.dismiss();
            const msg = stakeTxError?.shortMessage || stakeTxError?.message || 'Staking transaction failed.';
            toast.error(msg);
            setStakePhase('idle');
            pendingArgsRef.current = null;
        }
    }, [isStakeReverted]);

    // ── Derived values ────────────────────────────────────────────────────
    const formattedUsdtBalance = usdtBalance != null
        ? formatUnits(usdtBalance, appConfig.USDT_DECIMALS)
        : '0';

    // Sum amountInUSD and amountInARX across all stakes returned by getAllStakedOfUser
    // Each StakeInfo: { amountInARX, amountInUSD, stakingStartedAt, stakingEndedAt, durationEnum, totalClaimableDays, claimedDays, isActive, isUnstaked }
    const totalStakedInUSD = userStakes?.length
        ? formatUnits(
              userStakes.reduce((sum, s) => sum + BigInt(s.amountInUSD ?? 0n), 0n),
              appConfig.USDT_DECIMALS
          )
        : '0';

    const totalStakedInARX = userStakes?.length
        ? formatUnits(
              userStakes.reduce((sum, s) => sum + BigInt(s.amountInARX ?? 0n), 0n),
              appConfig.ARX_DECIMALS
          )
        : '0';

    const hasExpiredUnstakeable = userStakes?.some(s => !s.isActive && !s.isUnstaked) ?? false;
    const hasClaimableRewards = rewardOverview
        ? rewardOverview.staking.claimable > 0n
        : false;

    const isBalanceLoading = isConnected && (isUsdtLoading || isStakesLoading || isRewardsLoading);

    const isLoading =
        isApprovePending || isApproveConfirming || isStakePending || isStakeConfirming;

    const isClaimLoading = isClaimPending || isClaimConfirming;
    const isUnstakeLoading = isUnstakePending || isUnstakeConfirming;

    // ── claim() ───────────────────────────────────────────────────────────
    const claim = () => {
        if (!isConnected || !address) return;
        toast.dismiss();
        toast.loading('Claiming rewards...');
        writeClaim({
            address: appConfig.STAKING_CONTRACT_ADDRESS,
            abi: appConfig.STAKING_ABI,
            functionName: 'claimStakingRewards',
            args: [],
        });
    };

    // ── unstake() ─────────────────────────────────────────────────────────
    const unstake = () => {
        if (!isConnected || !address) return;
        toast.dismiss();
        toast.loading('Unstaking...');
        writeUnstake({
            address: appConfig.STAKING_CONTRACT_ADDRESS,
            abi: appConfig.STAKING_ABI,
            functionName: 'unstakeAll',
            args: [],
        });
    };

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
        toast.dismiss();

        const currentAllowance = usdtAllowance ?? 0n;
        if (currentAllowance >= amountBig) {
            // Already approved — go straight to staking
            setStakePhase('staking');
            toast.loading('Staking in progress...');
            writeStake({
                address: appConfig.STAKING_CONTRACT_ADDRESS,
                abi: appConfig.STAKING_ABI,
                functionName: 'stakeWithUSDT',
                args: pendingArgsRef.current,
            });
        } else {
            setStakePhase('approving');
            toast.loading('Approving USDT...');
            writeApprove({
                address: appConfig.USDT_CONTRACT_ADDRESS,
                abi: appConfig.TOKEN_ABI,
                functionName: 'approve',
                args: [appConfig.STAKING_CONTRACT_ADDRESS, amountBig],
            });
        }
    };

    return {
        isConnected,
        address,
        formattedUsdtBalance,
        totalStakedInUSD,
        totalStakedInARX,
        userStakes: userStakes ?? [],
        rewardOverview,
        hasClaimableRewards,
        hasExpiredUnstakeable,
        isBalanceLoading,
        isLoading,
        isClaimLoading,
        isUnstakeLoading,
        stakePhase,
        stake,
        claim,
        unstake,
    };
};
