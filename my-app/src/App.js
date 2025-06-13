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

//Admin Components
import AdminHome from "./BackEndComponents/AdminHome";
import Create from "./BackEndComponents/Create";
import Edit from "./BackEndComponents/Edit";
import Delete from "./BackEndComponents/Delete";
import Navbar from "./BackEndComponents/NavBar";
import Inventory from "./BackEndComponents/Inventory";

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


  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  const handleLogin = (role) => {
    console.log('Logged in as:', role);  // Debugging role
    setIsLoggedIn(true);
    setIsAdmin(role === 'admin');  // Set the role after login
  };

  const myWidth=240 // AdminSidebar width

  return (
    <Router>
      <div className="App">
        {isLoggedIn && !isAdmin && <NavBar />}
        {isLoggedIn && isAdmin && <Navbar  drawerWidth={myWidth}/>}
        <CartProvider>
        <Routes>
          {!isLoggedIn && (
            <>
              <Route path="/" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<RegistrationForm />} />
            </>
          )}
          {/* After Login */}
          {isLoggedIn && !isAdmin && (
            <>
              <Route
                path="/home"
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
              <Route
                path="/products"
                element={
                  <div className="container">
                    <Products 
                    handleFavoriteToggle={handleFavoriteToggle}
                    favorites={favorites}
                    />
                    <Footer />
                  </div>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <div className="container">
                    <ProductPage 
                    handleFavoriteToggle={handleFavoriteToggle} 
                    favorites={favorites}
                    />
                    <Footer />
                  </div>
                }
              />
              <Route
                path="/categories"
                element={
                  <div className="container">
                    <Categories />
                    <Footer />
                  </div>
                }
              />
              <Route
                path="/account"
                element={
                  <div className="container">
                    <Account />
                  </div>
                }
              />
              <Route
                path="/favorite"
                element={
                  <div className="container">
                    <Favorite 
                      handleFavoriteToggle={handleFavoriteToggle}
                      favorites={favorites}
                    />
                    <Footer />
                  </div>
                }
              />
              <Route
                path="/cart"
                element={
                  <div className="container">
                    <Cart />
                    <Footer />
                  </div>
                }
              />
              <Route
                path="/checkout"
                element={
                  <div className="container">
                    <CheckoutPage />
                    <Footer />
                  </div>
                }
              />
               <Route
                path="/category/:categoryName"
                element={
                  <div className="container">
                    <CategoryPage />
                    <Footer />
                  </div>
                }
              />
               <Route
                  path="/search"
                  element={
                    <div className="container">
                      <SearchPage />
                      <Footer />
                    </div>
                  }
                />
            </>
          )}
          {/* Admin Routes */}
          {isLoggedIn && isAdmin && (
            <>
            <Route
                  path="/admin"
                  element={
                    <div className="content-area">
                      <AdminHome />
                    </div>
                  }
                />
              <Route
                  path="/inventory"
                  element={
                    <div className="content-area">
                      <Inventory />
                    </div>
                  }
                />
                <Route
                  path="/create"
                  element={
                    <div className="content-area">
                      <Create />
                    </div>
                  }
                />
                <Route
                  path="/inventory/edit/:id"
                  element={
                    <div className="content-area">
                      <Edit />
                    </div>
                  }
                />
                <Route
                  path="/inventory/delete/:id"
                  element={
                    <div className="content-area">
                      <Delete />
                    </div>
                  }
                />
            </>
          )}
        </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;

///////////////////////////////////////////////////////////////////


