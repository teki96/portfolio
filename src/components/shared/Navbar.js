import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import profilePicture from '../../assets/images/profilepicture.png'
import { motion } from "framer-motion"

const Navbar = () => {

    const menuItems = (
        <React.Fragment>
            <li> <Link to='home' spy={true} smooth={true} offset={0} duration={500} className="hover:text-secondary">Koti</Link> {" "} </li>
            <li> <Link to='about' spy={true} smooth={true} offset={-50} duration={500} className="hover:text-secondary">CV</Link> {" "} </li>
            <li> <Link to='projects' spy={true} smooth={true} offset={0} duration={500} className="hover:text-secondary">Projektit</Link> {" "} </li>
            <li> <Link to='footer' spy={true} smooth={true} offset={50} duration={500} className="hover:text-secondary">Yhteystiedot</Link> {" "} </li>
        </React.Fragment>
    )

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="navbar sticky opacity-100 z-50 top-0 bg-red-900">
            <div className="flex-1">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={profilePicture} alt=""/>
                    </div>
                </div>
                <Link to='home' spy={true} smooth={true} offset={0} duration={500} className="hover:text-secondary"><p className="btn btn-ghost normal-case font-thin text-xl">Teemu Kinnunen</p></Link>
            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-base-100 w-52" style={{ right: '-10%' }} >
                    {menuItems}
                </ul>
            </div>
        </motion.div>
    );
};

export default Navbar;