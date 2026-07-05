import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { useState } from "react";
import hotels from "../data/Hotel";
import HotelCard from "../components/HotelCard";
import MapSection from "../components/MapSection";

function Home() {
    const [search, setSearch] = useState("");
    const filteredHotels = hotels.filter((hotel) =>
  hotel.city.toLowerCase().includes(search.toLowerCase())
);
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="bg-slide bg1"></div>
         <div className="bg-slide bg2"></div>
         <div className="bg-slide bg3"></div>

<div className="overlay"></div>
  <div className="hero-slide slide1"></div>
  <div className="hero-slide slide2"></div>
  <div className="hero-slide slide3"></div>

  <div className="overlay"></div>

  <div className="hero-content">
    <p className="welcome">WELCOME TO STAYEASE</p>

    <h1>
      Experience Luxury <br />
      Beyond <span>Expectations</span>
    </h1>

    <p className="subtitle">
      Discover luxury resorts, premium stays and unforgettable travel experiences.
    </p>

    <button className="explore-btn">
      Explore Hotels
    </button>
  </div>
</section>

      <div className="search-section">
  <input
    type="text"
    placeholder="Search by city..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

</div>
<h1 className="section-heading">Featured Hotels</h1>

<div className="hotel-container">
  {filteredHotels.map((hotel) => (
    <HotelCard key={hotel.id} hotel={hotel} />
  ))}
</div>

      <section className="testimonials">
  <h2>What Our Guests Say</h2>

  <div className="testimonial-container">
    <div className="testimonial-card">
      <p>
        "Amazing experience! The booking process was smooth and the hotel was exactly as shown."
      </p>
      <h3>⭐⭐⭐⭐⭐</h3>
      <h4>Rahul Sharma</h4>
    </div>

    <div className="testimonial-card">
      <p>
        "Great deals and excellent customer support. I will definitely book again."
      </p>
      <h3>⭐⭐⭐⭐⭐</h3>
      <h4>Priya Verma</h4>
    </div>

    <div className="testimonial-card">
      <p>
        "The best hotel booking platform I have used so far."
      </p>
      <h3>⭐⭐⭐⭐⭐</h3>
      <h4>Aman Singh</h4>
    </div>
  </div>
  <section className="destinations">
  <div className="section-title">
    <p>EXPLORE THE WORLD</p>
    <h2>Popular Destinations</h2>
  </div>

  <div className="destination-grid">
    <div className="destination-card">
      <img
        src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800"
        alt="Goa"
      />
      <div className="destination-info">
        <h3>Goa</h3>
        <p>120+ Hotels</p>
      </div>
    </div>

    <div className="destination-card">
      <img
        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800"
        alt="Jaipur"
      />
      <div className="destination-info">
        <h3>Jaipur</h3>
        <p>95+ Hotels</p>
      </div>
    </div>

    <div className="destination-card">
      <img
        src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800"
        alt="Manali"
      />
      <div className="destination-info">
        <h3>Manali</h3>
        <p>80+ Hotels</p>
      </div>
    </div>

    <div className="destination-card">
      <img
        src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800"
        alt="Kerala"
      />
      <div className="destination-info">
        <h3>Kerala</h3>
        <p>140+ Hotels</p>
      </div>
    </div>
  </div>
</section>
</section>
      <div className="features">
  <div className="feature-card">
    <h3>🏆 Best Price Guarantee</h3>
    <p>Get the best prices for your favorite hotels.</p>
  </div>

  <div className="feature-card">
    <h3>🎧 24/7 Customer Support</h3>
    <p>We're here to help you anytime, anywhere.</p>
  </div>

  <div className="feature-card">
    <h3>🔒 Secure Booking</h3>
    <p>Your booking is safe and secure with us.</p>
  </div>

  <div className="feature-card">
    <h3>🎁 Exclusive Deals</h3>
    <p>Enjoy exclusive discounts and special offers.</p>
  </div>
</div>
<MapSection />
<footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h2>StayEase</h2>
      <p>
        Discover luxury hotels, exclusive deals, and unforgettable stays
        around the world.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>
      <p>Home</p>
      <p>Hotels</p>
      <p>Wishlist</p>
    </div>

    <div className="footer-section">
      <h3>Contact</h3>
      <p>support@stayease.com</p>
      <p>+91 98765 43210</p>
      <p>New Delhi, India</p>
    </div>

    <div className="footer-section">
      <h3>Follow Us</h3>
      <p>Instagram</p>
      <p>Facebook</p>
      <p>Twitter</p>
    </div>
  </div>

  <div className="footer-bottom">
    © 2026 StayEase. All Rights Reserved.
  </div>
</footer>
    </>
  );
  
}

export default Home;