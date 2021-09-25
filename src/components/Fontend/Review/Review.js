import React from 'react';
import review1 from '../../images/Ellipse 1.png';
import review2 from '../../images/Ellipse 2.png';
import review3 from '../../images/Ellipse 3.png';
import quote from '../../images/images.png';
import ReviewCard from '../ReviewCard/ReviewCard';
import './review.css';

const reviewDetails = [
    {
        id: 1,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ipsam velit magni inventore aperiam omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ex consequatur accusamus provident, dolor quae.',
        name: 'Harry petter',
        from: 'Califonia',
        image: review1,
    },
    {
        id: 2,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ipsam velit magni inventore aperiam omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ex consequatur accusamus provident, dolor quae.',
        name: 'Julia Ann',
        from: 'Chittagong',
        image: review2,
    },
    {
        id: 3,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ipsam velit magni inventore aperiam omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ex consequatur accusamus provident, dolor quae.',
        name: 'Angela White',
        from: 'Rangpur',
        image: review3,
    },
];

const Review = () => (
    <section className="mainReview container">
        <div className="top">
            <div className="text">
                <h5 style={{ color: '#13D0D2' }}>TESTIMONIAL</h5>
                <h1>
                    What Our Patients <br /> Says
                </h1>
            </div>

            <div className="quote">
                <img src={quote} alt="aa" />
            </div>
        </div>

        <div className="bottom">
            {reviewDetails.map((details) => (
                <ReviewCard key={details.id} details={details} />
            ))}
        </div>
    </section>
);

export default Review;
