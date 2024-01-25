import React from 'react';

const Hero = () => {
    return (
        <div style={{ display: 'flex', height: '70vh' }}>
            <div style={{ flex: '3', padding: '20px', backgroundColor: '#F4CE14', display: 'flex', flexDirection: 'column', }}>
                <div style={{ fontStyle: 'markazi text', fontWeight: 'medium', fontSize: '64pt', textAlign: 'left', marginLeft: '5%' }}>
                    Little Lemon
                </div>
                <div style={{ fontStyle: 'markazi text', fontSize: '40pt', fontWeight: 'regular', textAlign: 'left', marginLeft: '5%' }}>
                    Chicago
                </div>
                <button style={{ padding: '10px', backgroundColor: '#495E57', color: '#F4CE14', border: 'none', cursor: 'pointer' }}>Button</button>
            </div>
            <div style={{ flex: '2', overflow: 'hidden' }}>
                <img src="path/to/your/picture.jpg" alt="Picture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        </div>
    );
};

export default Hero;
