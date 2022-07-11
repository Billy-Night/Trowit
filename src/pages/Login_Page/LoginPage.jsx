import React, { useContext } from "react";
import trowit_logo_img from "../../images/landing_page/logo_small.svg";
import google_sign_up from "../../images/landing_page/google_sign_in.png";
import { MyContext } from "../../context/MyProvider";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

//! This is important in order to avoid collision of class names with other css files
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const { setAuthToken } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:3306/log", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email: context.user.email,
        hash_password: context.user.hash_password,
      }),
    })
      .then((response) => {
        if (response.status === 500) {
          context.setUser(context.blankUser);
        }
        return response.json();
      })
    .then((data) => {
      // console.log(data);
      setAuthToken(data.token);
      context.SetLogIn(true);
      // console.log(authToken);
      navigate("/cards");
      context.setUser(context.blankUser);
      context.setUserID(data.id);
    })
  }

  return (
    <div className={styles["login-page-container"]}>
      <div className={styles["logo-center"]}>
        <img
          src={trowit_logo_img}
          className={styles["logo_login"]}
          alt="Trowit logo"
        />
      </div>
      <div className={styles["login_page"]}>
        <div>
          <h1 className={styles["text"]}>Log in to your account</h1>
        </div>
        <form onSubmit={handleLogin} className={styles["loginForm"]} >
          <input
            value={context.user.email}
            onChange={context.handleLogReg}
            name="email"
            placeholder="Email"
          />
          <hr className={styles["create-card-form-divider"]} />
          <input
            value={context.user.hash_password}
            onChange={context.handleLogReg}
            name="hash_password"
            placeholder="Password"
          />
          <hr className={styles["create-card-form-divider"]} />
          <input className={styles["reg"]} type="submit" value="Submit" />
        </form>
        <span className={styles["forgotPassword"]}>
          <a href="https://www.w3schools.com">Forgot password?</a>
        </span>
        <button className={styles["button"]}>
          <img
            src={google_sign_up}
            className={styles["google_sign_up"]}
            alt="Google Sign-up button"
          />
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
