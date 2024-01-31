import React from 'react';
import AvatarOne from './Photos/AvatarOne.png';
import AvatarTwo from './Photos/AvatarTwo.jpg';
import AvatarThree from './Photos/AvatarThree.jpg';
import AvatarFour from './Photos/AvatarFour.jpg';
import StarRating from './StarRating';

const TestimonialCard = ({ username, rating, review, avatar, isMobile }) => {
  const avatarImage = {
    'avatarOne': AvatarOne,
    'avatarTwo': AvatarTwo,
    'avatarThree': AvatarThree,
    'avatarFour': AvatarFour,
  }[avatar];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '10px',
      borderRadius: '8px',
      width: '250px',
      margin: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <img src={avatarImage} alt={`${username}'s avatar`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <h3 style={{ marginTop: '8px' }}>{username}</h3>
      <StarRating rating={rating} />
      <p style={{ marginTop: '8px' }}>{review}</p>
    </div>
  );
};

export default TestimonialCard;
