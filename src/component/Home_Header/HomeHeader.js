import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SubHeadearOne from '../SubHeader/SubHeaderOne';

const HomeHeader = () => (
    <section className="headersection">
        <Navbar />
        <Header />
        <SubHeadearOne />
    </section>
);

export default HomeHeader;
