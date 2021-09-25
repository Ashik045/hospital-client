import React from 'react';
import '../Home_Services/HomeService.css';

const Subservice = ({ data }) => {
    const { name, icon } = data;
    return (
        <div className="col-sm-3 shadow" data-aos="zoom-in-up">
            <div className="serviceCard text-center">
                <p className="serviceIcon">{icon}</p>

                <h3>{name}</h3>
                <p className="text-muted my-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat totam
                </p>
            </div>
        </div>
    );
};

export default Subservice;
