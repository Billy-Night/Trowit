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

    return (
        <MyContext.Provider 
            value={{
                crtCard: crtCard,
                newCard: newCard,
                setCrtCard: setCrtCard,
                handleCreateNewCardForm: handleCreateNewCardForm
            }} >
                { props.children }
        </MyContext.Provider> 
    )
};

export default MyProvider;