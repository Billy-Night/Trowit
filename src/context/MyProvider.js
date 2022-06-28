import React, { useState }  from "react";
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
        phone: "",
        email: "",
        address: "",
        website: "",
        link: ""
    };
    //Then create a state and set it to the empty object of newCard
    let [crtCard, setCrtCard] = useState(newCard);

    const handleCreateNewCardForm = (event) => {
        const { name,  value } = event.target;

        setCrtCard({
            ...crtCard,
            [name]: value,
        });
    };

    //Below will be the code for registering a new user
    //First set-up an empty object that is ready to recieve the information from the user
    const newUser = {
        email: "",
        password: "",
        verifypassword: ""
    };

    //Now set-up the state which is ready to recieve the info
    let [newReg, setNewReg] = useState(newUser);

    //Then create the handler function to take the new information
    const handleRegistration = (event) => {
        const { name, value } = event.target;

        setNewReg({
            ...newReg,
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
                newUser: newUser,
                newReg: newReg,
                setNewReg: setNewReg,
                handleRegistration: handleRegistration
            }} >
                { props.children }
        </MyContext.Provider> 
    )
};

export default MyProvider;