import React, { useContext, useState } from "react";
import { MyContext } from "../../context/MyProvider";

import { AuthContext } from "../../context/AuthContext";

import "./Avatar.css";

const Avatar = () => {
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
