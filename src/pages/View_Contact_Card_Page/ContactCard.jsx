import React, { useContext } from "react";
import { MyContext } from '../../context/MyProvider.js';
import SideNavBar from '../../components/Side_NavBar/SideNavBar.jsx';
import './ContactCard.css';


const ContactCard = () => {
    const context = useContext(MyContext);

    return (
        <div className="contact-card">
            <SideNavBar />
            <h1 className="contact-card-title">Contacts/TROWIT/Contact Name</h1>
            <form onSubmit={context.handleSubmit} className="contact-card-form">
                <input value={context.contact.image} onChange={context.handleContact}  name="image" placeholder="image"/>

                <input value={context.contact.full_name} onChange={context.handleContact} name="full_name" placeholder="Full Name" />

                <input value={context.contact.title} onChange={context.handleContact} name="title" placeholder="title" />

                <input value={context.contact.company} onChange={context.handleContact} name="company" placeholder="Company" />

                <input value={context.contact.email} onChange={context.handleContact} name="email" placeholder="Email" />

                <input value={context.contact.phone}  onChange={context.handleContact} name="phone" placeholder="Contact" />

                <input value={context.contact.website} onChange={context.handleContact} name="website" placeholder="website" />

                <input value={context.contact.linkdin} onChange={context.handleContact} name="linkdin" placeholder="linkdin" />

                <input value={context.contact.documents} onChange={context.handleContact} name="documents" placeholder="documents" />

                <input value={context.contact.files} onChange={context.handleContact} name="files" placeholder="files" />

                <input value={context.contact.add_date} onChange={context.handleContact} name="add_date" placeholder="Add Date" />

                <input value={context.contact.add_time} onChange={context.handleContact} name="add_time" placeholder="Add Time" />

                <input value={context.contact.contact_type} onChange={context.handleContact} name="contact_type" placeholder="Contact Type" />

                <input value={context.contact.tag1} onChange={context.handleContact} name="tag1" placeholder="Tag 1" />

                <input value={context.contact.tag2} onChange={context.handleContact} name="tag2" placeholder="Tag 2" />

                <input value={context.contact.tag3} onChange={context.handleContact} name="tag3" placeholder="Tag 3" />

                <input value={context.contact.tag4} onChange={context.handleContact} name="tag4" placeholder="Tag 4" />

                <input value={context.contact.notes} onChange={context.handleContact} name="notes" placeholder="Notes" />

            </form>
        </div>
    );
};

export default ContactCard;