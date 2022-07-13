import React, { useContext } from 'react';
import { MyContext } from '../../context/MyProvider'


const EditProfile = () => {
  const context = useContext(MyContext);

  const handleSubmit = (event) => {
    event.preventDefault(); 
  
  };

  return (
    <div className="edit-profile">
      <p>This is the edit profile section</p>
      <form onSubmit={handleSubmit}>
        <input value={context.user.first_name} onChange={context.handleLogReg} name="first_name" placeholder="First Name"></input>
        <input value={context.user.last_name} onChange={context.handleLogReg} name="last_name" placeholder="Last Name"></input>
        <input value="Submit" type="submit"></input>
      </form>
    </div>
  );
};

export default EditProfile;
