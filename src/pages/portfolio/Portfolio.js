import React from 'react';
import { motion } from "framer-motion"
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
    return (
        <div id="projects" className="hero min-h-screen bg-base-300">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Projektit</h1>
      <p className="py-6">Työn alla. Päivitetään pian..</p>
      <p className='text-primary font-bold'>Nykyiset projektit löydät täältä:</p>
      <div className='flex gap-5 justify-center px-2 py-5 m-2 scale-200'>
      <motion.a
                            whileHover={{ scale: 1.2 }}
                            className='p-5 opacity-80 bg-base-100 border-1 rounded-lg border-black border-solid shadow-lg shadow-black hover:opacity-100' href="https://github.com/teki96" target="_blank" rel="noreferrer">
                            <FaGithub size={30}></FaGithub>
                        </motion.a>
                        </div>
    </div>
  </div>
</div>
    );
};

export default Portfolio;