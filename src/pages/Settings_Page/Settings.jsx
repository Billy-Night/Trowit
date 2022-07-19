import "./Settings.css";
import EditProfile from "./EditProfile.jsx";
import SideNavBar from "../../components/Side_NavBar/SideNavBar";
import Avatar from "../../components/Avatar/Avatar";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";

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
  };

  return (
    <Layout title="Settings">
      <main id="settings-page">
        <section id="settings-area">
          <div className="block-1">
            <div className="subblock-1 settings-bordered-box">
              <h1>Subscription</h1>
              {/* TODO: <img
                src={imgSub}
                alt="card"
                className="img"
              /> */}
            </div>
            <div className="subblock-2 settings-bordered-box">
              <h2>Profile</h2>
              <button onClick={() => setShowModal(true)}>Open Editor</button>
            </div>
          </div>
          <div className="block-2 settings-bordered-box">
            <div>
              <h2 className="box_sub_account">Account</h2>
            </div>
          </div>
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
              padding: "1em 2em",
            }}
          >
            <h1>Profile Editor</h1>
            <EditProfile />
            <button onClick={saveSettings}>Save</button>
          </div>
        </Modal>
      </main>
    </Layout>
  );
};

export default Settings;
