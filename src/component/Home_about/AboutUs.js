import React from 'react';
import Image from '../image/bgremove.png';
import './AboutUs.css';

const AboutUs = () => (
    <section className="adout-us">
        <h1 className="text-center my-5">About us</h1>
        <div className="backgrounds">
            <div className="backgroundpic" />
            <div className="row d-flex justify-content-center bgrow">
                <div className="col-sm-3" data-aos="fade-right" data-aos-duration="1500">
                    <img src={Image} alt="nai" className="d-none d-md-block bgremove" />
                </div>
                <div className="col-sm-5 bgtext" data-aos="fade-left" data-aos-duration="1500">
                    <div className="">
                        <h2>Appoinment</h2>
                        <h1>Make an Appoinment Today</h1>
                        <p className="text-muted my-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                            veniam hic mollitia suscipit quibusdam aliquam.
                        </p>
                        <button type="button" className="btn btn-primary">
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutUs;
