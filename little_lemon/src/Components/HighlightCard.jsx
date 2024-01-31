import React from 'react';

const Card = ({ title, description, price, image }) => {
    const imageStyle = {
        width: '100%',
        height: '150px',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        overflow: 'hidden',
    };

    return (
        <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '8px', width: '250px', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={imageStyle}>
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', color: '#495E57', fontWeight: 'bold' }}>
                <div>Order Online</div>
                <div>{price}</div>
            </div>
        </div>
    );
};

export default Card;
