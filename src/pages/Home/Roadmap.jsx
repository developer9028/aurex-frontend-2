import React from 'react';
import Title from '../../components/Title.jsx';
import { ScrollTimeline } from '../../components/lightswind/scroll-timeline';
import { roadmapData } from '../../assets/mock/homeData.js';
import { useScrollAnimation } from '../../components/hooks/use-scroll-animation';
import bgLightImg from '../../assets/images/bg-ligh.png'

const Roadmap = () => {
    const titleRef = useScrollAnimation('fade', { duration: 1 });
    const contentRef = useScrollAnimation('fadeUp', { duration: 1, scrollTrigger: { start: 'top 80%' } });

    return (
        <div id="roadmap" className='mt-20 lg:mt-40 relative'>
            {/* AUREX ROADMAP */}
            <div className='container w-11/12 xl:w-full mx-auto relative z-10'>
                <div ref={titleRef}>
                    <Title
                        title='AUREX ROADMAP'
                    />
                </div>

                <div ref={contentRef} className='w-full'>
                    <ScrollTimeline
                        events={roadmapData}
                        title=""
                        subtitle=""
                        progressIndicator={true}
                        // cardAlignment="right"
                        revealAnimation="fade"
                    />
                </div>
            </div>

            <img
                src={bgLightImg}
                alt=""
                className='absolute top-0 -right-50 lg:-top-80 lg:-right-100'
            />

            <img
                src={bgLightImg}
                alt=""
                className='absolute top-180 -left-50 lg:-left-100'
            />

            <img
                src={bgLightImg}
                alt=""
                className='absolute -bottom-20 lg:-bottom-100 -right-50 lg:-right-100'
            />

        </div>
    );
};

export default Roadmap;