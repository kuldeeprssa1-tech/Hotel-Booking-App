import { useState } from "react";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed 🎉");
  };

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h1>✨ Complete Your Booking</h1>
        <p>Enjoy a luxury stay experience with StayEase</p>

        <form onSubmit={handleSubmit} className="booking-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className="row">
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
            />

            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
            />
          </div>

          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            min="1"
          />

          <button type="submit">Confirm Booking 💎</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;