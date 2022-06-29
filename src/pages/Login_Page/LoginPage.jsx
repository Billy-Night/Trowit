import './LoginPage.css';
import trowit_logo_img from '../../images/landing_page/logo_small@4x.png';
import google_sign_up from '../../images/landing_page/google_sign_in.png';

const LoginPage = () => {

    return (
        
        <div className="login_page">
          <div className= "trowitLogo">  
            <img
            src={trowit_logo_img}
            class="logo_login"
            alt="Trowit logo"
            />
          </div>
            <div>
                <h1 className= "text">Log in to your account</h1>
            </div>
          <form className= "loginForm">
              <input 
                type="text" 
                name="Email" 
                placeholder="Email"
                />
              <input 
                type="text" 
                name="Password" 
                placeholder="Password"
                />
              <input 
                type="submit" 
                value= "Login"
                class= "reg"/>
          </form>
          <div class="forgotPassword">
            <a href="https://www.w3schools.com">Forgot password?</a> 
          </div>  
            <button className= "button"><img 
             src={google_sign_up} 
             class="google_sign_up"
             alt="Google Sign-up button"
            /></button>  
        </div>
    );
};

export default LoginPage; 