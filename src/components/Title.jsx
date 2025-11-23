import React from 'react';
import lineLeftImg from '../assets/images/line-left.png'
import lineRightImg from '../assets/images/line-right.png'

const Title = ({ title }) => {
    return (
        <div className='relative w-full flex items-center justify-center gap-5'>
            <div className='w-full lg:w-[300px]'>
                <img
                    src={lineLeftImg}
                    alt=""
                    className='object-contain w-full'
                />
            </div>
            <h1 className='text-[30px] lg:text-[48px] font-semibold text-white relative z-10'>
                {title}
            </h1>
            <div className='w-full lg:w-[300px]'>
                <img
                    src={lineRightImg}
                    alt=""
                    className='object-contain w-full'
                />
            </div>
        </div>
    );
};

export default Title;