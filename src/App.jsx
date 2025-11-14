import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import TopBanner from "./components/layout/Banner/TopBanner";
import TopNavbar from "./components/layout/Navbar/TopNavbar";
import Footer from "./components/layout/Footer";
import Providers from "./app/providers";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Providers>
        <div className="font-satoshi">
          <TopBanner />
          <TopNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/product/:id/:slug" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </Providers>
    </Router>
  );
}

export default App;

