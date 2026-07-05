import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapSection() {
  return (
    <section className="map-section">
      <div className="map-header">
        <p>LOCATION</p>
        <h2>Find Us On The Map</h2>
      </div>

      <div className="map-card">
        <MapContainer
          center={[28.6139, 77.2090]}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            height: "500px",
            width: "100%",
            borderRadius: "25px",
          }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[28.6139, 77.2090]}>
            <Popup>
              StayEase Luxury Hotel
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

export default MapSection;