import React from 'react';
import image1 from '../../images/img1.png';
import image2 from '../../images/img2.png';
import image3 from '../../images/img3.png';
import ServicesCard from '../ServiceCard/ServicesCard';
import './services.css';

const serviceDetails = [
    {
        id: 1,
        img: image1,
        title: 'Fluoride Treatement',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugiat nesciunt temporibus, repellat sequi eius?',
    },
    {
        id: 2,
        img: image2,
        title: 'Cavity Filling',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugiat nesciunt temporibus, repellat sequi eius?',
    },
    {
        id: 3,
        img: image3,
        title: 'Teath Whinting',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugiat nesciunt temporibus, repellat sequi eius?',
    },
];

const Services = () => (
    <section className="serrrrr ">
        <div className="services container">
            <div className="serHeader text-center">
                <h5 style={{ color: '#12D0D3' }}>OUR SERVICES</h5>
                <h1>Services We Provide</h1>
            </div>

            <div className="cardRow">
                {serviceDetails.map((service) => (
                    <ServicesCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    </section>
);

export default Services;
