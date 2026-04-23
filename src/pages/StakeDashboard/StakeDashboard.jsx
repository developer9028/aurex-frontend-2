import React, { useState } from "react";
import totalStakeIcon from "../../assets/icons/dashboard/Total-Staked-(USDT).svg";
import totalUserIcon from "../../assets/icons/dashboard/total-user.svg";
import stakedBySponsorIcon from "../../assets/icons/dashboard/Total-Staked-by-sponsor.svg";
import stakeRewardIcon from "../../assets/icons/dashboard/Claimable-Staking-Reward.svg";
import matchingRewardIcon from "../../assets/icons/dashboard/Claimable-Matching-Reward.svg";
import communityRewardIcon from "../../assets/icons/dashboard/Community-Reward.svg";
import { UseStakeDashboard } from "../../blockchain/hooks/UseStakeDashboard";

// ── Stat card ──────────────────────────────────────────────────────────────
const StakeStatCard = ({ title, value, icon, loading }) => (
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
    <span className="text-[13px] text-white/50">
      {page} / {totalPages}
    </span>
    <button
      onClick={onNext}
      disabled={page >= totalPages}
      className="h-8 px-4 rounded-[8px] text-[13px] font-sofia-medium border border-white/15 text-white disabled:opacity-30 hover:border-[#F2BE35]/50 hover:text-[#F2BE35] transition-colors"
    >
      Next
    </button>
  </div>
);

// ── Empty state ────────────────────────────────────────────────────────────
const EmptyRows = ({ cols }) => (
  <tr>
    <td colSpan={cols} className="py-10 text-center text-[14px] text-white/30 font-sofia-normal">
      No records found
    </td>
  </tr>
);

// ── Main page ──────────────────────────────────────────────────────────────
const StakeDashboard = () => {
  const [activeTab, setActiveTab] = useState("staking-history");

  const {
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
  } = UseStakeDashboard();

  const statCards = [
    { title: "Total Staked (USDT)",       value: `$${stats.totalStakedUSD}`,          icon: totalStakeIcon },
    { title: "Total Users Sponsored",     value: stats.totalSponsoredUsers,             icon: totalUserIcon },
    { title: "Total Staked by Sponsor",   value: `$${stats.totalStakedBySponsor}`,     icon: stakedBySponsorIcon },
    { title: "Claimable Staking Reward",  value: stats.claimableStakingReward,          icon: stakeRewardIcon },
    { title: "Claimable Matching Reward", value: stats.claimableMatchingReward,         icon: matchingRewardIcon },
    { title: "Community Reward",          value: stats.communityReward,                 icon: communityRewardIcon },
  ];

  return (
    <section className="w-full">
      {/* Header */}
      <div className="rounded-[14px] border border-[#FFFFFF18] bg-[linear-gradient(90deg,rgba(245,190,53,0.14)_0%,rgba(12,12,13,0.96)_25%,rgba(10,10,12,1)_100%)] p-5 lg:p-7">
        <h1 className="text-[26px] lg:text-[30px] text-white font-sofia-semibold">STAKING</h1>
        <p className="text-[13px] lg:text-[14px] text-[#CDCFD6] mt-2 font-sofia-normal">
          Grow your crypto effortlessly by staking your tokens and earning steady returns without trading or complexity.
        </p>
      </div>

      {/* Stat cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {statCards.map((item) => (
          <StakeStatCard key={item.title} {...item} loading={isLoading && isConnected} />
        ))}
      </div>

      {/* History table */}
      <div className="mt-6 rounded-[20px] border border-[#FFFFFF1A] bg-[linear-gradient(95deg,rgba(245,190,53,0.08)_0%,rgba(12,12,14,0.98)_24%,rgba(10,10,12,1)_100%)] p-4 lg:p-6">

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-8 border-b border-[#FFFFFF1C] px-2 lg:px-4 pb-4">
          <button
            onClick={() => setActiveTab("staking-history")}
            className={`text-[17px] font-sofia-semibold transition-colors ${activeTab === "staking-history" ? "text-[#F2BE35]" : "text-[#E6E7EA]"}`}
          >
            Staking History
            {stakeHistoryTotal > 0 && (
              <span className="ml-2 text-[12px] text-white/40">({stakeHistoryTotal})</span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("reward-claim-history")}
            className={`text-[17px] font-sofia-semibold transition-colors ${activeTab === "reward-claim-history" ? "text-[#F2BE35]" : "text-[#E6E7EA]"}`}
          >
            Reward Claim History
            {rewardHistoryTotal > 0 && (
              <span className="ml-2 text-[12px] text-white/40">({rewardHistoryTotal})</span>
            )}
          </button>
        </div>

        <div className="mt-5 overflow-x-auto">
          {/* ── Staking History ── */}
          {activeTab === "staking-history" && (
            <>
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.06)_100%)]">
                    <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium rounded-l-[10px]">#</th>
                    <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium">Date & Time</th>
                    <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium">Amount (USDT)</th>
                    <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium">Amount (ARX)</th>
                    <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium rounded-r-[10px]">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr><td colSpan={5} className="py-10 text-center text-[14px] text-white/30 font-sofia-normal">Loading...</td></tr>
                  ) : stakeHistoryRows.length === 0 ? (
                    <EmptyRows cols={5} />
                  ) : (
                    stakeHistoryRows.map((row, idx) => (
                      <tr key={row.id} className="border-b border-[#FFFFFF14]">
                        <td className="py-5 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">
                          {(stakingPage - 1) * 10 + idx + 1}
                        </td>
                        <td className="py-5 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{row.dateTime}</td>
                        <td className="py-5 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{row.amountUSD}</td>
                        <td className="py-5 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{row.amountARX}</td>
                        <td className="py-5 px-4 text-[15px] font-sofia-normal">
                          <span className="rounded-[8px] bg-[#F2BE35]/10 border border-[#F2BE35]/30 text-[#F2BE35] px-3 py-1 text-[13px]">
                            {row.duration}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              {stakeTotalPages > 1 && (
                <Pagination
                  page={stakingPage}
                  totalPages={stakeTotalPages}
                  onPrev={() => setStakingPage(p => Math.max(1, p - 1))}
                  onNext={() => setStakingPage(p => Math.min(stakeTotalPages, p + 1))}
                />
              )}
            </>
          )}

          {/* ── Reward Claim History ── */}
          {activeTab === "reward-claim-history" && (
            <>
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.06)_100%)]">
                    <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium rounded-l-[10px]">#</th>
                    <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium">Date & Time</th>
                    <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium">Amount (ARX)</th>
                    <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium rounded-r-[10px]">Reward Type</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr><td colSpan={4} className="py-10 text-center text-[14px] text-white/30 font-sofia-normal">Loading...</td></tr>
                  ) : rewardHistoryRows.length === 0 ? (
                    <EmptyRows cols={4} />
                  ) : (
                    rewardHistoryRows.map((row, idx) => (
                      <tr key={row.id} className="border-b border-[#FFFFFF14]">
                        <td className="py-5 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">
                          {(rewardPage - 1) * 10 + idx + 1}
                        </td>
                        <td className="py-5 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{row.dateTime}</td>
                        <td className="py-5 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{row.amountARX}</td>
                        <td className="py-5 px-4 text-[15px] font-sofia-normal">
                          <span className="rounded-[8px] bg-[#F2BE35]/10 border border-[#F2BE35]/30 text-[#F2BE35] px-3 py-1 text-[13px]">
                            {row.rewardType}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              {rewardTotalPages > 1 && (
                <Pagination
                  page={rewardPage}
                  totalPages={rewardTotalPages}
                  onPrev={() => setRewardPage(p => Math.max(1, p - 1))}
                  onNext={() => setRewardPage(p => Math.min(rewardTotalPages, p + 1))}
                />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default StakeDashboard;
