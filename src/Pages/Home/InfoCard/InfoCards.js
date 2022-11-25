import React from 'react';

const InfoCards = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card p-6 md:card-side shadow-xl ${bgClass} text-white mb-5`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCards;