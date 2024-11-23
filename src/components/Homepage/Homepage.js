import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import './homepage.css';

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <div className='content'>
                <p className='first-row'>Hi, my name is</p>
                <p className='second-row'>Petrana Krstevska</p>
                <p className='third-row'>
                    I'm a <span className='mark-words'>software engineering</span> student who loves turning ideas into code.
                </p>
                <div className='icons'>
                    <a href="https://github.com/krstevskap" target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/petrana-krstevska-b28a67276/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Homepage
