import React from 'react';
import NodeSaleCard from '../../components/card/NodeSaleCard';
import { nodeSaleData } from '../../assets/mock/nodeSaleData';

const NodeSale = () => {
    return (
        <div className='mb-60'>
            <div className='container w-11/12 xl:w-full mx-auto mt-8 lg:mt-16 relative z-10'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {nodeSaleData.map(item => <NodeSaleCard
                        key={item.id}
                        item={item}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default NodeSale;