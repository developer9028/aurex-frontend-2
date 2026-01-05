import React from 'react';
import Title from '../../components/Title';
import { InteractiveGradient } from "../../components/lightswind/interactive-gradient-card.tsx"
import coinYellowBoxIcon from '../../assets/icons/coin-box-yellow.svg'
import coinBoxIcon from '../../assets/icons/coine-box.svg'
import walletBoxIcon from '../../assets/icons/wallet-box.svg'
import verticalImg from '../../assets/images/vertical.png'
import horizontalImg from '../../assets/images/horizental.png'
import rotateImg from '../../assets/images/ecosystem-rotate-circle.png'
import chainYellowCircleIcon from '../../assets/icons/chain-yellow.svg'
import { useScrollAnimation } from '../../components/hooks/use-scroll-animation';

const Ecosystem = () => {
    const titleRef = useScrollAnimation('fade', { duration: 1 });
    const cardsRef = useScrollAnimation('fadeUp', { duration: 1.2, scrollTrigger: { start: 'top 75%' } });

    return (
        <div id="ecosystem" className='mt-20 lg:mt-40'>
            {/* Our Vision */}
            <div className='container w-11/12 xl:w-full mx-auto'>
                <div ref={titleRef}>
                    <Title
                        title='Ecosystem'
                    />
                </div>

                <div ref={cardsRef} className='mt-12 lg:mt-20 relative'>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full lg:w-8/12 mx-auto'>

                        {/*  AI Node Network */}
                        <div className='w-full h-full relative pt-[2px] pl-[2px] lg:pt-auto lg:pl-auto lg:pr-[2px] lg:pb-[2px]'>
                            <InteractiveGradient
                                glowColor="#4ED7FA66"
                                followMouse={true}
                                hoverOnly={false}
                                intensity={100}
                                backgroundColor="#080808"
                                borderRadius='0'
                                className='border-0 h-[250px] lg:h-[300px]'
                            >
                                <div className="p-5 lg:p-20 flex flex-col items-center justify-center">
                                    <img
                                        src={coinYellowBoxIcon}
                                        alt=""
                                        className='size-[40px] lg:size-[60px]'
                                    />
                                    <h3 className='mt-10 text-center text-white text-[20px] lg:text-[32px]'>
                                        AI Node Network
                                    </h3>
                                    <p className='mt-2 text-center text-[#aaa] text-[16px] lg:text-[18px]'>
                                        Decentralized node system for rewards and token distribution.
                                    </p>
                                </div>
                            </InteractiveGradient>
                            <img
                                src={verticalImg}
                                alt=""
                                className="absolute left-0 top-0 lg:left-auto lg:top-auto lg:right-0 lg:bottom-0 h-[200px] lg:h-[240px] "
                            />

                            <img
                                src={horizontalImg}
                                alt=""
                                className="absolute left-0 top-0 lg:left-auto lg:top-auto lg:right-0 lg:bottom-0 w-[200px] lg:w-[270px]"
                            />
                        </div>


                        {/* Qreon AI Lab */}
                        <InteractiveGradient
                            glowColor="#4ED7FA66"
                            followMouse={true}
                            hoverOnly={false}
                            intensity={100}
                            backgroundColor="#080808"
                            borderRadius='0'
                            className='border-0 h-[250px] lg:h-[300px]'
                        >
                            <div className="p-5 lg:p-20 flex flex-col items-center justify-center">
                                <img
                                    src={walletBoxIcon}
                                    alt=""
                                    className='size-[40px] lg:size-[60px]'
                                />
                                <h3 className='mt-10 text-center text-white text-[20px] lg:text-[32px]'>
                                    ARX Utility Token
                                </h3>
                                <p className='mt-2 text-center text-[#aaa] text-[16px] lg:text-[18px]'>
                                    Fixed-supply token for staking and ecosystem utility.
                                </p>
                            </div>
                        </InteractiveGradient>

                        {/* Qreon NFT Hub */}
                        <InteractiveGradient
                            glowColor="#4ED7FA66"
                            followMouse={true}
                            hoverOnly={false}
                            intensity={100}
                            backgroundColor="#080808"
                            borderRadius='0'
                            className='border-0 h-[250px] lg:h-[300px]'
                        >
                            <div className="p-5 lg:p-20 flex flex-col items-center justify-center">
                                <img
                                    src={walletBoxIcon}
                                    alt=""
                                    className='size-[40px] lg:size-[60px]'
                                />
                                <h3 className='mt-10 text-center text-white text-[20px] lg:text-[32px]'>
                                    AI Trading Engine
                                </h3>
                                <p className='mt-2 text-center text-[#aaa] text-[16px] lg:text-[18px]'>
                                    AI-powered daily liquidity and performance.
                                </p>
                            </div>
                        </InteractiveGradient>

                        {/* Real-World Assets (RWA) */}
                        <div className='w-full h-full relative pb-[2px] pr-[2px] lg:pb-auto lg:pr-auto lg:pt-[2px] lg:pl-[2px]'>
                            <InteractiveGradient
                                glowColor="#4ED7FA66"
                                followMouse={true}
                                hoverOnly={false}
                                intensity={100}
                                backgroundColor="#080808"
                                borderRadius='0'
                                className='border-0 h-[250px] lg:h-[300px]'
                            >
                                <div className="p-5 lg:p-20 flex flex-col items-center justify-center">
                                    <img
                                        src={coinBoxIcon}
                                        alt=""
                                        className='size-[40px] lg:size-[60px]'
                                    />
                                    <h3 className='mt-10 text-center text-white text-[20px] lg:text-[32px]'>
                                        Real-World Assets (RWA)
                                    </h3>
                                    <p className='mt-2 text-center text-[#aaa] text-[16px] lg:text-[18px]'>
                                        Tokenized real assets backing ecosystem value.
                                    </p>
                                </div>
                            </InteractiveGradient>

                            <img src={verticalImg} alt="" className='absolute right-0 lg:right-auto lg:left-0 bottom-0 lg:bottom-auto lg:top-0 h-[200px] lg:h-[240px]' />
                            <img src={horizontalImg} alt="" className='absolute right-0 lg:left-0 bottom-0 lg:top-0 w-[200px] lg:w-[270px]' />
                        </div>
                    </div>

                    {/* center section */}
                    <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
                        <div className="relative size-[180px]">
                            {/* center logo */}
                            <img
                                src={chainYellowCircleIcon}
                                alt=""
                                className="absolute inset-0 m-auto z-10"
                            />

                            {/* rotating bg image */}
                            <img
                                src={rotateImg}
                                alt=""
                                className="absolute inset-0 w-full h-full animate-spin"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Ecosystem;