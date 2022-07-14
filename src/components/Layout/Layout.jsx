import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import SideNavBar from "../Side_NavBar/SideNavBar";
import "./Layout.css";

const Layout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div id="navigation-layout">
        {/* <SideNavBar active={sidebarOpen} closeCallback={handleSidebarToggle} /> */}
        <span>
          <div id="mobile-nav-icon" role="button" onClick={handleSidebarToggle}>
            <i className={false ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <h2>{props.title}</h2>
          <Avatar />
        </span>
      </div>

      {/* //! should be in scrollable container */}
      {props.children}
    </>
  );
};

export default Layout;
