import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';

const AC = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Experience></Experience>
            <Portfolio></Portfolio>
            <Services></Services>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default AC;