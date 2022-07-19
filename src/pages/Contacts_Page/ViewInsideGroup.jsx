import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/MyProvider.js';
import './ViewInsideGroup.css';

import { useParams } from 'react-router-dom';
import Layout from "../../components/Layout/Layout";
import SearchCard from "../Cards_Page/SearchCard";
import ContactSortingOrder from "./ContactSortingOrder";
import ContactCard from './ContactCard';

const ViewInsideGroup = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);
    let userId = context.userId;

    let { id } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:3306/contacts/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setContactData(data);
        });
      }, [userId]);

    let [ contactData, setContactData ] = useState();

//Todo add the main container so I can input the Contact Card components with the contact details

    return (
        <Layout title="Contacts/TROWIT" >
            <div className="contact">
{/*This is the title of the page it needs to include the id which comes from the URL */}               
                <h1>Contact/{ id }</h1>
               
{/*//!The SearchCard component is wrap in a <p> tag */}
                <p className="search_card">
                <SearchCard />
                </p>
                <ContactSortingOrder />
                <div className="contact-container-box">
{/*This is the view from when the user clicks on the group from contacts*/}
                    <>
                        {contactData ? contactData.map((e, index) => 
                            <ContactCard key={index} first_name={e.first_name} last_name={e.last_name} company={e.company}/>
                        )
                        : <p>Sorry you have no contacts</p>}
                    </>    
                </div>
            </div>
        </Layout>
    )
}

export default ViewInsideGroup;