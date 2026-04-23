import React, { useState } from "react";
import dashboardImg from "../../assets/images/dashboard-bg.png";
import copyImg from "../../assets/images/copy.png";
import tickIcon from "../../assets/icons/tick.svg";
import copyIcon from "../../assets/icons/copy.svg";
import PrimaryBtn from "../../components/btn/PrimaryBtn";
import OutlineBtn from "../../components/btn/OutlineBtn";
import qrIcon from "../../assets/icons/qr.svg";
import Title from "../../components/Title";
import DashboardCard from "../../components/card/DashboardCard";
import chainIcon from "../../assets/icons/chain.svg";
import coinStackIcon from "../../assets/icons/coin-stack.svg";
import walletYellowIcon from "../../assets/icons/wallet-yellow.svg";
import withdrewIcon from "../../assets/icons/withdrew.svg";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/lightswind/table";
import { noteHistory } from "../../assets/mock/dashboardData";
import { UseUserAccount } from "../../blockchain/hooks/UseUserAccount";

const Dashboard = () => {
  const [tab, setTab] = useState("nodeHistory");
  const [isCopy, setIsCopy] = useState(false);
  const {
    address,
    userInfo,
    isConnected,
    isConnecting,
    isDisconnected,
    chain,
    nativeBalance,
    tokenBalance,
    isUserInfoLoading,
    claimRewardsToken,
    claimReferralRewardsToken,
    claimGroupSaleBonusToken,
    isClaimingRewards,
    isConfirmingRewards,
    isClaimingReferralRewards,
    isConfirmingReferralRewards,
    isClaimingGroupSaleBonus,
    isConfirmingGroupSaleBonus,
    isPaused,
  } = UseUserAccount();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };

  const base_url = import.meta.env.VITE_BASE_URL;

  return (
    <div className="mb-60">
      <div className="container w-11/12 xl:w-full mx-auto mt-8 lg:mt-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 gap-y-10">
          <div className="w-full lg:w-6/12">
            <img
              src={dashboardImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full lg:w-4/12">
            <div className="border-[1px] border-[#F2BE3566] rounded-[12px] p-5 linear-bg-white box-shadow-yellow">
              <h2 className="text-[20px] lg:text-[32px] text-white font-sofia-semibold">
                My Referral Link
              </h2>
              <div
                className="mt-5 border-[1px] border-[#F2BE35] rounded-[16px] py-4 px-6 flex items-center gap-5 justify-between cursor-pointer"
                onClick={() =>
                  handleCopy(` ${base_url}?ref=${userInfo.address}`)
                }
              >
                <p className="text-white text-[16px] lg:text-[20px] font-sofia-normal">
                  {userInfo.address !==
                  "0x0000000000000000000000000000000000000000" ? (
                    <>
                      {base_url}?ref={userInfo.address?.slice(0, 6)}....
                      {userInfo.address?.slice(-4)}
                    </>
                  ) : (
                    "You needs to purchase a node first"
                  )}
                </p>
                {userInfo.address !==
                  "0x0000000000000000000000000000000000000000" && (
                  <div>
                    {isCopy ? (
                      <img src={tickIcon} alt="" className="size-[24px]" />
                    ) : (
                      <img src={copyImg} alt="" />
                    )}
                  </div>
                )}
              </div>
              {/* <div className='mt-5 flex flex-col lg:flex-row gap-5'>
                                <PrimaryBtn
                                    icon={copyIcon}
                                    title='Copy'
                                    className='w-full'
                                />
                                <OutlineBtn
                                    icon={copyIcon}
                                    title='Copy'
                                    className='w-full'
                                />
                                <div className='border-[1px] border-[#F2BE35] rounded-[14px] flex items-center justify-center px-4 cursor-pointer'>
                                    <img src={qrIcon} alt="" className='size-[50px]' />
                                </div>
                            </div> */}
              <div className="mt-5">
                {/*
                <p className="text-white text-[12px] lg:text-[16px] font-sofia-normal text-center">
                  Earn <span className="text-[#F2BE35]">10% Bonus</span> from
                  every successful referral
                </p>
                */}
              </div>
            </div>
          </div>
        </div>

        {/* my stats  */}
        <div className="mt-16 lg:mt-40">
          <Title title="My Stats" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
            <DashboardCard
              item={{
                title: "Active Nodes",
                value: userInfo?.totalNodes || 0,
                icon: chainIcon,
              }}
            />
            <DashboardCard
              item={{
                title: "Claimable Tokens",
                value: userInfo?.airdropRewardTokenClaimable || 0,

                icon: coinStackIcon,
              }}
            />
            <DashboardCard
              item={{
                title: "Total Claimed",
                value: userInfo?.airdropRewardTokenClaimed || 0,
                icon: walletYellowIcon,
              }}
            />
            <DashboardCard
              item={{
                title: "Ready to claim",
                value: userInfo?.airdropRewardTokenClaimable || 0,
                icon: withdrewIcon,
                onClick: claimRewardsToken,
                isLoading: isClaimingRewards || isConfirmingRewards,
                isPaused: isPaused,
              }}
              isBtn
            />
          </div>
        </div>

        {/* Referral Stats */}
        <div className="mt-16 lg:mt-40">
          <Title title="Referral Stats" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
            <DashboardCard
              item={{
                title: "Total Referred",
                value: userInfo?.totalNumberOfReferrals || 0,
                icon: chainIcon,
              }}
            />
            <DashboardCard
              item={{
                title: "Earned Tokens",
                value: userInfo?.referrelRewardTokenClaimable || 0,
                // change: '+8.9%',
                icon: coinStackIcon,
              }}
            />
            <DashboardCard
              item={{
                title: "Referral Claimed",
                value: userInfo?.referrelRewardTokenClaimed || 0,
                icon: walletYellowIcon,
              }}
            />
            <DashboardCard
              item={{
                title: "Ready to claim",
                value: userInfo?.referrelRewardTokenClaimable || 0,
                icon: withdrewIcon,
                onClick: claimReferralRewardsToken,
                isLoading:
                  isClaimingReferralRewards || isConfirmingReferralRewards,
                isPaused: isPaused,
              }}
              isBtn
            />
          </div>
        </div>
        {/* Group Sale Stats */}
        <div className="mt-16 lg:mt-40">
          <Title title="Group Sale Stats" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
            <DashboardCard
              item={{
                title: "Total Sells",
                value: userInfo?.totalPurchasesByReferrals || 0,
                icon: chainIcon,
              }}
            />
            <DashboardCard
              item={{
                title: "Claimable USD",
                value: userInfo?.referralGroupSalesRewardTokenClaimable || 0,
                // change: '+8.9%',
                icon: coinStackIcon,
              }}
            />
            <DashboardCard
              item={{
                title: "Claimed USD",
                value: userInfo?.referralGroupSalesRewardTokenClaimed || 0,
                icon: walletYellowIcon,
              }}
            />
            <DashboardCard
              item={{
                title: "Ready to claim",
                value: userInfo?.referralGroupSalesRewardTokenClaimable || 0,
                icon: withdrewIcon,
                onClick: claimGroupSaleBonusToken,
                isLoading:
                  isClaimingGroupSaleBonus || isConfirmingGroupSaleBonus,
                isPaused: isPaused,
              }}
              isBtn
            />
          </div>
        </div>

        {/* Note History  */}
        <div className="mt-16 lg:mt-40">
          {/* tab  */}
          <div className="flex items-center gap-5 border-[1px] border-[#aaa] p-3 w-fit rounded-[10px] justify-center mx-auto">
            <div
              className={`cursor-pointer px-4 py-2 rounded-[8px] ${
                tab === "nodeHistory" ? "bg-[#F2BE35] text-black" : "text-white"
              }`}
              onClick={() => setTab("nodeHistory")}
            >
              <p>Node history</p>
            </div>
            <div
              className={`cursor-pointer px-4 py-2 rounded-[8px] ${
                tab === "referralHistory"
                  ? "bg-[#F2BE35] text-black"
                  : "text-white"
              }`}
              onClick={() => setTab("referralHistory")}
            >
              <p>Referral history</p>
            </div>
            <div
              className={`cursor-pointer px-4 py-2 rounded-[8px] ${
                tab === "referrals" ? "bg-[#F2BE35] text-black" : "text-white"
              }`}
              onClick={() => setTab("referrals")}
            >
              <p>Referrals</p>
            </div>
          </div>

          {/* table  */}
          <div className="whitespace-nowrap mt-5">
            <Table>
              <TableHeader>
                <TableRow>
                  {tab === "referrals" ? (
                    <>
                      <TableHead className="text-white text-[14px] text-center font-sofia-normal">
                        Address
                      </TableHead>
                      <TableHead className="text-white text-[14px] text-center font-sofia-normal">
                        Level
                      </TableHead>
                    </>
                  ) : (
                    <>
                      <TableHead className="text-white text-[14px] text-center font-sofia-normal">
                        Date
                      </TableHead>
                      <TableHead className="text-white text-[14px] text-center font-sofia-normal">
                        Description
                      </TableHead>
                      <TableHead className="text-white text-[14px] text-center font-sofia-normal">
                        Token Amount
                      </TableHead>
                      <TableHead className="text-white text-[14px] text-center font-sofia-normal">
                        Status
                      </TableHead>
                    </>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {isUserInfoLoading ? (
                  <TableRow>
                    <TableCell
                      colSpan={tab === "referrals" ? 2 : 4}
                      className="text-center text-white py-8"
                    >
                      Loading history...
                    </TableCell>
                  </TableRow>
                ) : tab === "referrals" ? (
                  userInfo?.userReferralsList &&
                  userInfo.userReferralsList.length > 0 ? (
                    userInfo.userReferralsList.map((referral, index) => (
                      <TableRow key={referral.address || index}>
                        <TableCell className="text-gray-900 text-[14px] text-center font-sofia-normal">
                          {referral.address?.slice(0, 6)}....
                          {referral.address?.slice(-6)}
                        </TableCell>
                        <TableCell className="text-gray-900 text-[14px] text-center font-sofia-normal">
                          Level {referral?.level}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={2}
                        className="text-center text-gray-900 py-8"
                      >
                        No referrals found
                      </TableCell>
                    </TableRow>
                  )
                ) : tab === "nodeHistory" ? (
                  userInfo?.nodePurchaseHistory &&
                  userInfo.nodePurchaseHistory.length > 0 ? (
                    userInfo.nodePurchaseHistory
                      .slice()
                      .reverse()
                      .map((x, index) => (
                        <TableRow key={x.timestamp || index}>
                          <TableCell className="text-gray-900 text-[14px] text-center font-sofia-normal">
                            {x?.date} {x?.time}
                          </TableCell>
                          <TableCell className="text-gray-900 text-[14px] text-center font-sofia-normal">
                            {x?.description}
                          </TableCell>
                          <TableCell className="text-gray-900 text-[14px] text-center font-sofia-normal">
                            {x?.tokenAmount} USDT
                          </TableCell>
                          <TableCell className="text-gray-900 text-[14px] text-center font-sofia-normal">
                            {x?.status ? "Success" : "Pending"}
                          </TableCell>
                        </TableRow>
                      ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center text-gray-900 py-8"
                      >
                        No node purchase history found
                      </TableCell>
                    </TableRow>
                  )
                ) : userInfo?.referralPurchaseHistory &&
                  userInfo.referralPurchaseHistory.length > 0 ? (
                  userInfo.referralPurchaseHistory
                    .slice()
                    .reverse()
                    .map((x, index) => (
                      <TableRow key={x.timestamp || index}>
                        <TableCell className="text-gray-900 text-[14px] text-center font-sofia-normal">
                          {x?.date} {x?.time}
                        </TableCell>
                        <TableCell className="text-gray-900 text-[14px] text-center font-sofia-normal">
                          {x?.description}
                        </TableCell>
                        <TableCell className="text-gray-900 text-[14px] text-center font-sofia-normal">
                          {x?.tokenAmount} ARX
                        </TableCell>
                        <TableCell className="text-gray-900 text-[14px] text-center font-sofia-normal">
                          {x?.status ? "Success" : "Pending"}
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-gray-900 py-8"
                    >
                      No referral purchase history found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
