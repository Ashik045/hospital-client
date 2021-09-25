import React from 'react';
import Navbar from '../../Fontend/Navbar/Navbar';
import HeaderMain from '../../Home/HeaderMain/HeaderMain';
import BuisnessInfo from '../BuisnessInfo/BuisnessInfo';
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
