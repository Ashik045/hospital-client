import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Blog from '../Blog/Blog';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Subservice from '../Subservice/Subservice';

const MainHome = () => (
    <div>
        <Header />
        <Services />
        <Subservice />
        <Appoinment />
        <Review />
        <Blog />
        <Doctor />
        <Form />
        <Footer />
    </div>
);

export default MainHome;
