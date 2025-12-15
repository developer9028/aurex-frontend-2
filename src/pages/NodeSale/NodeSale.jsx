import React from 'react';
import NodeSaleCard from '../../components/card/NodeSaleCard';
import NodeSaleCardSkeleton from '../../components/card/NodeSaleCardSkeleton';
import { useNodeList } from '../../blockchain/hooks/UseNodeList';

const NodeSale = () => {
    const { nodeTiers, isLoading, hasError, refetch } = useNodeList();

    return (
        <div className='mb-60'>
            <div className='container w-11/12 xl:w-full mx-auto mt-8 lg:mt-16 relative z-10'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {isLoading && (
                        <>
                            {[...Array(6)].map((_, index) => (
                                <NodeSaleCardSkeleton key={index} />
                            ))}
                        </>
                    )}
                    {hasError && <div className="text-red-500 text-center col-span-full">Error loading node tiers</div>}
                    {!isLoading && !hasError && nodeTiers.map(tier => (
                        <NodeSaleCard
                            key={tier.index}
                            item={{
                                title: tier.title,
                                index: tier.index,
                                nodePrice: tier.price.toString(),
                                soldNodes: tier.slot.claimed.toString(),
                                totalNodes: tier.slot.reserve.toString(),
                                nodeStatus: Number(tier.slot.claimed) / Number(tier.slot.reserve) * 100,
                                rewards: [
                                    `Airdrop: ${tier.airdropTokens.formatted} ARX`,
                                    `Package: ${tier.packageARX.formatted} ARX`
                                ]
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NodeSale;