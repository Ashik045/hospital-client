import Rating from '@mui/material/Rating';
import React from 'react';
import '../Review/review.css';

const ReviewCard = ({ details }) => (
    <div className="mainCard">
        <div className="inner">
            <div className="cardText">{details.text}</div>

            <div className="cBottom">
                <div className="cbImg">
                    <img src={details.image} alt="" />
                </div>
                <div className="cbText">
                    <h4>{details.name}</h4>
                    <h6>{details.from}</h6>

                    <Rating name="half-rating" className="mt-3" defaultValue={5} precision={5} />
                </div>
            </div>
        </div>
    </div>
);

export default ReviewCard;
