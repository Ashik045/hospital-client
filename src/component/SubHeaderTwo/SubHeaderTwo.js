import React from 'react';
import '../SubHeader/SubHeader.css';

const SubHeaderTwo = ({ detail }) => {
    const { title, discription, icon, background } = detail;
    return (
        <div className="col-sm-3 text-white my-3" data-aos="zoom-in" data-aos-duration="1500">
            <div
                className={`detailcard d-flex justify-content-center align-items-center ${background}`}
            >
                <div className="fontIcon mx-2">{icon}</div>
                <div className="title">{title}</div>
                <div className="descrip">{discription}</div>
            </div>
        </div>
    );
};

export default SubHeaderTwo;
