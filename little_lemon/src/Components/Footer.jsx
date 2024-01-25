import React from 'react';
import greenLogo from './Logos/GreenHor.png';
import greenLemon from './Logos/GreenLemon.png';
import DoormatNav from './DoormatNav';
import ContactNav from './ContactNav';
import SocialMediaNav from './SocialMediaNav';

const Footer = () => {

    const isMobile = window.innerWidth <= 600;

    const divStyle = {
        marginLeft: isMobile ? '5%': '20%',
        marginRight: isMobile ? '5%': '20%',
        height: '150px',
        backgroundColor: '#F4CE14',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    }

    return (
        <div style={{ backgroundColor: '#F4CE14', paddingTop: '10px' }}>
            <div style={ divStyle }>
                <img src={isMobile ? greenLemon : greenLogo} alt='Logo' style={{ height: '50px', alignSelf: 'center' }} />
                <DoormatNav />
                <ContactNav />
                <SocialMediaNav />
            </div>
        </div>
    );
};

export default Footer;
