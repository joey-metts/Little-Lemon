import React, { useState, useEffect } from 'react';
import Card from './HighlightCard';
import greekSalad from './Photos/GreekSalad.jpg';
import bruschetta from './Photos/Bruschetta.jpg';
import fish from './Photos/GrilledFish.jpg';

const Highlights = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginLeft: '10%',
        marginRight: '10%',
    };

    useEffect(() => {
        const handleMobile = () => {
            setIsMobile(window.innerWidth <= 600);
        };
        window.addEventListener('resize', handleMobile);

        return () => {
            window.removeEventListener('resize', handleMobile);
        };
    }, []);

    if (isMobile) {
        cardContainerStyle.flexDirection = 'column';
        cardContainerStyle.alignItems = 'center';
    }

    return (
        <div style={{ backgroundColor: '#495E57', padding: '20px' }}>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', textAlign: isMobile ? 'center' : 'left' }}>
                <h2 style={{ flex: '2', fontSize: '40pt', color: '#F4CE14', marginLeft: isMobile ? '0' : '12%' }}>Specials</h2>
                {isMobile && (
                    <button style={{ flex: '2', height: '75%', borderRadius: '16px', fontWeight: 'bold', fontSize: '16pt', alignSelf: 'center', margin: '10px', width: '90%', backgroundColor: '#F4CE14', color: '#495E57', border: 'none', cursor: 'pointer' }}>
                        Online Menu
                    </button>
                )}
                {!isMobile && (
                    <button style={{ flex: '2', height: '75%', borderRadius: '16px', fontWeight: 'bold', fontSize: '16pt', alignSelf: 'center', marginRight: '12%', width: '25%', backgroundColor: '#F4CE14', color: '#495E57', border: 'none', cursor: 'pointer' }}>
                        Online Menu
                    </button>
                )}
            </div>
            <div style={cardContainerStyle}>
                <Card title="Greek Salad" description="The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicag..." price="$12.99" image={greekSalad} />
                <Card title="Bruschetta" description="Our Bruschetta is made from grilled bread that has been smeared with garli..." price="$7.99" image={bruschetta} />
                <Card title="Grilled Fish" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..." price="$14.99" image={fish} />
            </div>
        </div>
    );
};

export default Highlights;
