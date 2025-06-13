import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Style/NavBar.css';
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`); // Redirect to the search results page with query
    }
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">Gani Works</Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/products">Products</CustomLink>
        <CustomLink to="/categories">Categories</CustomLink>
      </ul>

      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>

      <ul>
        <CustomLink to="/account">Account</CustomLink>
        <CustomLink to="/favorite">Favorites</CustomLink>
        <CustomLink to="/cart">Cart</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

