import React from 'react';
import Title from '../../components/Title.jsx';
import { ScrollTimeline } from '../../components/lightswind/scroll-timeline';
import { roadmapData } from '../../assets/mock/homeData.js';

const Roadmap = () => {
    return (
        <div className='mt-20 lg:mt-40'>
            {/* Our Vision */}
            <div className='container w-11/12 xl:w-full mx-auto'>
                <Title
                    title='Roadmap'
                />

                <div className='w-full'>
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