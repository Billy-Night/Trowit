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

  return (
    <Layout title="Settings">
      <main id="settings-page">
        <section id="settings-area">
          <div className="block-1">
            <div className="subblock-1 settings-bordered-box">
           <h1><img
                src={credit_card}
                alt="card"
                className="card"
              />Subscription</h1>
              <h2>TROWIT Free</h2>

            <button className="upgrade">+ UPGRADE PLAN</button>
         
            </div>
            <div className="subblock-2 settings-bordered-box">
              <h1>Profile</h1>
              <h2>           
              <img
              className="contact-card-view"
              src={avatar}
              size="2rem"
              alt="contact_card"
            />First Last Name</h2>
            Free
              <button className="arrow" onClick={() => setShowModal(true)}>
              ></button>
            </div>
          </div>
          <div className="block-2 settings-bordered-box">
            <div>
              <h2 className="box_sub_account">
                
              <img
              className="contact-card-view"
              src={icon_logo}
              size="2rem"
              alt="contact_card"
            />Account</h2>
              <h3>Change your email address<button className="arrow">></button></h3>
              email@trowit.com
              <br />
              <h3>Reset your password</h3><button className="arrow">></button>
              <br />
              <h3>Delete Account</h3><button className="arrow">></button>
          
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
