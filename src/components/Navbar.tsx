import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo-icon.svg";
import "../styles/Navbar.css";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Fungsi handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      // arahkan ke halaman categories dengan query
      navigate(`/categories?search=${searchQuery}`);
      setSearchQuery("");
    }
  };

  // Fungsi scroll ke atas (smooth)
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Fungsi scroll ke footer
  const handleContactClick = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* Logo & Brand */}
      <div className="navbar-left">
        <img src={logo} alt="Sahabat Property Logo" className="navbar-logo" />
        <span className="navbar-brand">Sahabat Property</span>
      </div>

    <div className="navbar-right">
      {/* Search Bar */}
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Telusuri..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit"><IoIosSearch width={10} size={16}/> </button>
      </form>

      {/* Menu */}
      <ul className="navbar-links">
        <li onClick={handleHomeClick}>Home</li>
        <li>
          <Link to="/categories">Category</Link>
        </li>
        <li onClick={handleContactClick}>Contact</li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
