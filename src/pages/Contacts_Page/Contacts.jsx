import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contacts.css";
import ContactSortingOrder from "./ContactSortingOrder.jsx";
import SearchCard from "../Cards_Page/SearchCard.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import GroupCard from "./GroupCard";
import all_contacts from "../../images/cards_page/all_contacts.png";
import Card from "../Cards_Page/Card";

const Contact = () => {
  const navigate = useNavigate();

  let [selectedGroup, setSelectedGroup] = useState();

  const handleGroupSelection = (id) => {
    setSelectedGroup(id);
    navigate(`/contacts/${id}`);
  };

  //Todo add box's where I can input the different groups

  return (
    <Layout
      title="Contacts"
      extraControls={<SearchCard />}
    >
      <div className="contact">

        <ContactSortingOrder />

        <Card
              img={all_contacts}
              id={3999}
              className={"cards_page_card"}
              // FIXME: we need text for accessibility: type={"Add Card"}
              action={() => handleGroupSelection("All Contacts")}
            />
        {/* <button onClick={() => handleGroupSelection("All Contacts")}>
          All Contacts
        </button> */}
      </div>
    </Layout>
  );
};

export default Contact;
