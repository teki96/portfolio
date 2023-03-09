import React from 'react';
import './Banner.css';
import { motion } from "framer-motion"
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Banner = () => {
    return (
        <div id='home' className="hero min-h-screen bg-base-200" style={{ height: '100vh' }}>
            <div className="hero-content text-center text-primary">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="max-w-md">
                    <h1 className="mb-5 text-5xl">Hei, Olen <span className='text-secondary'>Teemu</span></h1>
                    <p className=" mb-5 text-3xl font-bold">
                        <Typewriter
                            options={{
                                strings: ['Ohjelmoija', 'Web-kehittäjä', 'Opiskelija'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                    <p className="mb-5 z-0 ">Ohjelmoija jolta löytyy ~4 vuotta kokemusta JavaScript, Java ja C++ kielien kanssa. Opintojen ja harrastuneisuuden kautta web-kehitys on tullut hyvin tutuksi</p>
                    <Link to='about' spy={true} smooth={true} offset={-50} duration={500}>
                    <button className="btn btn-outline border-secondary  btn-xs sm:btn-sm md:btn-md btn-lg">Siirry CV</button>
                    </Link>
                    <p className='pt-10 font-bold opacity-80'>Löydät minut täältä</p>
                    <div className='flex gap-5 justify-center px-2 py-2 m-2 scale-200'>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            className='p-5 opacity-80 bg-base-100 border-1 rounded-lg border-black border-solid shadow-lg shadow-black hover:opacity-100' href="https://www.linkedin.com/in/teemu-kinnunen-9b938a202/" target="_blank" rel="noreferrer">
                            <FaLinkedin size={30}></FaLinkedin>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            className='p-5 opacity-80 bg-base-100 border-1 rounded-lg border-black border-solid shadow-lg shadow-black hover:opacity-100' href="https://github.com/teki96" target="_blank" rel="noreferrer">
                            <FaGithub size={30}></FaGithub>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>

    );
};

export default Banner;