import React from 'react';
import { BorderBeam } from "../lightswind/border-beam";

const BannerCard = ({ item }) => {
    return (
        <div className="relative p-1 rounded-[10px] overflow-hidden bg-[#FFE4761a] border border-[#FFE47666]">
            <BorderBeam
                colorFrom="#FFE476"
                colorTo="#B9AA57"
                size={100}
                duration={10}
                borderThickness={1}
                beamBorderRadius={10}
            />
            <div className="relative p-4 rounded-md z-10">
                <div className='flex items-center justify-between gap-5'>
                    <p className='text-[#C1C4CC] text-[14px] font-medium'>
                        {item.title}
                    </p>
                    <img
                        src={item.icon}
                        alt=""
                        className='size-[24px] object-contain'
                    />
                </div>
                <p className='mt-6 text-[18px] text-[#FAFAFB] font-medium'>
                    {item.value}
                </p>
                <p className='mt-2 text-[12px] text-[#B2B6BF] font-normal'>
                    {item.subText}
                </p>
            </div>
        </div>

    );
};

export default BannerCard;