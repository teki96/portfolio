import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import About from '../pages/about/About';
import Portfolio from '../pages/portfolio/Portfolio';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <About />
            <Portfolio />
            <Footer />
        </div>
    );
};

export default Main;