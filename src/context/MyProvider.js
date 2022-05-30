import React from "react";
// import { useNavigate } from 'react-router-dom';

export const MyContext = React.createContext();

const MyProvider = (props) => {

    return (
        <MyContext.Provider 
            value={{

            }} >
                { props.children }
        </MyContext.Provider> 
    )
};

export default MyProvider;