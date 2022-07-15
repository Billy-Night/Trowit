import React, { useContext } from "react";
import { MyContext } from "../../context/MyProvider.js";
import { useNavigate } from "react-router-dom";
import SideNavBar from "../../components/Side_NavBar/SideNavBar.jsx";
import "./ContactCardDesign.css";
import Avatar from "../../components/Avatar/Avatar.jsx";
import contact_card_left from "../../images/cards_page/contact.png";
import contact_right from "../../images/cards_page/contact_right.png";
import contact_rightdown from "../../images/cards_page/contactcardrightdown.png";

const ContactCard = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3306/contact-contact", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        image: context.contact.image,
        full_name: context.contact.full_name,
        title: context.contact.title,
        company: context.contact.company,
        email: context.contact.email,
        phone: context.contact.phone,
        website: context.contact.website,
        linkdin: context.contact.linkdin,
        documents: context.contact.documents,
        files: context.contact.files,
        add_date: context.contact.add_date,
        add_time: context.contact.add_time,
        contact_type: context.contact.contact_type,
        tag1: context.contact.tag1,
        tag2: context.contact.tag2,
        tag3: context.contact.tag3,
        tag4: context.contact.tag4,
        notes: context.contact.notes,
        users_id: context.userId,
      }),
    }).then((res) => {
      if (res.status === 201) {
        navigate("/contacts");
        context.setContact(context.contactBlank);
      } else {
        navigate("/error");
        console.log("error sending contact to backend");
      }
    });
  };

  return (
    <div id="contact-card">
      <SideNavBar />
      <h1 className="contact-card-title">Contacts/TROWIT/Contact Name</h1>
        <span className="search-area">
            <span href="#">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M22.7144 13.5C23.4245 13.5 24.0001 12.8284 24.0001 12C24.0001 11.1716 23.4245 10.5 22.7144 10.5V13.5ZM0.805288 10.9393C0.303185 11.5251 0.303185 12.4749 0.805288 13.0607L8.98754 22.6066C9.48965 23.1924 10.3037 23.1924 10.8058 22.6066C11.3079 22.0208 11.3079 21.0711 10.8058 20.4853L3.5327 12L10.8058 3.51476C11.3079 2.92897 11.3079 1.97923 10.8058 1.39344C10.3037 0.807654 9.48965 0.807654 8.98754 1.39344L0.805288 10.9393ZM22.7144 10.5H1.71443V13.5H22.7144V10.5Z"
                fill="black"
                />
            </svg>
            </span>
        </span>
    <div>
      <Avatar />
      <div>
        <div id="contact-card-left">
          <img src={contact_card_left} alt="contact_card" className="img" />
          <div id="contact-card-right">
            <h1> Tags</h1>
            <form onSubmit={handleContactSubmit} id="contact-card-right-grid">
              <input
                value={context.contact.tag1}
                onChange={context.handleContact}
                name="tag1"
                placeholder="Tag 1"
              />

              <input
                value={context.contact.tag2}
                onChange={context.handleContact}
                name="tag2"
                placeholder="Tag 2"
              />

              <input
                value={context.contact.tag3}
                onChange={context.handleContact}
                name="tag3"
                placeholder="Tag 3"
              />

              <input
                value={context.contact.tag4}
                onChange={context.handleContact}
                name="tag4"
                placeholder="Tag 4"
              />
            </form>
            <div id="contact-card-right-grid">
              <form onSubmit={handleContactSubmit}>
                <h1> Notes</h1>
                <input
                  value={context.contact.notes}
                  onChange={context.handleContact}
                  name="notes"
                  placeholder="Notes"
                />
                <div className="card_right">
                  <img
                    src={contact_right}
                    alt="card_right"
                    className="card_right"
                  />
                  <img
                    src={contact_rightdown}
                    alt="card_right"
                    className="card_right"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
