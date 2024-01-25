import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Bookings from './Components/BookingsPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/BookingsPage" element={<Bookings />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
