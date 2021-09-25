import React from 'react';
import Image from '../image/hasi.jpg';
import './DentalCare.css';

const DentalCare = () => (
    <section className="dental-care">
        <div className="container my-2">
            <div className="row">
                <div className="col-sm-5" data-aos="fade-right" data-aos-duration="1500">
                    <img src={Image} alt="asdf" className="img-fluid" />
                </div>
                <div className="col-sm-5 offset-sm-1" data-aos="fade-left" data-aos-duration="1500">
                    <div className="header mb-4">
                        <h2>
                            Lorem ipsum dolor sit amet <br /> Lorem, ipsum dolor.
                        </h2>
                    </div>
                    <p>
                        {' '}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quo, at
                        obcaecati voluptatum facilis laudantium dolore, aliquid ducimus numquam
                        nisi, tempora distinctio sit accusamus saepe quae! Officiis eligendi, illo,
                        quidem earum ipsum totam natus quae rerum sed aliquam ipsam ipsa facere quod
                        cumque magnam unde adipisci impedit molestias officia asperiores iusto quos
                        molestiae! Corrupti veniam accusamus reiciendis optio qui ...
                    </p>

                    <button type="button" className="btn btn-primary">
                        More Details
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default DentalCare;
