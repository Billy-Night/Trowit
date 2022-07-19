import "./Settings.css";
import EditProfile from "./EditProfile.jsx";
import SideNavBar from "../../components/Side_NavBar/SideNavBar";
import Avatar from "../../components/Avatar/Avatar";
import { useState } from "react";

const Settings = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = (props) => {
    return (
      <div
        style={{
          display: showModal ? "flex" : "none",
          position: "absolute",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 9999,
          backdropFilter: "brightness(60%)",
        }}
      >
        {props.children}
      </div>
    );
  };

  const saveSettings = () => {
    setShowModal(false);
  }

  return (
    <main id="settings-page">
      <SideNavBar />
      <top className="titlebar">
        <p className="title"> Settings</p>
        <Avatar />
      </top>
      <section className="settings-area" style={{marginLeft: "8rem"}}>
        <div className="box_sub">
          <img src="../images/cards_page/credit-card.png" alt="card" className="img" />
          <h1>Subscription</h1>
          </div>
          <div className="box_sub">
          <div>
            <p>Profile</p>
            <button onClick={() => setShowModal(true)}>Open Editor</button>
            </div>
        </div>
        <div className="box_sub">Account</div>
      </section>
      <Modal>
        <div
          style={{
            fontSize: "2.4rem",
            backgroundColor: "white",
            borderRadius: "1em",
            width: "24em",
            height: "18em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "2em",
            padding: "1em 2em"
          }}
        >
          <h1>Profile Editor</h1>
          <EditProfile />
          <button onClick={saveSettings}>Save</button>
        </div>
      </Modal>
    </main>
  );
};

export default Settings;
