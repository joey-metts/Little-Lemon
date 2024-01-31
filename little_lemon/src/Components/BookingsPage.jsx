import React, { useState, useReducer, useEffect } from 'react';

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
    console.log('Reservation submitted:', { date: selectedDate, time: selectedTime });
  };

  return (
    <div style={{ backgroundColor: '#F4CE14', paddingTop: '100px' }}>
      <form
        style={{
          display: 'grid',
          maxWidth: '200px',
          gap: '20px',
          marginLeft: '25%',
          marginTop: '3%',
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
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default Bookings;
