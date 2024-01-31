import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Bookings from './Components/BookingsPage';
import Footer from './Components/Footer';

function App( timesReducer ) {

  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  const [stateAvailableTimes, dispatch] = useReducer(timesReducer, availableTimes);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/BookingsPage" element={<Bookings availableTimes={availableTimes} dispatch={setAvailableTimes} />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
