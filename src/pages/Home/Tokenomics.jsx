import React from 'react';
import Title from '../../components/Title.jsx';
import chartImg from '../../assets/images/Tokenomics.png'
import { GlowingCards, GlowingCard } from "../../components/lightswind/glowing-cards"
import { useScrollAnimation } from '../../components/hooks/use-scroll-animation';

const Tokenomics = () => {
    const titleRef = useScrollAnimation('fade', { duration: 1 });
    const chartRef = useScrollAnimation('fadeLeft', { duration: 1.2 });
    const cardsRef = useScrollAnimation('fadeRight', { duration: 1.2 });

    return (
        <div id="tokenomics" className='mt-20 lg:mt-40'>
            {/* Our Vision */}
            <div className='container w-11/12 xl:w-full mx-auto'>
                <div ref={titleRef}>
                    <Title
                        title='Tokenomics'
                    />
                </div>

                <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-10'>
                    <div ref={chartRef} className='w-full lg:w-6/12'>
                        <img src={chartImg} alt="" className='w-full object-contain' />
                    </div>
                    <div ref={cardsRef} className='w-full lg:w-6/12'>
                        <GlowingCards
                            enableGlow={true}
                            glowRadius={30}
                            glowOpacity={0.8}
                            animationDuration={500}
                            gap="30px"
                            responsive={true}
                        >
                            {[
                                { id: 1, color: '#5974FF', percent: 65, label: 'Minting Reward' },
                                { id: 2, color: '#6FD195', percent: 10, label: 'Node AirDrop' },
                                { id: 3, color: '#FF8C00', percent: 10, label: 'Listing Reserve' },
                                { id: 4, color: '#00DEFF', percent: 5, label: 'Founding Team & Advisor' },
                                { id: 5, color: '#988AFC', percent: 5, label: 'Ecosystem and Utilites Development' },
                                { id: 6, color: '#1F93FF', percent: 4.5, label: 'Marketing Development' },
                                { id: 7, color: '#FF928A', percent: 0.5, label: 'Airdrop' },
                            ].map(x => <GlowingCard
                                key={x.id}
                                glowColor={x.color}
                                className="space-y-4 bg-[#10111A] border-0 rounded-[16px]"
                            >
                                <div className='flex items-start justify-between gap-5'>
                                    <h3
                                        className='text-[24px] font-medium'
                                        style={{ color: x.color }}
                                    >
                                        {x.percent}%
                                    </h3>
                                    <div
                                        className='border-[1px] size-[16px] border-[1px] rounded-full'
                                        style={{ background: x.color }}
                                    />
                                </div>
                                <p className='text-[#F5F6F7] text-[20px] font-normal mt-5'>
                                    {x.label}
                                </p>
                            </GlowingCard>)}

                        </GlowingCards>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;