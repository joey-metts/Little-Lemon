import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Bookings from './Components/BookingsPage';
import Footer from './Components/Footer';

function App() {
  const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return action.allAvailableTimes;

      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(timesReducer, ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/BookingsPage"
            element={<Bookings availableTimes={availableTimes} dispatch={dispatch} />}
          />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;