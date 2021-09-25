import React from 'react';
import { FaAccessibleIcon } from 'react-icons/fa';
import './HomeReview.css';

const ReviewCard = ({ data }) => {
    const { picture, name, date, title, text } = data;
    return (
        <div className="col-sm-3 carder">
            <div className="card my-3 shadow" data-aos="zoom-in">
                <div className="hoverimg">
                    <FaAccessibleIcon className="hoverit" />
                </div>
                <div className="card-img-top d-flex card-img justify-content-center align-items-center">
                    <img src={picture} alt={name} className="img-fluid" />
                    <div className="detail ms-4">
                        <h3>{name}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="card-body text-center">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-text">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
