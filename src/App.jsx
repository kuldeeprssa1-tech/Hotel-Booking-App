import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Hotels from "./pages/Hotels.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import HotelDetails from "./pages/HotelDetails.jsx";
import Booking from "./pages/Booking.jsx";

function App() {
  const [wishlist, setWishlist] = useState(
  JSON.parse(localStorage.getItem("wishlist")) || []
);
const addToWishlist = (hotel) => {
  const exists = wishlist.find((item) => item.id === hotel.id);

  if (!exists) {
    const updatedWishlist = [...wishlist, hotel];

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  }
};
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/hotel/:id"element={<HotelDetails addToWishlist={addToWishlist} />}
/>
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;