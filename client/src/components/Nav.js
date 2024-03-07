import React, { useState } from "react";
import "../styles/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav-container">
      {/* LOGO  */}
      <div className="nav-logo">
        <Link to="/h">Logo</Link>
      </div>
      {/* NAV LINKS */}

      {/* HAMBURGER MENU */}
      <div>
        <button onClick={handleMenu} className="nav-hamburger">
          <GiHamburgerMenu />
        </button>
      </div>

      <ul className={`nav-links ${showMenu ? "show" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register ">Register</Link>
        </li>
      </ul>
    </nav>
  );
};
