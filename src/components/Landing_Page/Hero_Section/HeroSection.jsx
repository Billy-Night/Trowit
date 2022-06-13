import './HeroSection.css';
import heroImg from '../../../images/landing_page/hero-img@2x.png';
import { Link } from 'react-router-dom'; 
//The useNavigate hook returns a function that lets you navigate programmatically.
import { useNavigate } from "react-router-dom";

import ScrollWithOffset from '../../../utils/utils.jsx';
import { HashLink } from "react-router-hash-link";


const HeroSection = () => {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("./order-card");
  }

  return (
    <div id="hero-section">
      <div className="heading-primary-main">
        Bring your business card to the digital era
      </div>

      <div className="heading-primary-sub">
        TROWIT is a Digital & Physical Business Card designed to impress and
        help you grow your network in the 21st century
      </div>

      {/* <C2A-btn />
            <Learn-more-btn /> */}
      <button className="C2A--btn" onClick={handleClick} > Order your TROWIT Card</button>
      {/* <button className="more--btn hover-underline">Learn More</button> */}
      <HashLink to='#section-features1' smooth className="more--btn hover-underline" scroll={el => ScrollWithOffset(el)}>Learn More</HashLink>

      <img
        src={heroImg}
        alt="girl, profile of business card "
        className="hero-img"
      />
    </div>
  );
};

export default HeroSection;
