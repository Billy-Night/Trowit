import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../TopNavBar/TopNavbar.css';
import { ButtonSign } from './ButtonSign';
import { ButtonLogin } from './ButtonLogin';

const TopNavbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img className="logo" src="./logo_small@4x.png" alt="logo" />
      </Link>
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/features"
              className="nav-links"
              onClick={closeMobileMenu}>
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/order-card" className="nav-links" onClick={closeMobileMenu}>
              Order your TROWIT Card
            </Link>
          </li>
          
          <Link
            to="/log-in"
            className="nav-links-mobile-in"
            onClick={closeMobileMenu}
          >
            Log In
          </Link>

          <Link
            to="/sign-up"
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </ul>
        <ul></ul>
        <ul></ul>
        <br />
        <br />
        

        {button && <ButtonSign buttonStyle="btn--outline">Sign Up</ButtonSign>}
        {button && (
          <ButtonLogin buttonStyle="btn--outline-in">Log In</ButtonLogin>
        )}
      </div>
    </nav>
  );
};

export default TopNavbar;
