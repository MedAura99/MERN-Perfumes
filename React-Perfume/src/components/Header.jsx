import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      <div className="header-left">
        <img src={logo} alt="Alamgeer Perfumes" className="logo" />
      </div>

      <nav className="header-center">
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/">Reload</Link></li>
          <li><Link to="/login">Admin</Link></li>      
        </ul>
      </nav>
    </header>
  );
};

export default Header;