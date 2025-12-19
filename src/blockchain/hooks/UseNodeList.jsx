import { useReadContract } from 'wagmi';
import { config } from '../config';
import { NODE_ABI } from '../abi/node';
import { formatUnits } from 'viem';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useNodeList = () => {
    const [nodeTiers, setNodeTiers] = useState([])
    // Use getAllNodeTiers to fetch all 6 tiers in a single call
    const { data, isLoading, error, refetch } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: NODE_ABI,
        functionName: 'getAllNodeTiers',
    });


    useEffect(() => {
        if (error) {
            console.error('Error fetching node tiers:', error);
            // toast.error('Failed to fetch node tiers. Please try again later.');
        }
    }, [error]);

    useEffect(() => {

        if (data) {
            console.log('Raw Node Tiers Data:', data);
            const tiers = data ? data.map((tier, index) => {
                return {
                    index,
                    title: tier.title,
                    price: Number(tier.price),
                    airdropTokens: {
                        raw: tier.airdropTokens,
                        formatted: formatUnits(tier.airdropTokens, 18),
                    },
                    packageARX: {
                        raw: tier.packageARX,
                        formatted: formatUnits(tier.packageARX, 18),
                    },
                    slot: {
                        reserve: Number(tier.slot.reserve),
                        claimed: Number(tier.slot.claimed),
                        available: tier.slot.reserve - tier.slot.claimed,
                    },
                    totalAirdropARXfree: {
                        reserve: formatUnits(tier.totalAirdropARXfree.reserve, 18),
                        claimed: formatUnits(tier.totalAirdropARXfree.claimed, 18),
                    },
                    totalReleasedTokenARX: {
                        reserve: formatUnits(tier.totalReleasedTokenARX.reserve, 18),
                        claimed: formatUnits(tier.totalReleasedTokenARX.claimed, 18),
                    },

                };
            }) : [];

            setNodeTiers(tiers)
            console.log('Fetched Node Tiers:', tiers);
        }
    }, [data]);
    // Process the data


    return {
        nodeTiers,
        isLoading,
        hasError: !!error,
        error,
        refetch,
    };
};
