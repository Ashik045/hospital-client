/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image1 from '../image/image1.webp';
import Image2 from '../image/image2.webp';
import Image3 from '../image/image3.jpg';
import ReviewCard from './ReviewCard';

const reviews = [
    {
        picture: Image1,
        name: 'DR. Nairobi',
        date: '2020-03-06',
        title: 'Awesome treatement',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae!',
        id: 11,
    },
    {
        picture: Image2,
        name: 'DR. John',
        date: '2018-03-06',
        title: 'Awesome treatement',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae!',
        id: 22,
    },
    {
        picture: Image3,
        name: 'DR. Harry',
        date: '2021-03-06',
        title: 'Awesome treatement',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae!',
        id: 33,
    },
];

const Review = () => (
    <section className="review-section my-5">
        <div className="header text-center">
            <h1>Reviews</h1>
            <h3>What patients says about us</h3>
        </div>
        <div className="maincard">
            <div className="row d-flex justify-content-around mx-sm-auto">
                {reviews.map((data, index) => (
                    <ReviewCard key={index} data={data} />
                ))}
            </div>
        </div>
    </section>
);

export default Review;
