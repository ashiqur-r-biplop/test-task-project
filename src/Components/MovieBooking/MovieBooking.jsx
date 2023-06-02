import { useState } from 'react';
import {  unstable_HistoryRouter, useParams } from 'react-router-dom';
// import './MovieBooking.css';

const MovieBooking = () => {
  const history = unstable_HistoryRouter();
  const { showId } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Store user details in local/session storage
    localStorage.setItem(`booking:${showId}`, JSON.stringify({ name, email }));

    // Redirect to a success page or display a confirmation message
    history.push('/booking-success');
  };

  return (
    <div className="booking-form-container">
      <h2>Movie Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit" className="booking-button">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default MovieBooking;
