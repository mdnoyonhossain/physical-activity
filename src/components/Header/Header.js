import React from 'react';
import logo from '../../logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h5>Physical Activity</h5>
        </div>
    );
};

export default Header;