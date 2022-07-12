import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

export const MyContext = React.createContext();

const MyProvider = (props) => {
    //first for the create new card form, set-up the object that will be filled by the information filled in
    const newCard = {
        type: "",
        first_name: "",
        last_name: "",
        title: "",
        department: "",
        company: "",
        phone: 0,
        email: "",
        address: "",
        website: "",
        link: "",
        colour: "",
        users_id: 0,
    };
    //Then create a state and set it to the empty object of newCard
    let [crtCard, setCrtCard] = useState(newCard);

  const handleCreateNewCardForm = (event) => {
    const { name, value } = event.currentTarget;

    setCrtCard({
      ...crtCard,
      [name]: value,
    });
  };

  //Below will be the code for registering a new user
  //First set-up an empty object that is ready to receive the information from the user
  const blankUser = {
    image_url: "",
    first_name: "",
    last_name: "",
    email: "",
    hash_password: "",
    birthday: 0,
    subscription: "",
    date: 0,
  };

  //Now set-up the state which is ready to receive the info
  let [user, setUser] = useState(blankUser);

  //Then create the handler function to take the new information
  const handleLogReg = (event) => {
    const { name, value } = event.currentTarget;

    setUser({
      ...user,
      [name]: value,
    });
  };

  //Create the log in process

  //A state to check the status of wether the user is logged in or not
  let [loggedIn, SetLogIn] = useState(false);

  let [userId, setUserID] = useState(null);

  const contactBlank = {
    image: "",
    full_name: "",
    title: "",
    company: "",
    email: "",
    phone: 0,
    website: "",
    linkdin: "",
    documents: "",
    files: "",
    add_date: null,
    add_time: null,
    contact_type: "",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
    notes: "",
    users_id: null,
  }

  let [contact, setContact] = useState(contactBlank);

  const handleContact = (event) => {
    const { name, value } = event.currentTarget;

    setContact({
    ...contact,
    [name]: value,
  });
  };
    
    return (
        <MyContext.Provider 
            value={{
                newCard: newCard,
                crtCard: crtCard,
                setCrtCard: setCrtCard,
                handleCreateNewCardForm: handleCreateNewCardForm,
                blankUser: blankUser,
                user: user,
                setUser: setUser,
                handleLogReg: handleLogReg,
                SetLogIn: SetLogIn,
                loggedIn: loggedIn,
                userId: userId,
                setUserID: setUserID,
                contact: contact,
                setContact: setContact,
                handleContact: handleContact
            }} >
                { props.children }
        </MyContext.Provider> 
    )
};

export default MyProvider;
