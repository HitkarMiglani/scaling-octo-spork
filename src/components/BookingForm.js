import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  const handleChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'UPDATE_DATE', payload: e.target.value });
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date" value={date} onChange={handleChange} type="date" required />
            </div>

            {/* Time section */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>  
              <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select a Time</option>
                {availableTimes.availableTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            {/* Number of guests */}
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min="1" type="number" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
            </div>

            {/* Occasion field */}
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select> 
            </div>

            {/* Submit button */}
            <div className="btnReceive">
              <input aria-label="On Click" type="submit" value="Make Your Reservation" />
            </div>

          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
