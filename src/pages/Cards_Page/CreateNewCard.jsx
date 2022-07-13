import React, { useContext } from "react";
import "./CreateNewCard.css";
import SideNavBar from "../../components/Side_NavBar/SideNavBar.jsx";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyProvider";
import AvatarEditor from "../../components/AvatarEditor/AvatarEditor";
import InformationButton from "../../components/InformationButton/InformationButton";
import { CardInformationData } from "./CardInformationData";
import "./SearchCard.css";
// import SearchCard from "./SearchCard.jsx";
import Avatar from "../../components/Avatar/Avatar.jsx";
import { useState } from "react";

const CreateNewCard = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const handleSubmitOfCreateNewCard = (event) => {
    event.preventDefault();
    fetch("http://localhost:3306/createcard", {
      method: "POST",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        type: context.crtCard.type,
        first_name: context.crtCard.first_name,
        last_name: context.crtCard.last_name,
        title: context.crtCard.title,
        department: context.crtCard.department,
        company: context.crtCard.company,
        phone: context.crtCard.phone,
        email: context.crtCard.email,
        address: context.crtCard.address,
        website: context.crtCard.website,
        link: context.crtCard.link,
        colour: context.crtCard.colour,
        users_id: context.userId,
      }),
    }).then((response) => {
      if (response.status === 201) {
        navigate("/cards");
        context.setCrtCard(context.newCard);
      } else {
        navigate("/error");
      }
    });
  };

  const additionalInformation = CardInformationData(context);

  const [enabledAdditionalFields, setEnabledAdditionalFields] = useState([]);

  const handleItemClick = (key) => {
    if (!enabledAdditionalFields.includes(key)) {
      setEnabledAdditionalFields((enabledAdditionalFields) => [
        ...enabledAdditionalFields,
        key,
      ]);
    }
  };

  return (
    <section id="create-card-page">
      <SideNavBar />
      <h1>Cards / New Card</h1>
      <br />
      <form onSubmit={handleSubmitOfCreateNewCard}>
        <span className="search-area">
          <a href="#">
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
          </a>

          <input
            value={context.crtCard.type}
            onChange={context.handleCreateNewCardForm}
            id="type"
            name="type"
            placeholder="Card Type"
          />
        </span>
        <div>
          <Avatar />
          <div id="create-card-left">
            <div>
              <AvatarEditor />
              <section id="create-card-form">
                <div className="box-container">
                  <div className="box red"></div>
                  <div className="box green"></div>
                  <div className="box blue"></div>
                  <div className="box yellow"></div>
                  <div className="box violet"></div>
                </div>
                <input
                  value={context.crtCard.first_name}
                  onChange={context.handleCreateNewCardForm}
                  id="First_Name"
                  name="first_name"
                  placeholder="First Name"
                />
                <hr className="create-card-form-divider" />
                <input
                  value={context.crtCard.last_name}
                  onChange={context.handleCreateNewCardForm}
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                />
                <hr className="create-card-form-divider" />
                <input
                  value={context.crtCard.title}
                  onChange={context.handleCreateNewCardForm}
                  id="title"
                  name="title"
                  placeholder="Title"
                />
                <hr className="create-card-form-divider" />
                <input
                  value={context.crtCard.department}
                  onChange={context.handleCreateNewCardForm}
                  id="department"
                  name="department"
                  placeholder="Department"
                />
                <hr className="create-card-form-divider" />
                <input
                  value={context.crtCard.company}
                  onChange={context.handleCreateNewCardForm}
                  id="company"
                  name="company"
                  placeholder="Company"
                />
                <hr className="create-card-form-divider" />

                {enabledAdditionalFields.map((field) => (
                  <>
                    <input
                      value={additionalInformation[field].value}
                      onChange={context.handleCreateNewCardForm}
                      id={field}
                      name={field}
                      placeholder={additionalInformation[field].label}
                    />
                    <hr className="create-card-form-divider" />
                  </>
                ))}

                <br />
                <input
                  id="create-card-button-save"
                  type="submit"
                  value="SAVE"
                />
              </section>
            </div>
          </div>
          <div id="create-card-right">
            {/* add more information container */}
            <h1>Add more information:</h1>
            <div id="create-card-right-grid">
              {Object.keys(additionalInformation).map((key) => {
                const item = additionalInformation[key];
                return (
                  <InformationButton
                    svg={item.svg}
                    label={item.label}
                    onClick={() => handleItemClick(key)}
                  />
                );
              })}
            </div>
          </div>

          {/* <form onSubmit={handleSubmitOfCreateNewCard}>
            <input
              value={context.crtCard.type}
              onChange={context.handleCreateNewCardForm}
              id="type"
              name="type"
              placeholder="Card Type"
            />

            <input
              value={context.crtCard.phone}
              onChange={context.handleCreateNewCardForm}
              id="phone"
              name="phone"
              placeholder="phone"
            />

            <input
              value={context.crtCard.email}
              onChange={context.handleCreateNewCardForm}
              id="email"
              name="email"
              placeholder="email"
            />

            <input
              value={context.crtCard.address}
              onChange={context.handleCreateNewCardForm}
              id="address"
              name="address"
              placeholder="address"
            />

            <input
              value={context.crtCard.website}
              onChange={context.handleCreateNewCardForm}
              id="website"
              name="website"
              placeholder="website"
            />

            <input
              value={context.crtCard.link}
              onChange={context.handleCreateNewCardForm}
              id="link"
              name="link"
              placeholder="link"
            />
          </form> */}
        </div>
      </form>
    </section>
  );
};

export default CreateNewCard;
