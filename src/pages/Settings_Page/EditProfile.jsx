import React, { useContext } from 'react';
import { MyContext } from '../../context/MyProvider'
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();


  let id = context.userId;

  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetch(`http://localhost:3306/update-user/${id}`, {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        first_name: context.user.first_name,
        last_name: context.user.last_name,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("User updated");
          context.setUser(context.blankUser);
        } else {
          context.setUser(context.blankUser);
          navigate('/error');
        }
      })
  };

  return (
    <div className="edit-profile">
      <p>This is the edit profile section</p>
      <form onSubmit={handleSubmit}>
        <input value={context.user.first_name} onChange={context.handleLogReg} name="first_name" placeholder="First Name" />

        <input value={context.user.last_name} onChange={context.handleLogReg} name="last_name" placeholder="Last Name" />

        <input value="Submit" type="submit" />
      </form>
    </div>
  );
};

export default EditProfile;
