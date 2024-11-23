import React from 'react';
import './card.css';

const Card = ({ img, description, link, technologies }) => {
    return (
        <article className="card-container">
            <div className="card-img">
                <img src={img} alt="project screenshot" />
            </div>
            <div className="card-content">
                <p className="card-description">{description}</p>
                <p className="card-technologies">{technologies}</p>
                <button className="card-button">
                    <a href={link} target="_blank" rel="noopener noreferrer">View Code</a>
                </button>
            </div>
        </article>
    );
};

export default Card;
