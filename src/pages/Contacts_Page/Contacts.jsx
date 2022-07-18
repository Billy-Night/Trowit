import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MyContext } from '../../context/MyProvider.js';
// import Avatar from "../../components/Avatar/Avatar.jsx";
// import SideNavBar from "../../components/Side_NavBar/SideNavBar.jsx";
import "./Contacts.css";
import ContactSortingOrder from "./ContactSortingOrder.jsx";
import SearchCard from "../Cards_Page/SearchCard.jsx"
import ContactCard from './ContactCard.jsx';
import Layout from '../../components/Layout/Layout.jsx';


const Contact = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);

  let [ contactData, setContactData ] = useState() 

  const handleClick = () => {
    navigate('/contact-card');
  }

  let id = context.userId;

  useEffect(() => {
    fetch(`http://localhost:3306/contacts/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setContactData(data);
    });
  }, [id]);

//Todo 1. ADD the box 2.Style the contact component,

  return (
    <Layout>
    <div className="contact">
      <p className="title_contacts"> Contacts</p>
      {/*//!The SearchCard component is wrap in a <p> tag */}
      <p className="search_card">
      <SearchCard />
      </p>
      <ContactSortingOrder />
      {/* <button className="add-contact-btn" onClick={handleClick}>Create New Contact</button> */}
      <div className="contact-container-box">
        {contactData ? contactData.map((e, index) => 
            <ContactCard key={index} first_name={e.first_name} last_name={e.last_name} company={e.company}/>
        )
        : <p>Sorry you have no contacts</p>}
      </div>
    </div> </Layout>
    // <Layout title="Contacts">
    //   <div className="contact">
        
        

    //     <p className="title_contacts"> Contacts</p>

    //     <div className="contact-container">
    //       {id ? <p>{id}</p> : <p>Loading Id</p>}
    //       {contactData ? (
    //         <p>{contactData[0].full_name}</p>
    //       ) : (
    //         <p>Loading contact data</p>
    //       )}
    //     </div>

    //     <p className="search_card">
    //       <SearchCard />
    //     </p>

    //     <ContactSortingOrder />
    //     <button className="add-contact-btn" onClick={handleClick}>
    //       Create New Contact
    //     </button>
    //   </div>
    // </Layout>
  );
};

export default Contact;
