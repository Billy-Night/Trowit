import React, { useContext } from 'react';
import './SignUpPage.css';
import trowit_logo_img from '../../images/landing_page/logo_small@4x.png';
import google_sign_up from '../../images/landing_page/google_sign_up.png';

import { MyContext } from '../../context/MyProvider';

import { useNavigate } from 'react-router-dom';



const SignUpPage = () => {

  const context = useContext(MyContext);
  const navigate = useNavigate();

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
     fetch("http://http://localhost:3306/registration",
     {
      method: "POST",
      headers: new Headers({
          "Content-Type": "application/json",
      }),
      body: JSON.stringify({
          email: context.newReg.email,
          password: context.newReg.password,
      }),
  })
  .then((response) => {
      if (response.status === 201) {
          navigate("/log-in");
          context.setNewReg(context.newUser)
      } else {
          navigate("/error")
      }
  });
};

    return (
        
        <div className="registration_page">
          <div className= "trowitLogo">  
            <img
            src={trowit_logo_img}
            className="logo"
            alt="Trowit logo"
            />
          </div>
            <div>
                <h1 className="text">Create an account to get started!</h1>
            </div>
          <form onSubmit={handleRegistrationSubmit} className="registrationForm">
              <input 
                value={context.newReg.email} 
                onChange={context.handleRegistration}
                name="email"
                placeholder="Email"
                />
              <input 
                value={context.newReg.password} 
                onChange={context.handleRegistration}
                name="password"
                placeholder="Password"
                />
              <input
                value={context.newReg.verifypassword}
                onChange={context.handleRegistration}  
                name="verifypassword" 
                placeholder="Verify Password"/>
              <input className='btn-register' 
                type="submit" 
                value= "submit"
                />
          </form>
          <div className="tacbox">
          <input id="checkbox" type="checkbox" className= "inputCB"/>
          <label htmlFor="checkbox"> I agree to these <a href="#">Terms of Service</a> and <a href="#">Acceptable Use Policy</a>.</label>
          </div>  
            <button className= "button"><img 
             src={google_sign_up} 
             className="google_sign_up"
             alt="Google Sign-up button"
            /></button>
          <div>
            <h1 className="textLower">Already have an account? <a href="#" className= "textLowerHL">Login</a></h1>
          </div>  
        </div>
    );
};

export default SignUpPage; 