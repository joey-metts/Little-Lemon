import React, { useState, useEffect } from 'react';
import yellowLemon from './Logos/YellowLemon.png';

const Nav = () => {
    const [showNav, setShowNav] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    const containerStyle = {
        margin: '0 auto',
        padding: '15px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: showNav ? '#495E57' : 'transparent',
        transition: 'background-color 0.3s ease-in-out'
    };

    const listStyle = {
        flex: '1',
        textAlign: 'center',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    };

    const aStyle = { color: '#F4CE14', fontFamily: 'Markazi Text' };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setShowNav(prevScrollPos > currentScrollPos || currentScrollPos < 50);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div style={{ height: showNav ? '125px' : '0', overflow: 'hidden', backgroundColor: showNav ? '#495E57' : 'transparent' }}>
            <div style={containerStyle}>
                <ul style={{ listStyle: 'none', marginRight: '0', paddingRight: '20%', paddingLeft: '20%', display: 'flex' }}>
                    <li style={listStyle}>
                        <img src={yellowLemon} alt='Logo' style={{ height: '75px', marginRight: '5px' }} />
                    </li>
                    <li style={listStyle}>
                        <a href="Home.js" style={aStyle}>Home</a>
                    </li>
                    <li style={listStyle}>
                        <a href="About.js" style={aStyle}>About</a>
                    </li>
                    <li style={listStyle}>
                        <a href="Menu.js" style={aStyle}>Menu</a>
                    </li>
                    <li style={listStyle}>
                        <a href="Reservations.js" style={aStyle}>Reservations</a>
                    </li>
                    <li style={listStyle}>
                        <a href="OrderOnline.js" style={aStyle}>Order Online</a>
                    </li>
                    <li style={listStyle}>
                        <a href="Login.js" style={aStyle}>Login</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
