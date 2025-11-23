import React from 'react';
import Title from '../../components/Title.jsx';
import { ScrollTimeline } from '../../components/lightswind/scroll-timeline';
import { roadmapData } from '../../assets/mock/homeData.js';
import { useScrollAnimation } from '../../components/hooks/use-scroll-animation';

const Roadmap = () => {
    const titleRef = useScrollAnimation('fade', { duration: 1 });
    const contentRef = useScrollAnimation('fadeUp', { duration: 1, scrollTrigger: { start: 'top 80%' } });

    return (
        <div id="roadmap" className='mt-20 lg:mt-40'>
            {/* Our Vision */}
            <div className='container w-11/12 xl:w-full mx-auto'>
                <div ref={titleRef}>
                    <Title
                        title='Roadmap'
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
        </div>
    );
};

export default Roadmap;