import React from 'react';
import HeroSection from './HeroSection';
import Chef from './Chef';
import DelivarySection from './delivarySection';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Chef></Chef>
            <DelivarySection></DelivarySection> 
            <Faq></Faq>
        </div>
    );
};

export default Home;