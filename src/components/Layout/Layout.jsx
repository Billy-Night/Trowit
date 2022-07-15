import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Avatar from "../Avatar/Avatar";
import SideNavBar from "../Side_NavBar/SideNavBar";
import "./Layout.css";

const Layout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mobileView = useMediaQuery(0, "480px");

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div id="navigation-layout">
        {(sidebarOpen || !mobileView) && <SideNavBar />}
        <span id="navigation-layout_title-bar">
          <div
            id="mobile-nav-icon"
            className={sidebarOpen && "mobile-nav-icon-open"}
            role="button"
            onClick={handleSidebarToggle}
          >
            <i className={sidebarOpen ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <h2>{props.title}</h2>
          <Avatar />
        </span>
        {props.extraControls !== undefined && (
          <span id="navigation-layout_extra-sticky-controls">
            {/* //! sticky navigation here */}
            {props.extraControls}
          </span>
        )}
        {/* //! should be in scrollable container */}
        <section id="navigation-layout_content-box">{props.children}</section>
      </div>
    </>
  );
};

export default Layout;
