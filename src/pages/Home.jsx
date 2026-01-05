import React from 'react';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import Skills from '../components/Skills';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <HomeAbout />
            <Skills />
        </div>
    );
};

export default Home;
