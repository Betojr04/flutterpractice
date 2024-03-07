import React, { useState } from "react";
import "../styles/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav-container">
      {/* LOGO  */}
      <div className="nav-logo">Logo</div>
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
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  );
};
