<<<<<<< HEAD
import React, { useContext, useState, useEffect } from "react";
// import { MyContext } from '../../context/MyProvider';

import { AuthContext } from '../../context/AuthContext';

import './Avatar.css';

=======
import React, { useContext, useState } from "react";
import { MyContext } from "../../context/MyProvider";
>>>>>>> eb85b19c77e0700ef3bbc72128bffd20ded7d5df

import { AuthContext } from "../../context/AuthContext";

import "./Avatar.css";

const Avatar = () => {
<<<<<<< HEAD
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

    // useEffect(() => {
    //     context.setCrtCard(avatarData.id)
    // }, [avatarData])

    

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
            
=======
  const context = useContext(MyContext);
  const { authToken, setAuthToken } = useContext(AuthContext);

  let [avatarData, setAvatarData] = useState({});

  const handleGetUserData = () => {
    fetch("http://localhost:3306/avatar", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAvatarData(data));
    return;
  };

  console.log(avatarData);

  return (
    <div className="avatar">
      <h1>This is the avatar component</h1>
      <h2>{authToken}</h2>
      <button onClick={handleGetUserData}>Press me to get info</button>
      {avatarData ? (
        <div>
          <p>First Name: {avatarData.first_name}</p>
          <p>Second Name: {avatarData.last_name} </p>
>>>>>>> eb85b19c77e0700ef3bbc72128bffd20ded7d5df
        </div>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </div>
  );
};

export default Avatar;
