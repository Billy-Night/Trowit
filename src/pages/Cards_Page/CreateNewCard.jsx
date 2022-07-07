import React, { useContext } from "react";
import "./CreateNewCard.css";
import SideNavBar from "../../components/Side_NavBar/SideNavBar.jsx";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyProvider";
import AvatarEditor from "../../components/AvatarEditor/AvatarEditor";
import InformationButton from "../../components/InformationButton/InformationButton";
import { CardInformationData } from "./CardInformationData";
import "./SearchCard.css";
import SearchCard from "./SearchCard.jsx";

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

  return (
    <section id="create-card-page">
      <SideNavBar />
      <h1>Cards / New Card</h1>
      <br />
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

        <input type="search" />
      </span>
      <div>
        <div id="create-card-left">
          <AvatarEditor />

          <form id="create-card-form" onSubmit={handleSubmitOfCreateNewCard}>
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
            <br />

            {/* TODO: load other input fields conditionally and make them depend on the state of the information panel*/}
            <input id="create-card-button-save" type="submit" value="SAVE" />
          </form>
        </div>
        <div id="create-card-right">
          {/* add more information container */}
          <h1>Add more information:</h1>
          <div id="create-card-right-grid">
            {CardInformationData.map((item) => (
              <InformationButton svg={item.svg} label={item.label} />
            ))}
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
    </section>
  );
};

export default CreateNewCard;

// type: context.crtCard.type,
//         first_name: context.crtCard.type,
//         last_name: context.crtCard.type,
//         title: context.crtCard.type,
//         department: context.crtCard.type,
//         company: context.crtCard.type,
//         phone: context.crtCard.type,
//         email: context.crtCard.type,
//         address: context.crtCard.type,
//         website: context.crtCard.type,
//         link: context.crtCard.type,
