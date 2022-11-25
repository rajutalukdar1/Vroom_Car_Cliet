import React from 'react';
import contact from '../../../assets/icon-image/phone.svg'
import location from '../../../assets/icon-image/marker.svg'
import freeDlv from '../../../assets/icon-image/free-shipping.png'
import InfoCards from './InfoCards';

const InfoCard = () => {

    const cardData = [
        {
            id: 1,
            name: 'Contact us now',
            description: '01306772769 / or / 01642221716',
            icon: contact,
            bgClass: 'bg-neutral'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Manipur-New Market,Dhaka Bangladesh',
            icon: location,
            bgClass: 'bg-warning'
        },
        {
            id: 3,
            name: 'Free Delivery',
            description: 'Our all Bangladesh ',
            icon: freeDlv,
            bgClass: 'bg-neutral'
        },
    ]

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCards
                    key={card.id}
                    card={card}
                ></InfoCards>)
            }
        </div>
    );
};

export default InfoCard;