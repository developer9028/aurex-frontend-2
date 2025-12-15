import { useAccount as useWagmiAccount, useBalance, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { config } from '../config';
import { formatUnits } from 'viem';
import { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';



export const UseUserAccount = () => {
    const [userInfo, setUserInfo] = useState({});
    const [formattedTokenBalance, setFormattedTokenBalance] = useState(0);

    const ARXDecimals = config.ARX_DECIMALS;
    const USDTDecimals = config.USDT_DECIMALS;

    // Get connected account info
    const { address, isConnected, isConnecting, isDisconnected, chain } = useWagmiAccount();



    // claim rewards token hook
    const { writeContract: claimRewards, data: claimRewardsHash, isPending: isClaimingRewards, error: claimRewardsWriteError } = useWriteContract();
    const { isLoading: isConfirmingRewards, isSuccess: isConfirmedRewards, isError: isClaimRewardsError } =
        useWaitForTransactionReceipt({
            hash: claimRewardsHash,
        });
    // clain referral rewards token hook
    const { writeContract: claimReferralRewards, data: claimReferralRewardsHash, isPending: isClaimingReferralRewards, error: claimReferralRewardsWriteError } = useWriteContract();
    const { isLoading: isConfirmingReferralRewards, isSuccess: isConfirmedReferralRewards, isError: isClaimReferralRewardsError } =
        useWaitForTransactionReceipt({
            hash: claimReferralRewardsHash,
        });


    // claimGroupSaleBonus token hook
    const { writeContract: claimGroupSaleBonus, data: claimGroupSaleBonusHash, isPending: isClaimingGroupSaleBonus, error: claimGroupSaleBonusWriteError } = useWriteContract();
    const { isLoading: isConfirmingGroupSaleBonus, isSuccess: isConfirmedGroupSaleBonus, isError: isClaimGroupSaleBonusError } =
        useWaitForTransactionReceipt({
            hash: claimGroupSaleBonusHash,
        });


    // Get USDT token balance
    const { data: userTokenBalance, isLoading: isTokenBalanceLoading } = useReadContract({
        address: config.USDT_CONTRACT_ADDRESS,
        abi: config.TOKEN_ABI,
        functionName: 'balanceOf',
        args: [address],
        enabled: !!address && isConnected,
    });

    // Get user info from node sale contract
    const { data: userInfoData, error: userInfoError, isLoading: isUserInfoLoading } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: config.NODE_ABI,
        functionName: 'getUserInfo',
        args: [address],
        enabled: !!address && isConnected,
    });
    // Get user history from node sale contract
    const { data: userHistoryData, error: userHistoryError, isLoading: isUserHistoryLoading } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: config.NODE_ABI,
        functionName: 'getUserHistory',
        args: [address],
        enabled: !!address && isConnected,
    });

    // Get user history Referral List
    const { data: userReferralListData, error: userReferralListError, isLoading: isUserReferralListLoading } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: config.NODE_ABI,
        functionName: 'getUserReferrals',
        args: [address],
        enabled: !!address && isConnected,
    });



    const claimRewardsToken = async () => {
        toast.dismiss();
        toast.loading("Claiming rewards...");
        try {
            await claimRewards({
                address: config.NODE_SALE_CONTRACT_ADDRESS,
                abi: config.NODE_ABI,
                functionName: 'claimRewardsToken',
            });
        } catch (err) {
            toast.dismiss();
            toast.error("Failed to claim rewards. Please try again.");
            console.error("Error claiming rewards: ", err);
        }
    };

    const claimReferralRewardsToken = async () => {
        toast.dismiss();
        toast.loading("Claiming rewards...");
        try {
            await claimReferralRewards({
                address: config.NODE_SALE_CONTRACT_ADDRESS,
                abi: config.NODE_ABI,
                functionName: 'claimReferralRewards',
            });
        } catch (err) {
            toast.dismiss();
            toast.error("Failed to claim referral rewards. Please try again.");
            console.error("Error claiming rewards: ", err);
        }
    };
    const claimGroupSaleBonusToken = async () => {
        toast.dismiss();
        toast.loading("Claiming rewards...");
        try {
            await claimGroupSaleBonus({
                address: config.NODE_SALE_CONTRACT_ADDRESS,
                abi: config.NODE_ABI,
                functionName: 'claimGroupSaleBonus',
            });
        } catch (err) {
            toast.dismiss();
            toast.error("Failed to claim group sale bonus. Please try again.");
            console.error("Error claiming rewards: ", err);
        }
    };

    useEffect(() => {
        if (userHistoryData) {
            console.log("Raw User History Data: ", userHistoryData);
            // Destructure as array, not object
            const [nodePurchaseHistory, referralPurchaseHistory] = userHistoryData;

            console.log("Node Purchase History: ", nodePurchaseHistory);
            console.log("Referral Purchase History: ", referralPurchaseHistory);

            // Format node purchase history
            const formattedNodeHistory = nodePurchaseHistory ? nodePurchaseHistory.map(history => ({
                timestamp: Number(history.timestamps),
                date: new Date(Number(history.timestamps) * 1000).toLocaleDateString(),
                time: new Date(Number(history.timestamps) * 1000).toLocaleTimeString(),
                description: history.description,
                tokenAmount: history.tokenAmount ? Number(history.tokenAmount) : '0',
                status: history.status,
                type: 'node_purchase'
            })) : [];

            // Format referral purchase history
            const formattedReferralHistory = referralPurchaseHistory ? referralPurchaseHistory.map(history => ({
                timestamp: Number(history.timestamps),
                date: new Date(Number(history.timestamps) * 1000).toLocaleDateString(),
                time: new Date(Number(history.timestamps) * 1000).toLocaleTimeString(),
                description: history.description,
                tokenAmount: history.tokenAmount ? formatUnits(history.tokenAmount, ARXDecimals) : '0',
                status: history.status,
                type: 'referral_purchase'
            })) : [];

            console.log("Formatted Node Purchase History: ", formattedNodeHistory);
            console.log("Formatted Referral Purchase History: ", formattedReferralHistory);

            setUserInfo(prev => ({
                ...prev,
                nodePurchaseHistory: formattedNodeHistory,
                referralPurchaseHistory: formattedReferralHistory
            }));
        }
        if (userInfoData) {
            console.log("Raw User Info Data: ", userInfoData);

            let userData = {
                address: userInfoData.userAddress,
                totalNodes: userInfoData.nodeTiersOwned ? userInfoData.nodeTiersOwned.reduce((acc, value) => acc + Number(value), 0) : 0,

                airdropRewardTokenClaimable: (userInfoData.airdropReward.claimable ? Number(formatUnits(userInfoData.airdropReward.claimable, ARXDecimals)) : 0),
                airdropRewardTokenClaimed: (userInfoData.airdropReward.claimed ? Number(formatUnits(userInfoData.airdropReward.claimed, ARXDecimals)) : 0),

                referrelRewardTokenClaimable: (userInfoData.referralReward.claimable ? Number(formatUnits(userInfoData.referralReward.claimable, ARXDecimals)) : 0),
                referrelRewardTokenClaimed: (userInfoData.referralReward.claimed ? Number(formatUnits(userInfoData.referralReward.claimed, ARXDecimals)) : 0),
                referralGroupSalesRewardTokenClaimable: (userInfoData.referralGroupSalesReward.claimable ? Number(userInfoData.referralGroupSalesReward.claimable, 0) : 0),
                referralGroupSalesRewardTokenClaimed: (userInfoData.referralGroupSalesReward.claimed ? Number(userInfoData.referralGroupSalesReward.claimed, 0) : 0),
                totalPurchasesByReferrals: (userInfoData.totalPurchasesByReferrals ? Number(userInfoData.totalPurchasesByReferrals) : 0),
                totalNumberOfReferrals: (userInfoData.totalNumberOfReferrals ? Number(userInfoData.totalNumberOfReferrals) : 0),

            };

            setUserInfo(prev => ({
                ...prev,
                ...userData
            }));
        }
    }, [userInfoData, userHistoryData]);

    useEffect(() => {
        if (userReferralListData) {
            console.log("User Referral List Data: ", userReferralListData);
            const [level1Referrals, level2Referrals] = userReferralListData;
            let userReferralsList = level1Referrals.map(address => ({
                address: address,
                level: 1,
            }));
            userReferralsList = userReferralsList.concat(level2Referrals.map(address => ({
                address: address,
                level: 2,
            })));
            setUserInfo(prev => ({
                ...prev,
                userReferralsList: userReferralsList,
            }));
        }
    }, [userReferralListData]);

    useEffect(() => {
        if (userTokenBalance) {
            const balance = formatUnits(userTokenBalance, USDTDecimals)
            setFormattedTokenBalance(balance);
        }
    }, [userTokenBalance]);


    useEffect(() => {
        console.log("User Info Data: ", userInfo);
    }, [userInfo]);

    useEffect(() => {
        if (isConfirmedRewards) {
            toast.dismiss();
            toast.success("Rewards claimed successfully!");
        } else if (isClaimRewardsError || claimRewardsWriteError) {
            toast.dismiss();
            toast.error("Failed to claim rewards. Please try again.");
        }
    }, [isConfirmingRewards, isConfirmedRewards, isClaimRewardsError, claimRewardsWriteError]);

    useEffect(() => {
        if (isConfirmedReferralRewards) {
            toast.dismiss();
            toast.success("Referral rewards claimed successfully!");
        } else if (isClaimReferralRewardsError || claimReferralRewardsWriteError) {
            toast.dismiss();
            toast.error("Failed to claim referral rewards. Please try again.");
        }
    }, [isConfirmingReferralRewards, isConfirmedReferralRewards, isClaimReferralRewardsError, claimReferralRewardsWriteError]);

    useEffect(() => {
        if (isConfirmedGroupSaleBonus) {
            toast.dismiss();
            toast.success("Group sale bonus claimed successfully!");
        } else if (isClaimGroupSaleBonusError || claimGroupSaleBonusWriteError) {
            toast.dismiss();
            toast.error("Failed to claim group sale bonus. Please try again.");
        }
    }, [isConfirmingGroupSaleBonus, isConfirmedGroupSaleBonus, isClaimGroupSaleBonusError, claimGroupSaleBonusWriteError]);

    return {
        // Account info
        address,
        userInfo,
        isConnected,
        isConnecting,
        isDisconnected,
        claimRewardsToken,
        claimReferralRewardsToken,
        claimGroupSaleBonusToken,
        chain,

        isClaimingRewards, // reward
        isConfirmingRewards, // reward
        isClaimingReferralRewards, // referral reward
        isConfirmingReferralRewards, // referral reward
        isClaimingGroupSaleBonus, // group sale bonus
        isConfirmingGroupSaleBonus, // group sale bonus



        tokenBalance: {
            value: formattedTokenBalance,
            decimals: config.USDT_DECIMALS,
            symbol: config.USDT_SYMBOL,
            isLoading: isTokenBalanceLoading,
        },
    };
};