import React from "react";
import totalSwapIcon from "../../assets/icons/dashboard/Total-Swapped-Tokens.svg";
import totalSwapUsdtIcon from "../../assets/icons/dashboard/Total-Swapped-USDT.svg";
import { UseSwapDashboard } from "../../blockchain/hooks/UseSwapDashboard";

// ── Stat card ──────────────────────────────────────────────────────────────
const StatCard = ({ title, value, icon, loading }) => (
    <div className="rounded-2xl border border-[#F2BE35] bg-[linear-gradient(110deg,rgba(245,190,53,0.18)_0%,rgba(22,22,24,0.95)_26%,rgba(17,17,19,1)_70%)] px-5 py-5 min-h-[120px] relative overflow-hidden">
        <div className="absolute -right-6 bottom-0 w-28 h-28 bg-[#F2BE351F] blur-2xl pointer-events-none" />
        <div className="flex items-start justify-between gap-4 relative z-10">
            <div>
                <p className="text-[15px] text-[#F7F7F8] font-sofia-normal">{title}</p>
                <p className="mt-4 text-[30px] leading-none text-white font-sofia-semibold">
                    {loading ? <span className="text-[20px] text-white/40">...</span> : value}
                </p>
            </div>
            <img src={icon} alt={title} className="size-7 object-contain" />
        </div>
    </div>
);

// ── Pagination ─────────────────────────────────────────────────────────────
const Pagination = ({ page, totalPages, onPrev, onNext }) => (
    <div className="flex items-center justify-end gap-3 mt-4 px-1">
        <button
            onClick={onPrev}
            disabled={page <= 1}
            className="h-8 px-4 rounded-[8px] text-[13px] font-sofia-medium border border-white/15 text-white disabled:opacity-30 hover:border-[#F2BE35]/50 hover:text-[#F2BE35] transition-colors"
        >
            Prev
        </button>
        <span className="text-[13px] text-white/50">{page} / {totalPages}</span>
        <button
            onClick={onNext}
            disabled={page >= totalPages}
            className="h-8 px-4 rounded-[8px] text-[13px] font-sofia-medium border border-white/15 text-white disabled:opacity-30 hover:border-[#F2BE35]/50 hover:text-[#F2BE35] transition-colors"
        >
            Next
        </button>
    </div>
);

// ── Main page ──────────────────────────────────────────────────────────────
const SwapDashboard = () => {
    const {
        isConnected,
        isLoading,
        stats,
        swapRows,
        swapTotal,
        page,
        totalPages,
        setPage,
    } = UseSwapDashboard();

    const statCards = [
        { title: "Total ARX Swapped",    value: stats.totalSwappedARX,   icon: totalSwapIcon },
        { title: "Total USDT Received",  value: `$${stats.totalReceivedUSDT}`, icon: totalSwapUsdtIcon },
    ];

    return (
        <section className="w-full">
            {/* Header */}
            <div className="rounded-[14px] border border-[#FFFFFF18] bg-[linear-gradient(90deg,rgba(245,190,53,0.14)_0%,rgba(12,12,13,0.96)_25%,rgba(10,10,12,1)_100%)] p-5 lg:p-7">
                <h1 className="text-[26px] lg:text-[30px] text-white font-sofia-semibold">Swap</h1>
                <p className="text-[13px] lg:text-[14px] text-[#CDCFD6] mt-2 font-sofia-normal">
                    Experience effortless crypto trading with quick swaps, minimal fees, and a streamlined process from start to finish.
                </p>
            </div>

            {/* Stat cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {statCards.map((c) => (
                    <StatCard key={c.title} {...c} loading={isLoading && isConnected} />
                ))}
            </div>

            {/* Swap history table */}
            <div className="mt-6 rounded-[20px] border border-[#FFFFFF1A] bg-[linear-gradient(95deg,rgba(245,190,53,0.08)_0%,rgba(12,12,14,0.98)_24%,rgba(10,10,12,1)_100%)] p-4 lg:p-6">
                <div className="flex items-center gap-4 border-b border-[#FFFFFF1C] px-2 lg:px-4 pb-4">
                    <span className="text-[17px] font-sofia-semibold text-[#F2BE35]">Swap History</span>
                    {swapTotal > 0 && (
                        <span className="text-[12px] text-white/40">({swapTotal})</span>
                    )}
                </div>

                <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[620px] border-collapse">
                        <thead>
                            <tr className="bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.06)_100%)]">
                                <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium rounded-l-[10px]">#</th>
                                <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium">Date & Time</th>
                                <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium">ARX Swapped</th>
                                <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium rounded-r-[10px]">USDT Received</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td colSpan={4} className="py-10 text-center text-[14px] text-white/30 font-sofia-normal">
                                        Loading...
                                    </td>
                                </tr>
                            ) : swapRows.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="py-10 text-center text-[14px] text-white/30 font-sofia-normal">
                                        No swap history found
                                    </td>
                                </tr>
                            ) : (
                                swapRows.map((row, idx) => (
                                    <tr key={row.id} className="border-b border-[#FFFFFF14]">
                                        <td className="py-5 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">
                                            {(page - 1) * 10 + idx + 1}
                                        </td>
                                        <td className="py-5 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{row.dateTime}</td>
                                        <td className="py-5 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{row.amountARX}</td>
                                        <td className="py-5 px-4 text-[15px] font-sofia-normal">
                                            <span className="rounded-[8px] bg-[#26A17B]/10 border border-[#26A17B]/30 text-[#26A17B] px-3 py-1 text-[13px]">
                                                {row.amountUSDT}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        onPrev={() => setPage(p => Math.max(1, p - 1))}
                        onNext={() => setPage(p => Math.min(totalPages, p + 1))}
                    />
                )}
            </div>
        </section>
    );
};

export default SwapDashboard;
