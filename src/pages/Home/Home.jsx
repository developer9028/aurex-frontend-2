import React from 'react';
import { BorderBeam } from "../../components/lightswind/border-beam";
import Banner from './Banner';
import OurVisionAndMission from './OurVisionAndMission';
import Ecosystem from './Ecosystem';


const Home = () => {
    return (
        <div className='mb-20'>
            <Banner />
            <OurVisionAndMission />
            <Ecosystem />
        </div>
    );
};

export default Home;