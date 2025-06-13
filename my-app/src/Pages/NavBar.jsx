import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom"
import '../Style/NavBar.css'
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function NavBar() {

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`); // Redirect to the search results page with query
    }
  };

    return <nav className="nav">
        <Link to="/home" className="site-title">Gani Works</Link>
        <ul>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/products">Products</CustomLink>
            <CustomLink to="/categories">Categories</CustomLink>
        </ul>

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
            <CustomLink to="/account"><MdAccountCircle/></CustomLink>
            <CustomLink to="/favorite"><FaHeart/></CustomLink>
            <CustomLink to="/cart"><FaShoppingCart/></CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}){
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

