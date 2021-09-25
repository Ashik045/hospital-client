import React from 'react';

const InfoCard = ({ info }) => (
    <div className="card">
        <div className={`main-${info.backGround} maincards`}>
            <div className="icon">{info.icon}</div>

            <div className="text ms-2">
                <h2>{info.title}</h2>
                <small>{info.description}</small>
            </div>
        </div>
    </div>
);

export default InfoCard;
