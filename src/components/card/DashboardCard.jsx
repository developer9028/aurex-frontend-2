import React from 'react';
import PrimaryBtn from '../btn/PrimaryBtn';

const DashboardCard = ({ isBtn, item }) => {
    return (
        <div className='border-[1px] border-[#F2BE3566] rounded-[12px] p-5 linear-bg-white box-shadow-yellow'>
            <div className='flex items-center justify-between gap-5'>
                <p className='text-[#FAFAFB] text-[16px] lg:text-[20px] font-medium'>
                    {item?.title}
                </p>
                <div>
                    <img src={item?.icon} alt="" className='size-[30px] lg:size-[40px]' />
                </div>
            </div>
            <div className={`flex items-center gap-2 ${isBtn ? 'mt-1' : "mt-10 lg:mt-14"}`}>
                <h2 className='text-[#FAFAFB] text-[24px] lg:text-[38px] font-semibold'>
                    {item?.value}
                </h2>
                {item?.change && <p className='text-[#2FA75F] text-[16px] font-semibold'>
                    {item?.change}
                </p>}
            </div>

            {isBtn && <div className='mt-2 lg:mt-1 w-full'>
                <PrimaryBtn
                    title={item?.isLoading ? 'Claiming...' : item?.isPaused ? 'Claim Disabled' : 'Claim Now'}
                    className='w-full'
                    onClick={item?.onClick}
                    disabled={item?.isLoading || item?.value === 0 || item?.isPaused}
                />
            </div>}
        </div>
    );
};

export default DashboardCard;