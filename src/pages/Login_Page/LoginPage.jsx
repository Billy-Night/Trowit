import React, { useContext } from "react";
import './LoginPage.css';
import trowit_logo_img from '../../images/landing_page/logo_small@4x.png';
import google_sign_up from '../../images/landing_page/google_sign_in.png';
import { MyContext } from '../../context/MyProvider';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:3306/log", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email: context.user.email,
        hash_password: context.user.hash_password
      })
    })
    .then((response) => {
      if (response.status === 500) {
        context.setUser(context.user);
      }
      return response.json()
    })
    .then((data) => {
      console.log(data);
      navigate("/cards")
      context.SetLogIn(true);
    })
  }


    return (
        
        <div className="login_page">
          <div className= "trowitLogo">  
            <img
            src={trowit_logo_img}
            className="logo_login"
            alt="Trowit logo"
            />
          </div>
            <div>
                <h1 className= "text">Log in to your account</h1>
            </div>
          <form onSubmit={handleLogin} className= "loginForm">
              <input 
                value={context.user.email}
                onChange={context.handleLogReg} 
                name="email" 
                placeholder="Email"
                />
              <input 
                value={context.user.hash_password} 
                onChange={context.handleLogReg}
                name="hash_password" 
                placeholder="Password"
                />
              <input className= "reg"
                type="submit" 
                value= "Submit"
                />
          </form>
          <div className="forgotPassword">
            <a href="https://www.w3schools.com">Forgot password?</a> 
          </div>  
            <button className= "button"><img 
             src={google_sign_up} 
             className="google_sign_up"
             alt="Google Sign-up button"
            /></button>  
        </div>
    );
};

export default LoginPage; 