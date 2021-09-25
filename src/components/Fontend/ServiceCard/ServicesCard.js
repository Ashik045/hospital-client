import React from 'react';
import '../Services/services.css';

const ServicesCard = ({ service }) => (
    <div className="allCard">
        <div className="cardBody">
            <img src={service.img} alt="aa" />
            <h4>{service.title}</h4>

            <p>{service.description}</p>
        </div>
    </div>
);

export default ServicesCard;
