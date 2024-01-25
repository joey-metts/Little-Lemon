import React from 'react';

const SocialMediaNav = () => {
    return (
        <div style={{ fontSize: '8pt', color: '#495E57', fontFamily: 'Markazi Text', textAlign: 'Left' }}>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '10px' }}>
                    <li style={{ fontWeight: 'bold', marginBottom: '5px' }}>Social Media</li>
                    <li style={{ marginBottom: '5px' }}>Facebook</li>
                    <li style={{ marginBottom: '5px' }}>Instagram</li>
                    <li style={{ marginBottom: '5px' }}>X</li>
                    <li style={{ marginBottom: '5px' }}>Yelp</li>
                </ul>
            </nav>
        </div>
    )
};

export default SocialMediaNav;