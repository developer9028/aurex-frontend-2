import React, { useMemo, useState } from "react";
import totalSwapIcon from "../../assets/icons/dashboard/Total-Swapped-Tokens.svg";
import totalSwapUsdtIcon from "../../assets/icons/dashboard/Total-Swapped-USDT.svg";

const stakingHistoryRows = [
    {
        slNumber: "666666666",
        dateTime: "30/5/2025",
        amount: "$750.00",
        duration: "12 Months",
    },
    {
        slNumber: "777777777",
        dateTime: "15/8/2027",
        amount: "$300.00",
        duration: "3 Months",
    },
    {
        slNumber: "888888888",
        dateTime: "22/11/2024",
        amount: "$1,200.00",
        duration: "24 Months",
    },
    {
        slNumber: "999999999",
        dateTime: "10/12/2023",
        amount: "$1,000.00",
        duration: "18 Months",
    },
    {
        slNumber: "101010101",
        dateTime: "18/1/2026",
        amount: "$600.00",
        duration: "6 Months",
    },
];

const rewardClaimRows = [
    {
        slNumber: "110110110",
        dateTime: "21/2/2026",
        amount: "$175.00",
        duration: "Reward Claimed",
    },
    {
        slNumber: "220220220",
        dateTime: "15/1/2026",
        amount: "$220.00",
        duration: "Reward Claimed",
    },
    {
        slNumber: "330330330",
        dateTime: "19/12/2025",
        amount: "$95.00",
        duration: "Reward Claimed",
    },
    {
        slNumber: "440440440",
        dateTime: "02/11/2025",
        amount: "$410.00",
        duration: "Reward Claimed",
    },
    {
        slNumber: "550550550",
        dateTime: "08/10/2025",
        amount: "$130.00",
        duration: "Reward Claimed",
    },
];

const stakeStats = [
    { title: "Total Swapped Tokens", value: "0.0000", icon: totalSwapIcon },
    { title: "Total Swapped USDT", value: "450", icon: totalSwapUsdtIcon },
];

const StakeStatCard = ({ item }) => {
    return (
        <div className="rounded-2xl border border-[#F2BE35] bg-[linear-gradient(110deg,rgba(245,190,53,0.18)_0%,rgba(22,22,24,0.95)_26%,rgba(17,17,19,1)_70%)] px-5 py-5 min-h-[120px] relative overflow-hidden">
            <div className="absolute -right-6 bottom-0 w-28 h-28 bg-[#F2BE351F] blur-2xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4 relative z-10">
                <div>
                    <p className="text-[15px] text-[#F7F7F8] font-sofia-normal">{item.title}</p>
                    <p className="mt-4 text-[30px] leading-none text-white font-sofia-semibold">
                        {item.value}
                    </p>
                </div>
                <img src={item.icon} alt={item.title} className="size-7 object-contain" />
            </div>
        </div>
    );
};

const SwapDashboard = () => {
    const [activeTab, setActiveTab] = useState("Swap History");

    const tableRows = useMemo(() => {
        if (activeTab === "Swap History") {
            return stakingHistoryRows;
        }

        return rewardClaimRows;
    }, [activeTab]);

    return (
        <section className="w-full">
            <div className="rounded-[14px] border border-[#FFFFFF18] bg-[linear-gradient(90deg,rgba(245,190,53,0.14)_0%,rgba(12,12,13,0.96)_25%,rgba(10,10,12,1)_100%)] p-5 lg:p-7">
                <h1 className="text-[26px] lg:text-[30px] text-white font-sofia-semibold">Swap</h1>
                <p className="text-[13px] lg:text-[14px] text-[#CDCFD6] mt-2 font-sofia-normal">
                    Experience effortless crypto trading with quick swaps, minimal fees, and a streamlined process from start to finish.
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {stakeStats.map((item) => (
                    <StakeStatCard key={item.title} item={item} />
                ))}
            </div>

            <div className="mt-6 rounded-[20px] border border-[#FFFFFF1A] bg-[linear-gradient(95deg,rgba(245,190,53,0.08)_0%,rgba(12,12,14,0.98)_24%,rgba(10,10,12,1)_100%)] p-4 lg:p-6">
                <div className="flex flex-wrap items-center gap-8 border-b border-[#FFFFFF1C] px-2 lg:px-4 pb-4">
                    <button
                        onClick={() => setActiveTab("Swap History")}
                        className={`text-[17px] font-sofia-semibold transition-colors ${activeTab === "Swap History" ? "text-[#F2BE35]" : "text-[#E6E7EA]"
                            }`}
                    >
                        Swap History
                    </button>
                </div>

                <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[760px] border-collapse">
                        <thead>
                            <tr className="bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.06)_100%)]">
                                <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium rounded-l-[10px]">
                                    SL Number
                                </th>
                                <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium">
                                    Date & Time
                                </th>
                                <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium">
                                    Amount
                                </th>
                                <th className="text-left py-4 px-4 text-[14px] text-white font-sofia-medium rounded-r-[10px]">
                                    Duration
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {tableRows.map((item) => (
                                <tr key={item.slNumber} className="border-b border-[#FFFFFF14]">
                                    <td className="py-6 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{item.slNumber}</td>
                                    <td className="py-6 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{item.dateTime}</td>
                                    <td className="py-6 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{item.amount}</td>
                                    <td className="py-6 px-4 text-[#E9EBEE] text-[15px] font-sofia-normal">{item.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};



export default SwapDashboard;