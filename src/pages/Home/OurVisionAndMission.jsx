import React from 'react';
import ourVisionImg from '../../assets/images/our-vission.png'
import ourMissionImg from '../../assets/images/our-mission.png'
import LightTitle from '../../components/LightTitle';
import { useScrollAnimation } from '../../components/hooks/use-scroll-animation';

const OurVisionAndMission = () => {
    const visionImgRef = useScrollAnimation('fadeLeft', { duration: 1.2 });
    const visionTextRef = useScrollAnimation('fadeRight', { duration: 1.2 });
    const missionTextRef = useScrollAnimation('fadeLeft', { duration: 1.2 });
    const missionImgRef = useScrollAnimation('fadeRight', { duration: 1.2 });

    return (
        <div id="vision-mission" className='mt-20 lg:mt-40'>
            {/* Our Vision */}
            <div className='container w-11/12 xl:w-full mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
                <div ref={visionImgRef} className='w-full lg:w-5/12'>
                    <img
                        src={ourVisionImg}
                        alt=""
                        className='w-full  object-contain'
                    />
                </div>
                <div ref={visionTextRef} className='w-full lg:w-7/12'>

                    <LightTitle
                        title='Our Vision'
                    />

                    <p className='mt-5 text-[#EEEEEE] text-[16px] lg:text-[18px] font-normal w-full lg:w-11/12 leading-[30px]'>
                        Oreon AI envisions a world where artificial intelligence is no longer controlled by a few corporations. We believe in democratizing <span className='text-primary'>AI through blockchain nodes and community-driven learning models.</span>
                        Our vision is to create an open ecosystem where researchers, developers, and creators can access powerful <span className='text-primary'>AI</span> capabilities without barriers—where every participant shares in the value they help create.
                        <br /><br />
                        "Building a future where intelligence belongs to everyone.
                    </p>
                </div>
            </div>

            {/* Our Mission */}
            <div className='container w-11/12 xl:w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 mt-20 lg:mt-38'>

                <div ref={missionTextRef} className='w-full lg:w-7/12'>
                    <LightTitle
                        title='Our Mission'
                    />
                    <p className='mt-5 text-[#EEEEEE] text-[16px] lg:text-[18px] font-normal w-full lg:w-11/12 leading-[30px]'>
                        Our mission is to connect <span className='text-primary'>AI researchers, node operators, and digital creators</span> in one unified ecosystem—where compute power fuels innovation and every contribution earns fair rewards. <br />
                        We're building the infrastructure for decentralized AI today by deploying distributed node networks, creating accessible training <span className='text-primary'>environments, and establishing transparent</span> reward mechanisms. <br />
                        "Empowering creators through decentralized intelligence."
                    </p>
                </div>

                <div ref={missionImgRef} className='w-full lg:w-5/12'>
                    <img
                        src={ourMissionImg}
                        alt=""
                        className='w-full  object-contain'
                    />
                </div>

            </div>
        </div>
    );
};

export default OurVisionAndMission;