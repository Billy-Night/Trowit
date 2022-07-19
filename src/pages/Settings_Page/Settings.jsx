import "./Settings.css";
import EditProfile from "./EditProfile.jsx";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import avatar from "../../images/cards_page/avatar.png";
import credit_card from "../../images/cards_page/credit-card.png";
import icon_logo from "../../images/cards_page/icon_logo.png";
import arrow_vector from "../../images/cards_page/arrow_vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const SettingsSection = (props) => {
    // we have an optional icon
    // we have a section title
    // we have an optional text for the end of title line
    const iconSize = "1.6em";
    return (
      <>
        <span
          style={{
            display: "flex",
            gap: ".5em",
            alignItems: "center",
            marginBlockEnd: ".5em",
          }}
        >
          <div
            style={{
              width: iconSize,
              height: iconSize,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.icon}
          </div>
          <h2 style={{ flexGrow: 1 }}>{props.title ?? "Section title"}</h2>
          {props.extra}
        </span>
        {props.children}
      </>
    );
  };

  return (
    <Layout title="Settings">
      <main id="settings-page">
        <section id="settings-area">
          <div className="block-1">
            <div className="subblock-1 settings-bordered-box">
              <SettingsSection
                icon={<img src={credit_card} alt="card" className="card" />}
                title="Subscription"
                extra={<button className="upgrade">+ UPGRADE PLAN</button>}
              >
                <h2>TROWIT Free</h2>
              </SettingsSection>
            </div>
            <div className="subblock-2 settings-bordered-box">
              <SettingsSection title="Profile">
                <h2>
                  <img
                    className="contact-card-view"
                    src={avatar}
                    size="2rem"
                    alt="contact_card"
                  />
                  First Last Name
                </h2>
                Free
                <button className="arrow" onClick={() => setShowModal(true)}>
                  {">"}
                </button>
              </SettingsSection>
            </div>
          </div>
          <div className="block-2 settings-bordered-box">
            <SettingsSection
              icon={
                <img
                  className="contact-card-view"
                  src={icon_logo}
                  size="2rem"
                  alt="contact_card"
                />
              }
              title="Account"
            >
              <h3>
                Change your email address
                <button className="arrow">{">"}</button>
              </h3>
              email@trowit.com
              <br />
              <h3>Reset your password</h3>
              <button className="arrow">{">"}</button>
              <br />
              <h3>Delete Account</h3>
              <button className="arrow">{">"}</button>
            </SettingsSection>
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
