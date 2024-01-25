import React from 'react';
import { Link } from 'react-router-dom';

const DoormatNav = () => {
    return (
        <div style={{ fontSize: '8pt', color: '#495E57', fontFamily: 'Markazi Text', textAlign: 'Left' }}>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '10px' }}>
                    <li style={{ fontWeight: 'bold', marginBottom: '5px' }}>Doormat Nav</li>
                    <li style={{ marginBottom: '5px' }}>
                        <Link to='/' style={{ marginBottom: '5px', color: '#495E57' }}>Home</Link>
                    </li>
                    <li style={{ marginBottom: '5px' }}>
                        <Link to='/#about-section' style={{ color: '#495E57' }}>About</Link>
                    </li>
                    <li style={{ marginBottom: '5px' }}>Menu</li>
                    <li style={{ marginBottom: '5px' }}>
                        <Link to='/BookingsPage'  style={{ color: '#495E57' }}>Reservations</Link>
                    </li>
                    <li style={{ marginBottom: '5px' }}>Order Online</li>
                    <li style={{ marginBottom: '5px' }}>Login</li>
                </ul>
            </nav>
        </div>
    )
};

export default DoormatNav;