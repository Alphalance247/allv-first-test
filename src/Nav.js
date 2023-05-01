import React, { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className={`nav-links ${showMenu ? "show-menu" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <button className="menu-btn" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Nav;
