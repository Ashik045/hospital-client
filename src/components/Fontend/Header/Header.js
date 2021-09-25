import React from 'react';
import BuisnessInfo from '../BuisnessInfo/BuisnessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './header.css';

const Header = () => (
    <div className="header">
        <Navbar />
        <HeaderMain />

        <div className="colorBox" />

        <BuisnessInfo />
    </div>
);

export default Header;
