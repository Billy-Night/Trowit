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
                {/* <span id="search-area"> */}
                <div role="button" style={{ cursor: "pointer" }} onClick={() => {}}>
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M22.7144 13.5C23.4245 13.5 24.0001 12.8284 24.0001 12C24.0001 11.1716 23.4245 10.5 22.7144 10.5V13.5ZM0.805288 10.9393C0.303185 11.5251 0.303185 12.4749 0.805288 13.0607L8.98754 22.6066C9.48965 23.1924 10.3037 23.1924 10.8058 22.6066C11.3079 22.0208 11.3079 21.0711 10.8058 20.4853L3.5327 12L10.8058 3.51476C11.3079 2.92897 11.3079 1.97923 10.8058 1.39344C10.3037 0.807654 9.48965 0.807654 8.98754 1.39344L0.805288 10.9393ZM22.7144 10.5H1.71443V13.5H22.7144V10.5Z"
                        fill="black"
                        />
                    </svg>
             
                <SearchCard />
                </div>
                {/* </span> */}
                <ContactSortingOrder />
                <div className="contact-container-box">
{/*This is the view from when the user clicks on the group from contacts*/}
                    <>
                        {contactData ? contactData.map((e, index) => 
                            <ContactCard key={index} first_name={e.first_name} last_name={e.last_name} company={e.company}/>
                        )
                        : 
                        <h2>Sorry you have no contacts</h2>
                        }
                    </>    
                </div>
            </div>
        </Layout>
    )
}

export default ViewInsideGroup;