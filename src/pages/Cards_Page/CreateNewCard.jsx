import React, { useContext } from 'react';
import './CreateNewCard.css';
import SideNavBar from '../../components/Side_NavBar/SideNavBar.jsx';
import { useNavigate } from 'react-router-dom';

import { MyContext } from '../../context/MyProvider'

const CreateNewCard = () => {

    const context = useContext(MyContext);
    const navigate = useNavigate();

    const handleSubmitOfCreateNewCard = (event) => {
        event.preventDefault();
        fetch("http://http://localhost:3306/createcard", {
            method: "POST",
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
                link: context.crtCard.link
            }),
        })
        .then((response) => {
            if (response.status === 201) {
                navigate("/cards");
                context.setCrtCard(context.newCard)
            } else {
                navigate("/error")
            }
        });
    };

    return (
      <section id="create-card-page">
        <SideNavBar />
        <h1>Cards / New Card</h1>
        <div className="create-card-form-container">
          <form onSubmit={handleSubmitOfCreateNewCard}>
            <input
              value={context.crtCard.type}
              onChange={context.handleCreateNewCardForm}
              id="type"
              name="type"
              placeholder="Card Type"
            />

            <input
              value={context.crtCard.first_name}
              onChange={context.handleCreateNewCardForm}
              id="first_name"
              name="first_name"
              placeholder="First Name"
            />

            <input
              value={context.crtCard.last_name}
              onChange={context.handleCreateNewCardForm}
              id="last_name"
              name="last_name"
              placeholder="Last Name"
            />

            <input
              value={context.crtCard.title}
              onChange={context.handleCreateNewCardForm}
              id="title"
              name="title"
              placeholder="title"
            />

            <input
              value={context.crtCard.department}
              onChange={context.handleCreateNewCardForm}
              id="department"
              name="department"
              placeholder="department"
            />

            <input
              value={context.crtCard.company}
              onChange={context.handleCreateNewCardForm}
              id="company"
              name="company"
              placeholder="company"
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

            <input
              className="btn-create-card-form"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </section>
    );
};

export default CreateNewCard;