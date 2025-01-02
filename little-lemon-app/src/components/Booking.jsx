import React from 'react';
import BookingForm from './BookingForm';

const Booking = ({ showForm, availableTimes, updateTimes, submitForm }) => {
  console.log("Props in Booking:", { showForm, availableTimes, updateTimes, submitForm });

  return (
    <div>
      {showForm && (
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          submitForm={submitForm}
        />
      )}
    </div>
  );
};

export default Booking;