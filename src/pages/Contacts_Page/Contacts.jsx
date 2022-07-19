import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Contacts.css";
import ContactSortingOrder from "./ContactSortingOrder.jsx";
import SearchCard from "../Cards_Page/SearchCard.jsx"

import Layout from '../../components/Layout/Layout.jsx';
import GroupCard from './GroupCard';


const Contact = () => {
  const navigate = useNavigate();

  let [ selectedGroup, setSelectedGroup ] = useState();

  const handleGroupSelection = (id) => {
    setSelectedGroup(id);
    navigate(`/contacts/${id}`);
  }

//Todo add box's where I can input the different groups

  return (
    <Layout title="Contacts">
      <div className="contact">
  {/*//!The SearchCard component is wrap in a <p> tag */}
        <p className="search_card">
        <SearchCard />
        </p>
        <ContactSortingOrder />
        <GroupCard />
        <button onClick={() => handleGroupSelection("All Contacts")}>All Contacts</button>
      </div> 
    </Layout>
  );
};

export default Contact;
