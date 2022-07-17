import React, { useContext, useState, useEffect } from "react";
import { MyContext } from '../../context/MyProvider';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'

import './Avatar.css';


const Avatar = () => {
    const context = useContext(MyContext);
    const { setAuthToken } = useContext(AuthContext);
    const { authToken } = useContext(AuthContext);

    const navigate = useNavigate();

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
            setAvatarData(data);
            context.setUserID(data.id);
            context.SetLogIn(true);
    });
        //think about adding some clean up function here
    }, [authToken, context])

    const handleLogOutClick = () => {
        setAuthToken("");
        context.setUserID(null);
        context.SetLogIn(false);
        navigate('/log-in');
    }

    return (
        <div className="avatar">
        {(avatarData) ?
            <div>
                <h1>This is the avatar component</h1>
                <h2>The Web token {authToken}</h2>
                <p>First Name: {avatarData.first_name}</p>
                <p>Second Name: {avatarData.last_name} </p>
                <button>Settings</button>
                <button>Tips</button>
                <button onClick={handleLogOutClick}>LogOut</button>
            </div>
        :
        <>
        <p>Sign In</p>
        </>
        }
        </div>
  );
};

export default Avatar;
