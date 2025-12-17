import { useAccount as useWagmiAccount, useBalance, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { config } from '../config';
import { formatUnits, isAddress, getAddress } from 'viem';
import { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNodeList } from './UseNodeList';
import { writeContract, waitForTransactionReceipt } from '@wagmi/core';
import { NODE_ABI } from '../abi/node';
import { wagmiConfig } from '../wagmiConfig';


export const UseAdminAccount = () => {
    const [userInfo, setUserInfo] = useState({});
    const [numberOfNodeSlots, setNumberOfNodeSlots] = useState({ reserve: 0, claimed: 0, available: 0 });
    const [airdropARX, setAirdropARX] = useState({ reserve: 0, claimed: 0, available: 0 });
    const [releasedTokenARX, setReleasedTokenARX] = useState({ reserve: 0, claimed: 0, available: 0 });
    const [treasuryWallet, setTreasuryWallet] = useState("");
    const [nodeSellEndedTimestamp, setNodeSellEndedTimestamp] = useState(0);
    const [contractARXBalance, setContractARXBalance] = useState(0);
    const [contractUSDTBalance, setContractUSDTBalance] = useState(0);
    const [totalUsersClaimableUSDT, setTotalUsersClaimableUSDT] = useState(0);
    const [totalUsersCount, setTotalUsersCount] = useState(0);
    const [totalUSDTRaisedFromNodeSales, setTotalUSDTRaisedFromNodeSales] = useState(0);

    const [isUpdatingTreasuryWallet, setIsUpdatingTreasuryWallet] = useState(false);
    const [isUpdatingNodeSellEndedTimestamp, setIsUpdatingNodeSellEndedTimestamp] = useState(false);
    const [isWithdrawingARX, setIsWithdrawingARX] = useState(false);
    const [isWithdrawingUSDT, setIsWithdrawingUSDT] = useState(false);
    const [isDepositingUSDT, setIsDepositingUSDT] = useState(false);

    const ARXDecimals = config.ARX_DECIMALS;
    const USDTDecimals = config.USDT_DECIMALS;
    const OWNER = config.OWNER;

    // Get connected account info
    const { address, isConnected, isConnecting, isDisconnected, chain } = useWagmiAccount();
    const { nodeTiers } = useNodeList();


    function isOwner() {
        return address && address.toLowerCase() === OWNER.toLowerCase();
    }

    // Get totalUSDTRaisedFromNodeSales 
    const { data: totalUSDTRaisedFromNodeSalesData, error: totalUSDTRaisedFromNodeSalesError, isLoading: isTotalUSDTRaisedFromNodeSalesLoading, refetch: refetchTotalUSDTRaisedFromNodeSales } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: config.NODE_ABI,
        functionName: 'totalUSDTRaisedFromNodeSales',
        enabled: isOwner(),
    });

    // GetTotal User count 
    const { data: totalUsersCountData, error: totalUsersCountError, isLoading: isTotalUsersCountLoading, refetch: refetchTotalUsersCount } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: config.NODE_ABI,
        functionName: 'getTotalUsers',
        enabled: isOwner(),
    });
    // Get total users claimable USDT
    const { data: totalUsersClaimableUSDTData, isError: totalUsersClaimableUSDTError, isLoading: isTotalUsersClaimableUSDTLoading, refetch: refetchTotalUsersClaimableUSDT } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: config.NODE_ABI,
        functionName: 'totalUsersClaimableUSDT',
        enabled: isOwner(),
    });

    // Get contract ARX Balance
    const { data: contractARXBalanceData, isError: contractARXBalanceError, isLoading: isContractARXBalanceLoading, refetch: refetchContractARXBalance } = useReadContract({
        address: config.AUREX_TOKEN_CONTRACT_ADDRESS,
        abi: config.TOKEN_ABI,
        functionName: 'balanceOf',
        args: [config.NODE_SALE_CONTRACT_ADDRESS],
        enabled: isOwner(),
    });

    // Get contract USDT Balance
    const { data: contractUSDTBalanceData, isError: contractUSDTBalanceError, isLoading: isContractUSDTBalanceLoading, refetch: refetchContractUSDTBalance } = useReadContract({
        address: config.USDT_CONTRACT_ADDRESS,
        abi: config.TOKEN_ABI,
        functionName: 'balanceOf',
        args: [config.NODE_SALE_CONTRACT_ADDRESS],
        enabled: isOwner(),
    });



    // Get Treasury Wallet Address
    const { data: treasuryWalletData, error: treasuryWalletError, isLoading: isTreasuryWalletLoading, refetch: refetchTreasuryWallet } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: config.NODE_ABI,
        functionName: 'treasuryAddress',
        enabled: isOwner(),
    });


    // Get Treasury Wallet Address
    const { data: nodeSellEndedTimestampData, error: nodeSellEndedTimestampError, isLoading: isNodeSellEndedTimestampLoading, refetch: refetchNodeSellEndedTimestamp } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: config.NODE_ABI,
        functionName: 'nodeSellEndedTimestamp',
        enabled: isOwner(),
    });



    useEffect(() => {
        if (nodeTiers.length > 0 && isOwner()) {
            const totalSlots = nodeTiers.reduce((acc, tier) => acc + Number(tier.slot.reserve), 0);
            const claimedSlots = nodeTiers.reduce((acc, tier) => acc + Number(tier.slot.claimed), 0);
            const availableSlots = totalSlots - claimedSlots;
            setNumberOfNodeSlots({ reserve: totalSlots, claimed: claimedSlots, available: availableSlots });
            const totalAirdrop = nodeTiers.reduce((acc, tier) => acc + Number(tier.totalAirdropARXfree.reserve), 0);
            const claimedAirdrop = nodeTiers.reduce((acc, tier) => acc + Number(tier.totalAirdropARXfree.claimed), 0);
            const availableAirdrop = totalAirdrop - claimedAirdrop;
            setAirdropARX({ reserve: totalAirdrop, claimed: claimedAirdrop, available: availableAirdrop });
            const totalReleased = nodeTiers.reduce((acc, tier) => acc + Number(tier.totalReleasedTokenARX.reserve), 0);
            const claimedReleased = nodeTiers.reduce((acc, tier) => acc + Number(tier.totalReleasedTokenARX.claimed), 0);
            const availableReleased = totalReleased - claimedReleased;
            setReleasedTokenARX({ reserve: totalReleased, claimed: claimedReleased, available: availableReleased });
        }

    }, [nodeTiers]);

    useEffect(() => {
        if (totalUSDTRaisedFromNodeSalesData) {
            setTotalUSDTRaisedFromNodeSales(Number(totalUSDTRaisedFromNodeSalesData));
        }
    }, [totalUSDTRaisedFromNodeSalesData, totalUSDTRaisedFromNodeSalesError, isTotalUSDTRaisedFromNodeSalesLoading]);
    useEffect(() => {
        if (totalUsersCountData) {
            setTotalUsersCount(Number(totalUsersCountData));
        }
    }, [totalUsersCountData, totalUsersCountError, isTotalUsersCountLoading]);

    useEffect(() => {
        if (treasuryWalletData) {

            console.log("Treasury Wallet Address: ", treasuryWalletData);
            setTreasuryWallet(treasuryWalletData);
        }
    }, [treasuryWalletData, treasuryWalletError, isTreasuryWalletLoading]);

    useEffect(() => {
        if (totalUsersClaimableUSDTData) {
            setTotalUsersClaimableUSDT(Number(totalUsersClaimableUSDTData));
        }
    }, [totalUsersClaimableUSDTData, totalUsersClaimableUSDTError, isTotalUsersClaimableUSDTLoading]);


    useEffect(() => {
        if (nodeSellEndedTimestampData) {
            console.log("Node Sell Ended Timestamp: ", nodeSellEndedTimestampData);
            setNodeSellEndedTimestamp(nodeSellEndedTimestampData ? Number(nodeSellEndedTimestampData) : 0);
        }
    }, [nodeSellEndedTimestampData, nodeSellEndedTimestampError, isNodeSellEndedTimestampLoading]);

    useEffect(() => {
        if (contractARXBalanceData) {
            const formattedBalance = formatUnits(contractARXBalanceData, ARXDecimals);
            console.log("Contract ARX Balance: ", formattedBalance);
            setContractARXBalance(Number(formattedBalance));
        }
    }, [contractARXBalanceData, contractARXBalanceError, isContractARXBalanceLoading]);

    useEffect(() => {
        if (contractUSDTBalanceData) {
            const formattedBalance = formatUnits(contractUSDTBalanceData, USDTDecimals);
            console.log("Contract USDT Balance: ", formattedBalance);
            setContractUSDTBalance(Number(formattedBalance));
        }
    }, [contractUSDTBalanceData, contractUSDTBalanceError, isContractUSDTBalanceLoading]);


    useEffect(() => {
        console.log({ numberOfNodeSlots, airdropARX, releasedTokenARX });
    }, [numberOfNodeSlots, airdropARX, releasedTokenARX, nodeTiers])



    const depositUSDTToContract = async (usdtAmount) => {
        setIsDepositingUSDT(true);
        // Extract the USDT amount value from the form data object
        const usdtValue = typeof usdtAmount === 'number'
            ? parseFloat(usdtAmount)
            : parseFloat(usdtAmount.usdtAmount);
        console.log("Depositing USDT Amount to Contract:", usdtValue);
        toast.dismiss();
        toast.loading("Depositing USDT to contract...");
        try {
            const result = await writeContract(wagmiConfig, {
                address: config.USDT_CONTRACT_ADDRESS,
                abi: config.TOKEN_ABI,
                functionName: 'transfer',
                args: [config.NODE_SALE_CONTRACT_ADDRESS, BigInt(Math.floor(usdtValue * (10 ** USDTDecimals)))],
            });
            if (result) {

                toast.dismiss();
                toast.success("USDT deposited to contract successfully.");
                refetchContractUSDTBalance();
                setIsDepositingUSDT(false);
            } else {
                toast.dismiss();
                toast.error(" Deposit failed. Please try again.");
                refetchContractUSDTBalance();
                setIsDepositingUSDT(false);
            }
        } catch (err) {
            toast.dismiss();
            toast.error(" Deposit failed. Please try again.");
            console.error("Error depositing USDT to contract: ", err);
            setIsDepositingUSDT(false);
        }
    };



    const updateTreasuryWallet = async (treasuryWalletAddress) => {
        setIsUpdatingTreasuryWallet(true);
        // Extract the address string from the form data object
        const fullAddress = treasuryWalletAddress.startsWith('0x') ? treasuryWalletAddress : '0x' + treasuryWalletAddress;
        try {
            getAddress(fullAddress);
        } catch (err) {
            toast.dismiss();
            toast.error("Invalid address: " + err.message);
            setIsUpdatingTreasuryWallet(false);
            return;
        }
        const addressValue = fullAddress;

        console.log("Updating Treasury Wallet to:", addressValue);
        toast.dismiss();
        toast.loading("Updating treasury wallet...");
        try {
            const hash = await writeContract(wagmiConfig, {
                address: config.NODE_SALE_CONTRACT_ADDRESS,
                abi: NODE_ABI,
                functionName: 'setTreasuryAddress',
                args: [addressValue],
            });
            const receipt = await waitForTransactionReceipt(wagmiConfig, { hash });
            if (receipt.status === 'success') {
                toast.dismiss();
                toast.success("Treasury wallet updated successfully.");
                refetchTreasuryWallet();
                setIsUpdatingTreasuryWallet(false);
            } else {
                toast.dismiss();
                toast.error("Transaction reverted.");
                setIsUpdatingTreasuryWallet(false);
            }
        } catch (err) {
            toast.dismiss();
            toast.error("Error: " + err.message);
            console.error("Error updating treasury wallet: ", err);
            setIsUpdatingTreasuryWallet(false);

        }
    };

    const updateNodeSellEndedTimestamp = async (timestampValue) => {
        console.log("Timestamp Value Received:", timestampValue);
        setIsUpdatingNodeSellEndedTimestamp(true);
        // Extract the timestamp value from the form data object
        const tsValue = parseInt(timestampValue);
        console.log("Updating Node Sell Ended Timestamp to:", tsValue);
        toast.dismiss();
        toast.loading("Updating node sell ended timestamp...");
        try {
            const result = await writeContract(wagmiConfig, {
                address: config.NODE_SALE_CONTRACT_ADDRESS,
                abi: NODE_ABI,
                functionName: 'setNodeSellEndedTimestamp',
                args: [BigInt(tsValue)],
            });
            if (result) {
                toast.dismiss();
                toast.success("Node sell ended timestamp updated successfully.");
                refetchNodeSellEndedTimestamp();
                setIsUpdatingNodeSellEndedTimestamp(false);
            } else {
                refetchNodeSellEndedTimestamp();
                toast.dismiss();
                toast.error(" Update failed. Please try again.");
                setIsUpdatingNodeSellEndedTimestamp(false);
            }
        } catch (err) {
            toast.dismiss();
            toast.error(" Update failed. Please try again.");
            console.error("Error updating node sell ended timestamp: ", err);
            setIsUpdatingNodeSellEndedTimestamp(false);
        }
    };

    const withdrawARX = async (arxBalanceValue) => {
        // Extract the ARX balance value from the form data object
        const arxValue = typeof arxBalanceValue === 'number'
            ? parseFloat(arxBalanceValue)
            : parseFloat(arxBalanceValue.arxBalance);

        console.log("Withdrawing ARX Balance:", arxValue);
        setIsWithdrawingARX(true);
        toast.dismiss();
        toast.loading("Withdrawing ARX from contract...");
        try {
            const result = await writeContract(wagmiConfig, {
                address: config.NODE_SALE_CONTRACT_ADDRESS,
                abi: NODE_ABI,
                functionName: 'withDrawTokenByOwner',
                args: [config.AUREX_TOKEN_CONTRACT_ADDRESS, BigInt(Math.floor(arxValue * (10 ** ARXDecimals)))],
            });
            if (result) {
                toast.dismiss();
                toast.success("ARX withdrawn successfully.");
                refetchContractARXBalance();
                setIsWithdrawingARX(false);
            } else {
                refetchContractARXBalance();
                toast.dismiss();
                toast.error(" Withdrawal failed. Please try again.");
                setIsWithdrawingARX(false);

            }
        } catch (err) {
            toast.dismiss();
            toast.error(" Withdrawal failed. Please try again.");
            console.error("Error withdrawing ARX: ", err);
            setIsWithdrawingARX(false);
        }
    };

    const withdrawUSDT = async (usdtBalanceValue) => {
        // Extract the USDT balance value from the form data object
        const usdtValue = typeof usdtBalanceValue === 'number'
            ? parseFloat(usdtBalanceValue)
            : parseFloat(usdtBalanceValue.usdtBalance);
        console.log("Withdrawing USDT Balance:", usdtValue);
        toast.dismiss();
        toast.loading("Withdrawing USDT from contract...");
        setIsWithdrawingUSDT(true);
        try {
            const result = await writeContract(wagmiConfig, {
                address: config.NODE_SALE_CONTRACT_ADDRESS,
                abi: NODE_ABI,
                functionName: 'withDrawTokenByOwner',
                args: [config.USDT_CONTRACT_ADDRESS, BigInt(Math.floor(usdtValue * (10 ** USDTDecimals)))],
            });
            if (result) {

                toast.dismiss();
                toast.success("USDT withdrawn successfully.");
                refetchContractUSDTBalance();
                setIsWithdrawingUSDT(false);
            } else {
                toast.dismiss();
                toast.error(" Withdrawal failed. Please try again.");
                refetchContractUSDTBalance();
                setIsWithdrawingUSDT(false);
            }
        } catch (err) {
            toast.dismiss();
            toast.error(" Withdrawal failed. Please try again.");
            console.error("Error withdrawing USDT: ", err);
            setIsWithdrawingUSDT(false);
        }
    };


    return {
        // Account info
        address,
        isConnected,
        isConnecting,
        isDisconnected,
        chain,
        // Admin specific info
        numberOfNodeSlots,
        airdropARX,
        releasedTokenARX,
        treasuryWallet,
        updateTreasuryWallet,
        isUpdatingTreasuryWallet,
        nodeSellEndedTimestamp,
        updateNodeSellEndedTimestamp,
        isUpdatingNodeSellEndedTimestamp,
        contractARXBalance,
        contractUSDTBalance,
        withdrawARX,
        withdrawUSDT,
        isWithdrawingARX,
        isWithdrawingUSDT,
        totalUsersClaimableUSDT,
        depositUSDTToContract,
        isDepositingUSDT,
        totalUsersCount,
        totalUSDTRaisedFromNodeSales

    };
};