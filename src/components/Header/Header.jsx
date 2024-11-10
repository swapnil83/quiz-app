import React from 'react';
import './Header.css';
import quizLogo from '../../assets/images/QUIZMania.png';

const Header = () => {
    return (
        <header>
            <img src={quizLogo} alt='Logo' className='responsive-logo' />
        </header>
    )
}

export default Header