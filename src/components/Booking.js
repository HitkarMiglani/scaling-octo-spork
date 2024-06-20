import React from "react";
import BookingForm from "./BookingForm";

const Booking = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    );
};

export default Booking;
