import React, { useContext, useState, useEffect } from "react";
// import { MyContext } from '../../context/MyProvider';

import { AuthContext } from '../../context/AuthContext';

import './Avatar.css';


const Avatar = () => {
    // const context = useContext(MyContext);
    const { authToken } = useContext(AuthContext);

    let [avatarData, setAvatarData] = useState({});

    // To send a cross-origin request with headers like Authorization, you have to drop the no-cors mode and support preflight requests (OPTIONS).

    useEffect(() => {
        fetch("http://localhost:3306/avatar", {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
            setAvatarData(data)
    });
        //think about adding some clean up function here
    }, [authToken])

    

    return (
        <div className="avatar">
            <h1>This is the avatar component</h1>
            <h2>The Web token {authToken}</h2>
            {avatarData ?
            <div>
                <p>First Name: {avatarData.first_name}</p>
                <p>Second Name: {avatarData.last_name} </p>
            </div>
            :
            <>
            <p>Loading...</p>
            </>
            }
    </div>
  );
};

export default Avatar;
