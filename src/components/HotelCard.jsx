import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <Link
      to={`/hotel/${hotel.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="hotel-card">
        <img src={hotel.image} alt={hotel.name} />

        <div className="hotel-info">
          <h2>{hotel.name}</h2>
          <p>📍 {hotel.city}</p>
          <p>⭐ {hotel.rating}</p>
          <h3>₹{hotel.price} / night</h3>

          <button>View Details</button>
        </div>
      </div>
    </Link>
  );
}

export default HotelCard;