import React from 'react';
import logo from '../assets/specsLogo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <h4 className='beer-guide'>Audio Beer Guide</h4>
        </div>
    );
}

export default Header;
