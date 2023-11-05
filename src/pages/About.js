import React from 'react';
import Mission from '../components/Mission';
import Featured from '../components/Featured'
import Goals from '../components/Goals';
import GetStartedToday from '../components/GetStartedToday'
import Animation from '../components/Animation';
const About = () => {
    return (
        <>
            <Mission/>
            <Featured/>
            <Goals/>
            <Animation/>
            <GetStartedToday/>
        </>
    );
}

export default About;
