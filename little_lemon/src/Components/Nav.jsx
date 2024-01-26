import React, { useState, useEffect } from 'react';
import yellowLemon from './Logos/YellowLemon.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const [menuOpen, setMenuOpen] = useState(true);

    const containerStyle = {
        margin: '0 auto',
        padding: '15px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transition: 'background-color 0.3s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobile ? 'space-between' : 'center',
        backgroundColor: '#495E57' ,
    };

    const listContainerStyle = {
        flex: '1',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: '#F4CE14',
    };

    const listStyle = {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'center' : 'space-between',
        width: '100%',
        marginLeft: isMobile ? '15%' : '6%',
        marginTop: isMobile ? '15px' : 0,
        marginRight: isMobile ? 0 : '20%',
    };

    const listItemStyle = {
        padding: '12px',
        fontSize: isMobile ? '18pt' : '12pt',
        color: '#F4CE14',
    };

    const logoStyle = {
        height: isMobile ? '40px' : '75px',
        marginLeft: isMobile ? '49%' : '19%',
        display: isMobile && menuOpen ? 'none' : 'block',
        marginTop: isMobile ? '7%' : 0,
    };

    const hamburgerIconContainerStyle = {
        width: '30px',
        position: 'absolute',
        left: '5%',
        top: menuOpen && isMobile ? '25px' : '25px',
    };

    const hamburgerIconStyle = {
        fontSize: '30px',
        cursor: 'pointer',
    };

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        if (!isMobile) {
            setMenuOpen(true);
        }
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleMobile = () => {
            if (window.innerWidth <= 600) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('load', handleMobile);
    }, [menuOpen]);

    return (
        <div style={{ backgroundColor: '#495E57' }}>
            <div style={containerStyle}>
                <div style={listContainerStyle} onClick={handleMenuToggle}>
                    {isMobile && (
                        <div style={hamburgerIconContainerStyle}>
                            <span style={hamburgerIconStyle}>&#9776;</span>
                        </div>
                    )}
                    <img src={yellowLemon} alt='Logo' style={logoStyle} />
                    {menuOpen && (
                        <ul style={listStyle}>
                            <li style={listItemStyle} onClick={handleMenuItemClick}>
                                <Link to='./' style={{ color: '#F4CE14' }}>Home</Link>
                            </li>
                            <li style={listItemStyle} onClick={handleMenuItemClick}>
                                <Link to='./#about-section' style={{ color: '#F4CE14' }}>About</Link>
                            </li>
                            <li style={listItemStyle} onClick={handleMenuItemClick}>Menu</li>
                            <li style={listItemStyle} onClick={handleMenuItemClick}>
                                <Link to='./BookingsPage' style={{ color: '#F4CE14' }}>Reservations</Link>
                            </li>
                            <li style={listItemStyle} onClick={handleMenuItemClick}>Order Online</li>
                            <li style={listItemStyle} onClick={handleMenuItemClick}>Login</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
