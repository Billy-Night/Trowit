import React, { useContext } from "react";
import { MyContext } from "../../context/MyProvider.js";
import { useNavigate } from "react-router-dom";

const TempCreateContact = () => {

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
        <div>
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
                        <input
                        value={context.contact.notes}
                        onChange={context.handleContact}
                        name="notes"
                        placeholder="Notes"
                        />
                </form>
        </div>
    )
}

export default TempCreateContact;