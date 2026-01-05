import React from 'react';
import aboutImg from '../../assets/images/about.png'
import LightTitle from '../../components/LightTitle';
import { useScrollAnimation } from '../../components/hooks/use-scroll-animation';

const About = () => {
    const aboutTextRef = useScrollAnimation('fadeLeft', { duration: 1.2 });
    const aboutImgRef = useScrollAnimation('fadeRight', { duration: 1.2 });

    return (
        <div id="about" className='mt-20 lg:mt-40'>

            {/* ABOUT */}
            <div className='container w-11/12 xl:w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 mt-20 lg:mt-38'>

                <div ref={aboutTextRef} className='w-full lg:w-7/12'>
                    <LightTitle
                        title='About'
                    />
                    <p className='mt-5 text-[#EEEEEE] text-[16px] lg:text-[18px] font-normal w-full lg:w-11/12 leading-[30px]'>
                        AUREX is a hybrid RWA + AI ecosystem designed to deliver stability, transparency, and long-term value.
                        <br />
                        By combining tokenized real assets with an AI-driven liquidity engine, AUREX provides a sustainable token model built for global adoption.
                        <br /><br />
                        <span className='font-semibold text-[18px]'>
                            AI for performance, RWA for stability.
                        </span>
                    </p>
                </div>

                <div ref={aboutImgRef} className='w-full lg:w-5/12'>
                    <img
                        src={aboutImg}
                        alt=""
                        className='w-full  object-contain'
                    />
                </div>

            </div>
        </div>
    );
};

export default About;