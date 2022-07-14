import React, { useState } from "react";
import "./SideNavBar.css";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <aside className="sidebar">
      <nav className="nav">
        <Link to="/" className="nav-link trowit">
          <img
            src="/logo_white_no_text@4x.png"
            alt=""
            className="nav-link-icon"
          />
          <span className="nav-link-name"></span>
        </Link>

        <Link to="/cards" className="nav-link">
          <img src="/id-card.png" alt="" className="nav-link-icon" />
          <span className="nav-link-name">Cards</span>
        </Link>

        <Link to="/contacts" className="nav-link">
          <img src="/contacts.png" alt="" className="nav-link-icon" />
          <span className="nav-link-name">Contacts</span>
        </Link>
        <Link to="/backgrounds" className="nav-link">
          <img src="/backgrounds.png" alt="" className="nav-link-icon" />
          <span className="nav-link-name">Backgrounds</span>
        </Link>
        <Link to="/email-signatures" className="nav-link">
          <img src="/email.png" alt="" className="nav-link-icon" />
          <span className="nav-link-name">Email Signatures</span>
        </Link>
        <Link to="/settings" className="nav-link">
          <img src="/settings.png" alt="" className="nav-link-icon" />
          <span className="nav-link-name">Settings</span>
        </Link>
        <Link to="/order-card" className="nav-link">
          <img src="/card-yellow.png" alt="" className="nav-link-icon" />
          <span className="nav-link-name">Order Physical Card</span>
        </Link>
      </nav>
    </aside>
  );
};

export default SideNavBar;
