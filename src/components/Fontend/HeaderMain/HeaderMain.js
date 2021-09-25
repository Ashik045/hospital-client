import Button from '@mui/material/Button';
import React from 'react';
import himage from '../../images/headerSide.png';
import './HeaderMain.css';

const HeaderMain = () => (
    <div className="headerMain ">
        <div className="hakaw container">
            <div className="htext">
                <h1>
                    your new smile <br /> starts hare
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ratione, placeat
                    ad sapiente officia veritatis!
                </p>

                <Button variant="contained" className="my-3">
                    Get Appoinment
                </Button>
            </div>

            <div className="himg">
                <img src={himage} alt="aa" />
            </div>
        </div>
    </div>
);

export default HeaderMain;
