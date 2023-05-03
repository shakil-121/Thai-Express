import React from 'react';
import HeroSection from './HeroSection';
import Chef from './Chef';
import DelivarySection from './delivarySection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Chef></Chef>
            <DelivarySection></DelivarySection>
        </div>
    );
};

export default Home;