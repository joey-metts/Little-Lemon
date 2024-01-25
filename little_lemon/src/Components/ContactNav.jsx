import React from 'react';

const ContactNav = () => {
    return (
        <div style={{ fontSize: '8pt', color: '#495E57', fontFamily: 'Markazi Text', textAlign: 'Left' }}>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '10px' }}>
                    <li style={{ fontWeight: 'bold', marginBottom: '5px' }}>Contact</li>
                    <li style={{ marginBottom: '5px' }}>Address</li>
                    <li style={{ marginBottom: '5px' }}>Phone Number</li>
                    <li style={{ marginBottom: '5px' }}>Email</li>
                </ul>
            </nav>
        </div>
    )
};

export default ContactNav;