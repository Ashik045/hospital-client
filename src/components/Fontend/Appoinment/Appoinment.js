import Button from '@mui/material/Button';
import React from 'react';
import Doctor from '../../images/5790-removebg.png';
import './appoinment.css';

const Appoinment = () => (
    <section className="appoinment">
        <div className="bgImg" />
        <div className="appRows container">
            <div className="imgSec">
                <img src={Doctor} alt="aa" />
            </div>

            <div className="textSec">
                <h4>APPOINMENT</h4>
                <h1>
                    Make an Appoinment <br /> Today
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt nisi
                    dolores illum esse tempore reiciendis assumenda soluta recusandae facere!
                </p>
                <Button variant="contained">Learn More</Button>
            </div>
        </div>
    </section>
);

export default Appoinment;
