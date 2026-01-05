import { useWriteContract, useWaitForTransactionReceipt, useReadContract } from 'wagmi';
import { readContract } from '@wagmi/core';
import { config } from '../config';
import { NODE_ABI } from '../abi/node';
import { TOKEN_ABI } from '../abi/token';
import { useState, useEffect } from 'react';
import { UseUserAccount } from './UseUserAccount';
import { useNodeList } from './UseNodeList';
import { toast } from 'react-toastify';
import { formatUnits } from 'viem';
import { wagmiConfig } from '../wagmiConfig';

export const usePurchaseNode = () => {
    const { writeContract, data: hash, isPending, error } = useWriteContract();
    const { isLoading: isConfirming, isSuccess: isConfirmed, isError: isWriteError } =
        useWaitForTransactionReceipt({
            hash,
        });

    // Approval transaction state
    const { writeContract: writeUsdtApprove, data: approveHash, isPending: isApprovePending, error: approveError } = useWriteContract();
    const { isLoading: isApproveConfirming, isSuccess: isApproveConfirmed, isError: isApproveError } = useWaitForTransactionReceipt({
        hash: approveHash,
    });

    const { address, isConnected, tokenBalance } = UseUserAccount();
    const { nodeTiers } = useNodeList();

    // Check if contract is paused
    const { data: isPaused, isLoading: isPausedLoading } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: config.NODE_ABI,
        functionName: 'paused',
    });



    const [count, setCount] = useState(1);

    useEffect(() => {
        const handleApprovalComplete = async () => {
            if (isApproveConfirmed) {
                await performPurchase();
            }
            if (isApproveError || approveError) {
                clearStorage();
                toast.dismiss();
                toast.error('Token approval failed. Please try again.');
            }
        };

        handleApprovalComplete();
    }, [isApproveConfirmed, isApproveError, approveError]);

    useEffect(() => {
        if (isConfirmed) {
            clearStorage();
            toast.dismiss();
            toast.success('Node purchase successful!');
        } else if (isWriteError || error) {
            clearStorage();
            toast.dismiss();
            toast.error('Node purchase failed. Please try again.');
        }

    }, [isConfirmed, isWriteError, error]);

    const clearStorage = () => {
        localStorage.removeItem('nodeIndex');
        localStorage.removeItem('purchaseQuantity');
    };
    const _setStorage = (index, purchaseQuantity) => {
        localStorage.setItem('nodeIndex', index);
        localStorage.setItem('purchaseQuantity', purchaseQuantity);
    }

    const _getRequiredTokens = (index, purchaseQuantity) => {
        const tier = nodeTiers.find(t => t.index === index);
        const tierSlotsAvailable = tier ? tier.slot.reserve - tier.slot.claimed : 0;
        if (purchaseQuantity > tierSlotsAvailable) {
            toast.error("No more nodes available in this tier.");
            return false;
        }

        const tokenRequired = tier ? tier.price * purchaseQuantity : 0;
        // toast.info(`Token required: ${tokenRequired}`);
        // toast.info(`Token balance: ${tokenBalance.value}`);
        return tokenRequired;
    }

    const _validatePurchase = (index, purchaseQuantity) => {
        if (!isConnected || address === undefined) {
            toast.error("You must be connected to purchase a node.");
            return false;
        }


        const tokenRequired = _getRequiredTokens(index, purchaseQuantity);

        if (tokenBalance.value < tokenRequired) {
            toast.error(`Insufficient token balance for this purchase. You have ${tokenBalance.value}, but need ${tokenRequired}.`);
            return false;
        }
        return true;
    }
    const purchaseNode = async (index, purchaseQuantity) => {




        const isValid = _validatePurchase(index, purchaseQuantity);
        if (!isValid) {
            return;
        }
        _setStorage(index, purchaseQuantity);
        const tokenRequired = _getRequiredTokens(index, purchaseQuantity);
        await performApprove(tokenRequired);
    }

    const performApprove = async (tokenRequired) => {

        console.log(" inside performApprove funciton ");

        // Fetch current allowance using readContract
        const currentAllowance = await readContract(wagmiConfig, {
            address: config.USDT_CONTRACT_ADDRESS,
            abi: TOKEN_ABI,
            functionName: 'allowance',
            args: [address, config.NODE_SALE_CONTRACT_ADDRESS],
        });

        const requiredAmount = BigInt(tokenRequired * (10 ** config.USDT_DECIMALS));
        console.log({ currentAllowance, requiredAmount });

        if (currentAllowance < requiredAmount) {
            toast.dismiss();
            toast.loading("(1/2) Approving token spend...");

            try {
                writeUsdtApprove({
                    address: config.USDT_CONTRACT_ADDRESS,
                    abi: TOKEN_ABI,
                    functionName: 'approve',
                    args: [config.NODE_SALE_CONTRACT_ADDRESS, requiredAmount],
                });


            } catch (err) {
                clearStorage();
                console.error('Approval failed:', err);
                toast.error('Token approval failed. Please try again.');
                return;
            }
        } else {

            await performPurchase();
        }

    };


    const performPurchase = async () => {
        console.log(" inside performPurchase funciton ");
        const purchaseQuantity = parseInt(localStorage.getItem('purchaseQuantity'));
        const nodeIndex = parseInt(localStorage.getItem('nodeIndex'));
        const referrer = localStorage.getItem('ref') || '0x0000000000000000000000000000000000000000';
        console.log({ purchaseQuantity, nodeIndex, referrer });
        if (!purchaseQuantity || nodeIndex === null || nodeIndex === undefined || nodeIndex < 0 || nodeIndex > 5) {
            clearStorage();
            toast.dismiss();
            toast.error('Purchase failed. Please try again.');
            return;
        }

        toast.dismiss();
        toast.loading("(2/2) Purchasing node...");
        try {
            writeContract({
                address: config.NODE_SALE_CONTRACT_ADDRESS,
                abi: NODE_ABI,
                functionName: 'purchaseNode',
                args: [BigInt(nodeIndex), BigInt(purchaseQuantity), referrer],
            });


        } catch (err) {
            clearStorage();
            toast.dismiss();
            toast.error('Purchase failed. Please try again.');
            throw err;
        }
    };

    const handleDecrease = () => {

        if (count > 1) {
            setCount(count - 1);
        } else {
            toast.error("Minimum purchase count is 1");
        }
    };

    const handleIncrease = (index, purchaseQuantity) => {
        const isValid = _validatePurchase(index, purchaseQuantity + 1);

        if (isValid) {

            setCount(count + 1);
        }
    };
    return {
        purchaseNode,
        isPending,
        isConfirming,
        isConfirmed,
        error,
        hash,
        count,
        handleDecrease,
        handleIncrease,
        // Approval states
        isApprovePending,
        isApproveConfirming,
        isApproveConfirmed,
        isPaused,
    };
};