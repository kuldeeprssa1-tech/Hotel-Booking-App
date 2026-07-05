import { Link } from "react-router-dom";

function Wishlist() {
  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  return (
    <div className="wishlist-page">
        <div className="wishlist-hero">
  <div className="wishlist-hero-content">
    <p>YOUR COLLECTION</p>

    <h1>
      Saved <span>Luxury Stays</span>
    </h1>

    <h3>
      Keep track of your favorite hotels and dream destinations.
    </h3>
  </div>
</div>
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
  <h2>❤️ Your wishlist is empty</h2>
  <p>Start exploring and save your favorite hotels.</p>

  <Link to="/hotels">
    <button className="explore-btn">
      Explore Hotels
    </button>
  </Link>
</div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((hotel) => (
            <div key={hotel.id} className="wishlist-card">
              <img src={hotel.image} alt={hotel.name} />

              <div className="wishlist-content">
                <h3>{hotel.name}</h3>
                <p>📍 {hotel.city}</p>
                <p>⭐ {hotel.rating}</p>
                <h4>₹{hotel.price} / night</h4>

                <Link to={`/hotel/${hotel.id}`}>
                  <button className="wishlist-btn-view">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
}

export default Wishlist;