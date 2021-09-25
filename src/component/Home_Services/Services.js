/* eslint-disable react/no-array-index-key */
import React from 'react';
import { BsBookHalf, BsBookmarksFill, BsCalendarFill } from 'react-icons/bs';
import Subservice from '../Subservice/Subservice';
import './HomeService.css';

const serviceObj = [
    {
        name: 'Teeth Tretment',
        icon: <BsBookHalf />,
    },
    {
        name: 'Face Trethment',
        icon: <BsBookmarksFill />,
    },
    {
        name: 'Mouth Care',
        icon: <BsCalendarFill />,
    },
];

const Services = () => (
    <section className="serviceSection">
        <div className="container">
            <div className="serviceHeader d-flex justify-content-center my-5">
                <div className="header">
                    <h1>Services</h1>
                    <h5 className="subHeader">Services We Provide</h5>
                </div>
            </div>
            <div className="row d-flex justify-content-around">
                {serviceObj.map((data, index) => (
                    <Subservice key={index} data={data} />
                ))}
            </div>
        </div>
    </section>
);

export default Services;
