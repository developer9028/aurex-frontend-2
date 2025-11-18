import React from 'react';
import horizontalLineImg from '../assets/images/horizantal-line.png'
import verticalLineImg from '../assets/images/vartical-line.png'

const LightTitle = ({ title }) => {
    return (
        <div className='relative'>
            <img
                src={horizontalLineImg}
                alt=""
                className='object-contain w-[150px] lg:w-[200px]'
            />
            <div className='flex items-center gap-5'>
                <img
                    src={verticalLineImg}
                    alt=""
                    className='h-[60px] lg:h-[80px] object-contain'
                />
                <h1 className='text-[24px] lg:text-[32px] font-semibold text-white relative z-10'>
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default LightTitle;