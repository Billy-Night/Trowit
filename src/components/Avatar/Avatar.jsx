import React, { useContext, useState } from "react";
import { MyContext } from '../../context/MyProvider'

import './Avatar.css';




const Avatar = () => {
    const context = useContext(MyContext);
    let [avatarData, setAvatarData] = useState({});

    if (context.loggedIn) {
        fetch("http://localhost:3306/avatar", {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…EzNn0.oijKLfll0vsEl-zWUVw28NkvyaOIWFjteBOSVelfSts'
            }
        })
            .then((res) => res.json())
            .then((data) => setAvatarData(data));
        console.log(avatarData);
    }


    return (
        <div className="avatar">
            <h1>This is the avatar component</h1>
            {avatarData ? "Loading..." : 
            <div>
                <p>First Name:</p>
                <p>Second Name: {avatarData.last_name} </p>
            </div>
            }
            {avatarData.first_name}
        </div>
    )
};

export default Avatar;