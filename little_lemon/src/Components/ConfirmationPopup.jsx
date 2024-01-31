import React from 'react';

const ConfirmationPopup = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: '#495E57',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        color: '#F4CE14',
        textAlign: 'center',
        textWeight: 'bold',
      }}
    >
      <span style={{ cursor: 'pointer', float: 'right' }} onClick={onClose}>
        &times;
      </span>
      <p>Reservation confirmed!</p>
    </div>
  );
};

export default ConfirmationPopup;
