/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ReactComponent as NavLogo } from '../logo/semaphoreci.svg';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">
                <NavLogo className="navlogo" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item me-3">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">
                            Services
                        </a>
                    </li>

                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">
                            Dental care
                        </a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">
                            About
                        </a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">
                            Reviews
                        </a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
