import Login from "./Pages/LoginForm";
import RegistrationForm from "./Pages/RegistrationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import Categories from "./Pages/Categories";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Favorite from "./Pages/Favorite";
import { CartProvider } from "react-use-cart";
import './App.css';
import ProductPage from "./Pages/ProductPage";
import CheckoutPage from "./Pages/CheckoutPage";
import Footer from "./Components/Footer";
import CategoryPage from "./Pages/CategoryPage";
import Account from "./Pages/Account";
import SearchPage from "./Pages/SearchPage";

// Admin components
import AdminHome from "./BackEndComponents/AdminHome";
import About from "./BackEndComponents/About";
import Create from "./BackEndComponents/Create";
import Edit from "./BackEndComponents/Edit";
import Delete from "./BackEndComponents/Delete";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Track if user is an admin

  const handleFavoriteToggle = (item, isFavorited) => {
    if (isFavorited) {
      setFavorites((prevFavorites) => [...prevFavorites, item]);
    } else {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favItem) => favItem.id !== item.id)
      );
    }
  };

  const handleLogin = (role) => {
    console.log('Logged in as:', role);  // Debugging role
    setIsLoggedIn(true);
    setIsAdmin(role === 'admin');  // Set the role after login
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn && <NavBar />}
        <CartProvider>
          <Routes>
            {/* Non-Logged In Routes */}
            {!isLoggedIn && (
              <>
                <Route path="/" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<RegistrationForm />} />
              </>
            )}
            
            {/* After Login - User Routes */}
            {isLoggedIn && !isAdmin && (
              <>
                <Route
                  path="/"
                  element={
                    <div className="container">
                      <Home
                        handleFavoriteToggle={handleFavoriteToggle}
                        favorites={favorites}
                      />
                      <Footer />
                    </div>
                  }
                />
                {/* More user-specific routes */}
              </>
            )}

            {/* Admin Routes */}
            {isLoggedIn && isAdmin && (
              <>
                <Route
                  path="/admin"
                  element={
                    <div className="container">
                      <AdminHome />
                    </div>
                  }
                />
                {/* Admin-specific routes */}
                <Route
                  path="/admin/about"
                  element={
                    <div className="container">
                      <About />
                    </div>
                  }
                />
                {/* More admin-specific routes */}
              </>
            )}
          </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;