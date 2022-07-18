import React, { useState } from "react";
import "./SideNavBar.css";
import { Link } from "react-router-dom";

const SideNavBar = (props) => {
  const NavEntry = (props) => (
    <Link to={props.link} className="nav-link">
      <img src={props.img} alt="" className="nav-link-icon" />
      <span className="nav-link-name">{props.label}</span>
    </Link>
  );

  return (
    <aside
      className={"sidebar".concat(
        props.active !== undefined && props.active ? " active" : ""
      )}
    >
      <nav className="nav">
        <span id="logo-flexbox">
          <Link to="/" className="nav-link trowit">
            <img
              src="/logo_white_no_text@4x.png"
              alt=""
              className="nav-link-icon"
            />
          </Link>
        </span>
        <NavEntry link="/cards" img="/id-card.png" label="Cards" />
        <NavEntry link="/contacts" img="/contacts.png" label="Contacts" />
        <NavEntry link="/backgrounds" img="/backgrounds.png" label="Backgrounds" />
        <NavEntry link="/email-signatures" img="/email.png" label="Email Signatures" />
        <NavEntry link="/settings" img="/settings.png" label="Settings" />
        <NavEntry link="/order-card" img="/card-yellow.png" label="Order Physical Card" />
      </nav>
    </aside>
  );
};

export default SideNavBar;
