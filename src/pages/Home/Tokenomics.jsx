import React from 'react';
import Title from '../../components/Title.jsx';
import chartImg from '../../assets/images/Tokenomics.png'
import { GlowingCards, GlowingCard } from "../../components/lightswind/glowing-cards"

const Tokenomics = () => {
    return (
        <div className='mt-20 lg:mt-40'>
            {/* Our Vision */}
            <div className='container w-11/12 xl:w-full mx-auto'>
                <Title
                    title='Tokenomics'
                />

                <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-10'>
                    <div className='w-full lg:w-6/12'>
                        <img src={chartImg} alt="" className='w-full object-contain' />
                    </div>
                    <div className='w-full lg:w-6/12'>
                        <GlowingCards
                            enableGlow={true}
                            glowRadius={30}
                            glowOpacity={0.8}
                            animationDuration={500}
                            gap="30px"
                            responsive={true}
                        >
                            <GlowingCard
                                glowColor="#988AFC"
                                className="space-y-4 bg-[#10111A] border-0 rounded-[16px]"
                            >
                                <div className='flex items-start justify-between gap-5'>
                                    <h3 className='text-[#988AFC] text-[24px] font-medium'>
                                        75%
                                    </h3>
                                    <div className='bg-[#988AFC] border-[1px] size-[16px] border-[1px] rounded-full' />
                                </div>
                                <p className='text-[#F5F6F7] text-[20px] font-normal mt-5'>
                                    Terms & Adviser
                                </p>
                            </GlowingCard>

                            <GlowingCard
                                glowColor="#07DBFA"
                                className="space-y-4 bg-[#10111A] border-0 rounded-[16px]"
                            >
                                <div className='flex items-start justify-between gap-5'>
                                    <h3 className='text-[#07DBFA] text-[24px] font-medium'>
                                        20%
                                    </h3>
                                    <div className='bg-[#07DBFA] border-[1px] size-[16px] border-[1px] rounded-full' />
                                </div>
                                <p className='text-[#F5F6F7] text-[20px] font-normal mt-5'>
                                    Ecosystem Development
                                </p>
                            </GlowingCard>


                            <GlowingCard
                                glowColor="#FFAE4C"
                                className="space-y-4 bg-[#10111A] border-0 rounded-[16px]"
                            >
                                <div className='flex items-start justify-between gap-5'>
                                    <h3 className='text-[#FFAE4C] text-[24px] font-medium'>
                                        5%
                                    </h3>
                                    <div className='bg-[#FFAE4C] border-[1px] size-[16px] border-[1px] rounded-full' />
                                </div>
                                <p className='text-[#F5F6F7] text-[20px] font-normal mt-5'>
                                    Partners
                                </p>
                            </GlowingCard>

                            <GlowingCard
                                glowColor="#6FD195"
                                className="space-y-4 bg-[#10111A] border-0 rounded-[16px]"
                            >
                                <div className='flex items-start justify-between gap-5'>
                                    <h3 className='text-[#6FD195] text-[24px] font-medium'>
                                        15%
                                    </h3>
                                    <div className='bg-[#6FD195] border-[1px] size-[16px] border-[1px] rounded-full' />
                                </div>
                                <p className='text-[#F5F6F7] text-[20px] font-normal mt-5'>
                                    Liquidity
                                </p>
                            </GlowingCard>

                            <GlowingCard
                                glowColor="#7086FD"
                                className="space-y-4 bg-[#10111A] border-0 rounded-[16px]"
                            >
                                <div className='flex items-start justify-between gap-5'>
                                    <h3 className='text-[#7086FD] text-[24px] font-medium'>
                                        75%
                                    </h3>
                                    <div className='bg-[#7086FD] border-[1px] size-[16px] border-[1px] rounded-full' />
                                </div>
                                <p className='text-[#F5F6F7] text-[20px] font-normal mt-5'>
                                    Community
                                </p>
                            </GlowingCard>
                        </GlowingCards>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;