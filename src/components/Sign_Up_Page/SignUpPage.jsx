import './SignUpPage.css';
import trowit_logo_img from '../../images/landing_page/logo_small@4x.png';
import google_sign_up from '../../images/landing_page/google_sign_up.png';

const SignUpPage = () => {

    return (
        
        <div className="registration_page">
          <div className= "trowitLogo">  
            <img
            src={trowit_logo_img}
            class="logo"
            alt="Trowit logo"
            />
          </div>
            <div>
                <h1 className= "text">Create an account to get started!</h1>
            </div>
          <form className= "registrationForm">
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
                type="text" 
                name="Verify Password" 
                placeholder="Verify Password"/>
              <input 
                type="submit" 
                value= "Register"
                class= "reg"/>
          </form>
          <div class="tacbox">
          <input id="checkbox" type="checkbox" class= "inputCB"/>
          <label for="checkbox"> I agree to these <a href="#">Terms of Service</a> and <a href="#">Acceptable Use Policy</a>.</label>
          </div>  
            <button className= "button"><img 
             src={google_sign_up} 
             class="google_sign_up"
             alt="Google Sign-up button"
            /></button>
          <div>
            <h1 className= "textLower">Already have an account? <a href="#" className= "textLowerHL">Login</a></h1>
          </div>  
        </div>
    );
};

export default SignUpPage; 