import hotels from "../data/Hotel";
import HotelCard from "../components/HotelCard";

function Hotels() {
  return (
    <div className="hotels-page">
      <div className="hotels-banner">
  <h1>Discover Luxury Hotels</h1>
  <p>Find your perfect stay around the world.</p>
</div>

      <div className="hotel-container">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;