import Button from '@mui/material/Button';
import React from 'react';
import ChildImg from '../../images/Mask Group 3.png';
import './subservice.css';

const Subservice = () => (
    <section className="subService container mt-5">
        <div className="subSerRow">
            <div className="half1">
                <img src={ChildImg} alt="aa" />
            </div>

            <div className="halg2">
                <h2>
                    exceptional dental <br /> care, on your terms
                </h2>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium{' '}
                    <br />
                    placeat non fugit totam aspernatur ea minus! Esse sapiente reprehenderit tenetur{' '}
                    <br />
                    saepe, sequi accusantium cum sint magnam eligendi consequuntur sunt. Velit
                    incidunt magni <br /> sed laudantium? placeat non fugit totam aspernatur ea
                    minus! Esse sapiente reprehenderit tenetur saepe, sequi <br /> accusantium cum
                    sint magnam eligendi consequuntur sunt. Velit incidunt magni sed laudantium?
                </p>

                <Button variant="contained">Learn More</Button>
            </div>
        </div>
    </section>
);

export default Subservice;
