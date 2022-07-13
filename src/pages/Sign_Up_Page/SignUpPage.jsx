import React, { useContext } from "react";
import "./SignUpPage.css";
import trowit_logo_img from "../../images/landing_page/logo_small@4x.png";
import google_sign_up from "../../images/landing_page/google_sign_up.png";
import { MyContext } from "../../context/MyProvider";
import { useNavigate } from "react-router-dom";



const SignUpPage = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3306/registration", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email: context.user.email,
        hash_password: context.user.hash_password,
      }),
    }).then((response) => {
      if (response.status === 201) {
        navigate("/log-in");
        context.setUser(context.blankUser);
      } else {
        navigate("/error");
      }
    });
  };
  return (
    <div className="registration_page">
      <div className="trowitLogo">
        <img src={trowit_logo_img} className="logo_signup" alt="Trowit logo" />
      </div>
      <div>
        <h1 className="text">Create an account to get started!</h1>
      </div>
      <form className="registrationForm" onSubmit={handleRegistrationSubmit}>
      <input
          value={context.user.first_name}
          onChange={context.handleLogReg}
          name="first_name"
          placeholder="Name"
        />
        <hr className="create-card-form-divider" />
        <input
          value={context.user.last_name}
          onChange={context.handleLogReg}
          name="last_name"
          placeholder="Last Name"
        />
        <hr className="create-card-form-divider" />
        <input
          value={context.user.email}
          onChange={context.handleLogReg}
          name="email"
          placeholder="Email"
        />
        <hr className="create-card-form-divider" />
        <input
          value={context.user.hash_password}
          onChange={context.handleLogReg}
          name="hash_password"
          placeholder="Password"
          type="password"
        />
        <hr className="create-card-form-divider" />
        {/* <input
                value={context.user.verify_password}
                onChange={context.handleLogReg}  
                name="verify_password" 
                placeholder="Verify Password"/> */}
        <input className="btn-register" type="submit" value="Submit" />
      </form>
      <div className="tacbox">
        <input id="checkbox" type="checkbox" className="inputCB" />
        {/* <label htmlFor="checkbox"> I agree to these <a href="#">Terms of Service</a> and <a href="#">Acceptable Use Policy</a>.</label> */}
      </div>
      <button className="button">
        <img
          src={google_sign_up}
          className="google_sign_up"
          alt="Google Sign-up button"
        />
      </button>
      <div>
        {/* <h1 className="textLower">Already have an account? <a href="#" className="textLowerHL">Login</a></h1> */}
      </div>
    </div>
  );
};

export default SignUpPage;
