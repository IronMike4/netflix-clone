import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Header component with dynamic menu toggle functionality
function Header({ black }) {
  const [showMenu, setShowMenu] = useState(false); // State to track menu visibility

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={black ? 'black' : ''}>
      {/* Menu toggle button */}
      <div className="header--menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {/* Logo */}
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </a>
      </div>
      {/* Navigation menu */}
      <nav className={`header--nav ${showMenu ? 'show-menu' : ''}`}>
        <ul>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/tv-shows" onClick={toggleMenu}>TV Shows</a></li>
          <li><a href="/movies" onClick={toggleMenu}>Movies</a></li>
          <li><a href="/new-popular" onClick={toggleMenu}>New & Popular</a></li>
          <li><a href="/my-list" onClick={toggleMenu}>My List</a></li>
          <li><a href="/browse-languages" onClick={toggleMenu}>Browse by Languages</a></li>
        </ul>
      </nav>
      {/* User section */}
      <div className="header--user">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
