import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer p-5 bg-base-200 flex text-primary px-10 rounded">
      <div className="flex-row">
        <p>Teemu Kinnunen © 2023</p>
        <p>teemu.t.k101@gmail.com</p>
        </div>
        <div className="flex pl-10 m-2 gap-5">
        <a
          className=""
          href="https://www.linkedin.com/in/teemu-kinnunen-9b938a202/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30}></FaLinkedin>
        </a>
        <a
          className=""
          href="https://github.com/teki96"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={30}></FaGithub>
        </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
