import React from 'react';
import "./topnavbar.css";

const TopNavBar = () => {
    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/subscribe">Subscribe</a></li>
        </ul>
    )
};

export default TopNavBar;