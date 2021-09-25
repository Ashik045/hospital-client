import React from 'react';
import './navbar.css';

const Navbar = () => (
    <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
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
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
                    <li className="nav-item mx-3">
                        <a className="nav-link" aria-current="page" href="#a">
                            Home
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#a">
                            About
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#a">
                            Dental Services
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link wcolor" href="#a">
                            Reviews
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link wcolor " href="#a">
                            Blog
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link wcolor" href="#a">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
