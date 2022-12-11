import React from 'react';
import Home from './../Pages/HomPage/Home';
import About from './../Pages/HomPage/About';
import Contact from './../Pages/HomPage/Contact';
import Experience from './../Pages/HomPage/Experience';
import Portfolio from './../Pages/HomPage/Portfolio';
import SocialLinks from './../Pages/HomPage/SocialLinks';

const HomePage = () => {
    return (
        <div>
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
            <SocialLinks />
        </div>
    );
};

export default HomePage;