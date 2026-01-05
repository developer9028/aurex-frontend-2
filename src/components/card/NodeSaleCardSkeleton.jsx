import React from 'react';

const NodeSaleCardSkeleton = () => {
    return (
        <div className="relative p-1 rounded-[10px] overflow-hidden bg-[#1B1B1B66] border border-[#FFE47666] animate-pulse">
            <div className="relative p-4 rounded-md">
                {/* Image skeleton */}
                <div className="w-full h-[220px] bg-gray-700 rounded"></div>

                {/* Title skeleton */}
                <div className="h-6 bg-gray-700 rounded mt-5 w-3/4 mx-auto"></div>

                {/* Price skeleton */}
                <div className="mt-5">
                    <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                    <div className="h-6 bg-gray-700 rounded w-1/2 mt-1"></div>
                </div>

                {/* Progress skeleton */}
                <div className="mt-5">
                    <div className="h-4 bg-gray-700 rounded w-1/3 mb-2"></div>
                    <div className="h-[10px] bg-gray-700 rounded"></div>
                </div>

                {/* Rewards skeleton */}
                <div className="mt-5">
                    <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-4/5 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>

                {/* Quantity skeleton */}
                <div className="mt-5">
                    <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
                    <div className="flex items-center justify-center gap-5 mt-5">
                        <div className="size-[30px] bg-gray-700 rounded"></div>
                        <div className="w-[40px] h-8 bg-gray-700 rounded"></div>
                        <div className="size-[30px] bg-gray-700 rounded"></div>
                    </div>
                </div>

                {/* Button skeleton */}
                <div className="w-full mt-5">
                    <div className="h-12 bg-gray-700 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default NodeSaleCardSkeleton;
