import { useParams, Link } from "react-router-dom";
import hotels from "../data/Hotel.js";

function HotelDetails({ addToWishlist }) {
    const { id } = useParams();

    const hotel = hotels.find((h) => h.id === Number(id));

    if (!hotel) {
        return <h2 style={{ padding: "100px" }}>Hotel not found</h2>;
    }

    return (
        <div className="details-page">
            <div className="details-container">

                {/* Image Section */}
                <div className="image-section">
                    <img src={hotel.image} alt={hotel.name} />
                </div>

                {/* Info Section */}
                <div className="info-section">
                    <h1>{hotel.name}</h1>

                    <p className="location">📍 {hotel.city}</p>

                    <div className="rating">
                        ⭐ {hotel.rating} / 5
                    </div>

                    <h2 className="price">₹{hotel.price} / night</h2>

                    <p className="desc">
                        Experience luxury stay with premium comfort, modern rooms, high-speed WiFi,
                        swimming pool, spa, and 24/7 service.
                    </p>

                    <div className="buttons">
                        <Link to="/booking">
                            <button className="book-btn">Book Now</button>
                        </Link>

                        <button
  className="wishlist-btn"
  onClick={() => addToWishlist(hotel)}
>
  ❤️ Add to Wishlist
</button>
                    </div>
                </div>
                        </div>

            {/* Related Hotels */}
            <h2 className="related-hotels-title">
                You May Also Like
            </h2>
            

            <div className="related-hotels-grid">
                {hotels
                    .filter((h) => h.id !== hotel.id)
                    .slice(0, 6)
                    .map((item) => (
                        <div key={item.id} className="related-hotel-card">
                            <img src={item.image} alt={item.name} />

                            <div className="related-hotel-content">
                                <h3>{item.name}</h3>
                                <p>📍 {item.city}</p>
                                <p>⭐ {item.rating}</p>
                                <h4>₹{item.price} / night</h4>

                                <Link to={`/hotel/${item.id}`}>
                                    <button className="related-hotel-btn">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    );
}

export default HotelDetails;