import React from 'react';
import patio from './Photos/riverwalk_patio.jpg';
import chicago from './Photos/chicago_night.jpg';

const About = () => {
    const isMobile = window.innerWidth <= 600;

    const containerStyle = {
      display: 'flex',
      backgroundColor: '#495E57',
    };

    const desktopContainerStyle = {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#495E57',
    };

    const imageContainerStyle = {
      flex: '1',
      overflow: 'hidden',
      margin: '3%',
      position: 'relative',
    };

    const leftImageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: isMobile ? '8px 8px 0 0' : '8px 0 0 8px',
        top: '45%',
        transform: 'translate(-45%, -40%)',  // Adjusts the horizontal position
      };

    const rightImageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: isMobile ? '0 0 8px 8px' : '0 8px 8px 0',
        position: 'absolute',
        top: '45%',
        right: '-40%',
      };

    const textContainerStyle = {
      flex: '2',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
    };

    return (
        <div style={containerStyle}>
            {isMobile ? (
                <div style={textContainerStyle}>
                    <div style={{ flex: '2', padding: '20px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ color: '#F4CE14', fontStyle: 'markazi text', fontWeight: 'medium', fontSize: '64pt', textAlign: 'left', marginLeft: '5%' }}>
                            Little Lemon
                        </div>
                        <p style={{ color: '#F4CE14', fontStyle: 'Karla', fontSize: '16pt', fontWeight: 'regular', textAlign: 'left', marginLeft: '5%' }}>
                            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We offer indoor and patio seating in the heart of Chicago's famous riverwalk.
                        </p>
                    </div>
                    <div style={imageContainerStyle}>
                        <img src={patio} alt="patio" style={leftImageStyle} />
                        <img src={chicago} alt="chicago" style={rightImageStyle} />
                    </div>
                </div>
            ) : (
                <div style={desktopContainerStyle}>
                    <div style={textContainerStyle}>
                        <div style={{ flex: '2', padding: '20px', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ color: '#F4CE14', fontStyle: 'markazi text', fontWeight: 'medium', fontSize: '64pt', textAlign: 'left', marginLeft: '5%' }}>
                                Little Lemon
                            </div>
                            <p style={{ color: '#F4CE14', fontStyle: 'Karla', fontSize: '16pt', fontWeight: 'regular', textAlign: 'left', marginLeft: '5%' }}>
                                We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We offer indoor and patio seating in the heart of Chicago's famous riverwalk.
                            </p>
                        </div>
                    </div>
                    <div style={imageContainerStyle}>
                        <img src={patio} alt="patio" style={leftImageStyle} />
                        <img src={chicago} alt="chicago" style={rightImageStyle} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
