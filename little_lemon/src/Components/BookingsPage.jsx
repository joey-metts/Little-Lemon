import React, { useState, useReducer, useEffect } from 'react';
import ConfirmationPopup from './ConfirmationPopup';

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.allAvailableTimes;

    default:
      return state;
  }
};

const Bookings = ({ availableTimes }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const [stateAvailableTimes, dispatch] = useReducer(timesReducer, availableTimes);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    dispatch({ type: 'UPDATE_TIMES', selectedDate, allAvailableTimes: availableTimes });
  }, [availableTimes, selectedDate]);

  const handleDateChange = (e) => {
    const newSelectedDate = e.target.value;
    setSelectedDate(newSelectedDate);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div
      style={{
        backgroundColor: '#F4CE14',
        paddingTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
      }}
    >
      <form
        style={{
          display: 'grid',
          maxWidth: '200px',
          gap: '20px',
          paddingBottom: '3%',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
          {Array.isArray(stateAvailableTimes) &&
            stateAvailableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Not Applicable</option>
        </select>
        <input type="submit" value="Make your Reservation" style={{ borderRadius: '16px', fontWeight: 'bold', fontSize: '12pt', alignSelf: 'center', padding: '10px', backgroundColor: '#495E57', color: '#F4CE14', border: 'none', cursor: 'pointer', marginTop: '8px' }} />
      </form>

      {showConfirmation && <ConfirmationPopup onClose={handleCloseConfirmation} />}
    </div>
  );
};

export default Bookings;
