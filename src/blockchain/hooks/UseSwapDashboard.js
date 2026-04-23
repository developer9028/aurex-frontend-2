import { useAccount, useReadContracts } from 'wagmi';
import { formatUnits } from 'viem';
import { useState } from 'react';
import { config as appConfig } from '../config';

const PAGE_SIZE = 10;

function fmt(bigVal, decimals = 18, maxFrac = 4) {
    if (bigVal == null) return '0.0000';
    return Number(formatUnits(bigVal, decimals)).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: maxFrac,
    });
}

function fmtTs(ts) {
    if (!ts) return '—';
    return new Date(Number(ts) * 1000).toLocaleString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit',
    });
}

export const UseSwapDashboard = () => {
    const { address, isConnected } = useAccount();
    const [page, setPage] = useState(1);

    const enabled = !!address && isConnected && !!appConfig.STAKING_CONTRACT_ADDRESS;
    const base = { address: appConfig.STAKING_CONTRACT_ADDRESS, abi: appConfig.STAKING_ABI };

    const { data, isLoading } = useReadContracts({
        contracts: [
            // 0: paginated swap history for table
            { ...base, functionName: 'getSwapHistory', args: [address, BigInt(page), BigInt(PAGE_SIZE)] },
            // 1: large fetch for computing total USDT/ARX stats (up to 500 records)
            { ...base, functionName: 'getSwapHistory', args: [address, 1n, 500n] },
        ],
        query: { enabled },
    });

    const swapHistoryRaw = data?.[0]?.result;   // [SwapInfoHistory[], total]
    const swapAllRaw     = data?.[1]?.result;   // [SwapInfoHistory[], total]

    // ── Table rows ────────────────────────────────────────────────────────
    const swapRows = (swapHistoryRaw?.[0] ?? []).map((s, i) => ({
        id: `swap-${page}-${i}`,
        dateTime:   fmtTs(s.swappedAt),
        amountARX:  `${fmt(s.amountInARX)} ARX`,
        amountUSDT: `$${fmt(s.amountInUSD)}`,
    }));
    const swapTotal      = swapHistoryRaw?.[1] != null ? Number(swapHistoryRaw[1]) : 0;
    const totalPages     = Math.max(1, Math.ceil(swapTotal / PAGE_SIZE));

    // ── Stats ─────────────────────────────────────────────────────────────
    const allRows = swapAllRaw?.[0] ?? [];
    const totalUSDT = allRows.reduce((sum, s) => sum + BigInt(s.amountInUSD ?? 0n), 0n);
    const totalARX  = allRows.reduce((sum, s) => sum + BigInt(s.amountInARX ?? 0n), 0n);

    const stats = {
        totalSwappedARX:  fmt(totalARX),
        totalReceivedUSDT: fmt(totalUSDT),
        totalSwapCount: swapTotal.toLocaleString(),
    };

    return {
        isConnected,
        isLoading,
        stats,
        swapRows,
        swapTotal,
        page,
        totalPages,
        setPage,
    };
};
