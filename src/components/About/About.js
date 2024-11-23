import React from 'react';
import "./about.css";

const About = () => {
    return (
        <div className='about-container'>
            <h1>About me</h1>
            <p>
                Hi! My name is Petrana Krstevska. I'm 23 and currently studying at 
                <a href='https://www.finki.ukim.mk/' target="_blank" rel="noopener noreferrer" className='link'> FINKI</a>,
                with a passion for front-end development. I love exploring new technologies
                and applying my skills. When I’m not coding, I enjoy unwinding with movies,
                comics, books, and photography. I’m always looking for new ways to learn and improve,
                and I enjoy creating projects that bring ideas to life.
                Recently, I have been working with these technologies:
            </p>
            <div className='technologies'>
                <ul className='left'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <ul className='right'>
                    <li>Java</li>
                    <li>React</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
        </div>
    )
}

export default About
