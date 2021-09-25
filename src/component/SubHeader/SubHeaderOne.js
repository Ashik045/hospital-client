/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FaComment, FaExclamationCircle, FaSearchengin } from 'react-icons/fa';
import SubHeaderTwo from '../SubHeaderTwo/SubHeaderTwo';
import './SubHeader.css';

const subInfo = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: <FaSearchengin />,
        background: 'bg-primary',
    },
    {
        title: 'Visit our location',
        description: 'Brooklyn , NY 1003 USA',
        icon: <FaComment />,
        background: 'bg-dark',
    },
    {
        title: 'Call now',
        description: 'We are open 7 days',
        icon: <FaExclamationCircle />,
        background: 'bg-primary',
    },
];

const SubHeaderOne = () => (
    <div className="container">
        <div className="row d-flex justify-content-around mainCard">
            {subInfo.map((detail, index) => (
                <SubHeaderTwo key={index} detail={detail} />
            ))}
        </div>
    </div>
);

export default SubHeaderOne;
