import { useAccount, useReadContract, useReadContracts } from 'wagmi';
import { formatUnits } from 'viem';
import { useState } from 'react';
import { config as appConfig } from '../config';

const DURATION_LABELS = ['7 Days', '90 Days', '180 Days', '365 Days'];
const REWARD_TYPE_LABELS = ['Staking', 'Matching', 'Community'];
const PAGE_SIZE = 10;

function fmtUsd(bigVal, decimals = 18) {
    if (bigVal == null) return '0.00';
    return Number(formatUnits(bigVal, decimals)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtArx(bigVal, decimals = 18) {
    if (bigVal == null) return '0.0000';
    return Number(formatUnits(bigVal, decimals)).toLocaleString(undefined, { maximumFractionDigits: 4 });
}

function fmtTs(ts) {
    if (!ts) return '—';
    return new Date(Number(ts) * 1000).toLocaleString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit',
    });
}

export const UseStakeDashboard = () => {
    const { address, isConnected } = useAccount();
    const [stakingPage, setStakingPage] = useState(1);
    const [rewardPage, setRewardPage] = useState(1);

    const enabled = !!address && isConnected && !!appConfig.STAKING_CONTRACT_ADDRESS;
    const base = { address: appConfig.STAKING_CONTRACT_ADDRESS, abi: appConfig.STAKING_ABI };

    // ── Read all dashboard data in one batch ──────────────────────────────
    const { data, isLoading } = useReadContracts({
        contracts: [
            // 0: getUser
            { ...base, functionName: 'getUser', args: [address] },
            // 1: getRewardOverview
            { ...base, functionName: 'getRewardOverview', args: [address] },
            // 2: getStakeHistory (paginated)
            { ...base, functionName: 'getStakeHistory', args: [address, BigInt(stakingPage), BigInt(PAGE_SIZE)] },
            // 3: getRewardClaimHistory (paginated)
            { ...base, functionName: 'getRewardClaimHistory', args: [address, BigInt(rewardPage), BigInt(PAGE_SIZE)] },
        ],
        query: { enabled },
    });

    const userInfo        = data?.[0]?.result;
    const rewardOverview  = data?.[1]?.result;
    const stakeHistoryRaw = data?.[2]?.result;   // [history[], total]
    const rewardHistoryRaw = data?.[3]?.result;  // [history[], total]

    // ── Stat cards ────────────────────────────────────────────────────────
    const stats = {
        totalStakedUSD:           fmtUsd(userInfo?.totalStakedInUSD),
        totalSponsoredUsers:      userInfo?.directActiveReferralsCount != null
                                      ? Number(userInfo.directActiveReferralsCount).toLocaleString()
                                      : '0',
        totalStakedBySponsor:     fmtUsd(userInfo?.totalStakedByDirectReferralsInUSD),
        claimableStakingReward:   fmtArx(rewardOverview?.staking?.claimable),
        claimableMatchingReward:  fmtArx(rewardOverview?.matching?.claimable),
        communityReward:          fmtArx(rewardOverview?.community?.claimable),
    };

    // ── Staking history rows ──────────────────────────────────────────────
    const stakeHistoryRows = (stakeHistoryRaw?.[0] ?? []).map((s, i) => ({
        id: `stake-${i}`,
        dateTime: fmtTs(s.stakingStartedAt),
        amountUSD: `$${fmtUsd(s.amountInUSD)}`,
        amountARX: `${fmtArx(s.amountInARX)} ARX`,
        duration: DURATION_LABELS[Number(s.durationEnum)] ?? `Duration ${s.durationEnum}`,
    }));
    const stakeHistoryTotal = stakeHistoryRaw?.[1] != null ? Number(stakeHistoryRaw[1]) : 0;
    const stakeTotalPages   = Math.max(1, Math.ceil(stakeHistoryTotal / PAGE_SIZE));

    // ── Reward claim history rows ─────────────────────────────────────────
    const rewardHistoryRows = (rewardHistoryRaw?.[0] ?? []).map((r, i) => ({
        id: `reward-${i}`,
        dateTime: fmtTs(r.claimedAt),
        amountARX: `${fmtArx(r.amountInARX)} ARX`,
        rewardType: REWARD_TYPE_LABELS[Number(r.rewardType)] ?? 'Reward',
    }));
    const rewardHistoryTotal = rewardHistoryRaw?.[1] != null ? Number(rewardHistoryRaw[1]) : 0;
    const rewardTotalPages   = Math.max(1, Math.ceil(rewardHistoryTotal / PAGE_SIZE));

    return {
        isConnected,
        isLoading,
        stats,
        stakeHistoryRows,
        stakeHistoryTotal,
        stakingPage,
        stakeTotalPages,
        setStakingPage,
        rewardHistoryRows,
        rewardHistoryTotal,
        rewardPage,
        rewardTotalPages,
        setRewardPage,
    };
};
