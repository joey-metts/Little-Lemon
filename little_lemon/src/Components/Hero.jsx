import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import patioPic from './Photos/riverwalk_patio.jpg';
import chicagoPic from './Photos/chicago_night.jpg';
import indoorPic from './Photos/indoors.jpg';
import riverwalkPic from './Photos/riverwalk.jpg';
import outdoorPic from './Photos/patio_skyline.jpg';

const Hero = () => {
    const images = [patioPic, chicagoPic, indoorPic, riverwalkPic, outdoorPic];
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    const handleButtonClick = () => {
        navigate('./BookingsPage');
    };

    const isNotMobile = window.innerWidth >= 600;
    const containerHeight = isNotMobile ? '400px' : '200px';

    return (
        <div style={{ display: 'flex', backgroundColor: '#F4CE14' }}>
            {isNotMobile ? (
                <>
                <div style={{ marginRight: '5%', marginLeft: '3%', flex: '2', padding: '20px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontStyle: 'markazi text', fontWeight: 'medium', fontSize: '64pt', textAlign: 'left', marginLeft: '5%' }}>
                        Little Lemon
                    </div>
                    <div style={{ fontStyle: 'markazi text', fontSize: '40pt', fontWeight: 'regular', textAlign: 'left', marginLeft: '5%' }}>
                        Chicago
                    </div>
                    <p style={{ fontStyle: 'Karla', fontSize: '16pt', fontWeight: 'regular', textAlign: 'left', marginLeft: '5%' }}>
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We offer indoor and patio seating in the heart of Chicago's famous riverwalk.
                    </p>
                    <button
                        onClick={handleButtonClick}
                        style={{ borderRadius: '16px', fontWeight: 'bold', fontSize: '16pt', alignSelf: 'center', width: '75%', padding: '10px', backgroundColor: '#495E57', color: '#F4CE14', border: 'none', cursor: 'pointer', marginTop: '8px' }}
                    >
                        Reserve a Table
                    </button>
                    </div>
                <div style={{ marginTop: '3%', marginRight: '3%', marginBottom: '2%', flex: '2', overflow: 'hidden', backgroundColor: '#F4CE14', height: '400px' }}>
                    <img
                        src={images[currentIndex]}
                        alt={`slide-${currentIndex + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '16px',
                            overflow: 'hidden',
                        }}
                    />
                </div>
            </>
        ) : (
            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F4CE14' }}>
                <div style={{ backgroundColor: '#F4CE14', marginTop: '3%', flex: '2', padding: '20px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontStyle: 'markazi text', fontWeight: 'medium', fontSize: '64pt', textAlign: 'left', marginLeft: '5%' }}>
                        Little Lemon
                    </div>
                    <div style={{ fontStyle: 'markazi text', fontSize: '40pt', fontWeight: 'regular', textAlign: 'left', marginLeft: '5%' }}>
                        Chicago
                    </div>
                    <p style={{ fontStyle: 'Karla', fontSize: '16pt', fontWeight: 'regular', textAlign: 'left', marginLeft: '5%' }}>
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We offer indoor and patio seating in the heart of Chicago's famous riverwalk.
                    </p>
                    <button
                        onClick={handleButtonClick}
                        style={{ borderRadius: '16px', fontWeight: 'bold', fontSize: '16pt', alignSelf: 'center', width: '75%', padding: '10px', backgroundColor: '#495E57', color: '#F4CE14', border: 'none', cursor: 'pointer', marginTop: '8px' }}
                    >
                        Reserve a Table
                    </button>
                    </div>
                <div style={{ flex: '2', backgroundColor: '#F4CE14', alignSelf: 'center', marginLeft: '3%', overflow: 'hidden', objectFit: 'cover', height: '200px', marginRight: '2.5%', marginBottom: '3%' }}>
                    <img
                        src={images[currentIndex]}
                        alt={`slide-${currentIndex + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '16px',
                            backgroundColor: '#F4CE14',
                            overflow: 'hidden',
                        }}
                    />
                </div>
            </div>
        )}
    </div>
    );
};

export default Hero;
