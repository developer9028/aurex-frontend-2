import React from 'react';
import { BorderBeam } from "../../components/lightswind/border-beam";
import Banner from './Banner';
import OurVisionAndMission from './OurVisionAndMission';
import Ecosystem from './Ecosystem';
import Roadmap from './Roadmap';
import Tokenomics from './Tokenomics';
import Faq from './Faq';
import About from './About';


const Home = () => {
    return (
        <div className='mb-30 overflow-hidden'>
            <Banner />
            <About />
            <OurVisionAndMission />
            <Ecosystem />
            <Roadmap />
            <Tokenomics />
            <Faq />
        </div>
    );
};

export default Home;