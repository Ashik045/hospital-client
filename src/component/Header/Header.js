import React from 'react';
import Image from '../image/backgroundtwo.jpg';
import './Header.css';

const Header = () => (
    <div className="mainheader">
        <div className="background" />
        <div className="container upper-background d-flex align-items-center">
            <div className="row  justify-content-center">
                <div className="col-sm-4">
                    <h1 className="header-text my-3 htext">Your new smile start from today</h1>
                    <p className="mt-4 text-muted htext">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quidem
                        omnis, adipisci dolore assumenda dicta molestiae consequatur explicabo nulla
                        illo nostrum temporibus doloremque, animi vitae ex odit rerum eum quisquam!
                    </p>
                    <button type="button" className="btn btn-warning">
                        Details hare
                    </button>
                </div>
                <div className="offset-md-1 col-sm-6 backgroundtwo">
                    <img src={Image} alt="nai" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
);

export default Header;
