import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Menu from './components/Menu';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Booking from './components/Booking';
import ConfirmedBooking from './components/ConfirmedBooking';
import { fetchAPI, submitAPI } from './components/Api.jsx';

function App() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleShowBookingForm = () => {
    setShowBookingForm(true);
  };

  const initializeTimes = async () => {
    const today = new Date();
    const times = await fetchAPI(today);
    setAvailableTimes(times);
  };

  const updateTimes = async (date) => {
    const times = await fetchAPI(date);
    setAvailableTimes(times);
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      console.log('Form submitted successfully');
    } else {
      console.error('There was a problem with the form submission');
    }
  };

  return (
    <>
      <Nav />
      <Header onShowBookingForm={handleShowBookingForm} />
      <Routes>
        <Route path="/" exact element={<Menu />} />
        <Route path="/booking" element={<Booking showForm={showBookingForm} availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;