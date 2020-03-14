import React from 'react';
import logo from '../../compunents/Images/logo.jpg';
import '../Header/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-img">
                <img src={logo} alt="" />
            </div>
            <div className="manubar">
                <nav>
                    <a href="/frnd-profile">Friends</a>
                    <a href="/profile">My Profile</a>
                    <a href="/about">About Us</a>
                </nav>
            </div>


        </div>
    );
};

export default Header;