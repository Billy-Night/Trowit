import './HeroSection.css';
import heroImg from '../../../images/landing_page/hero-img@2x.png';
import Scroll_Down_Arrow from './Scroll_Down_Arrow';
//The useNavigate hook returns a function that lets you navigate programmatically.

import { ScrollWithOffset } from '../../../utils/utils.jsx';
import { HashLink } from 'react-router-hash-link';

const HeroSection = (props) => {
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
      <button className="C2A--btn" onClick={props.HandleClickOrdCard}>
        {' '}
        Order your TROWIT Card
      </button>
      {/* <button className="more--btn hover-underline">Learn More</button> */}
      <HashLink
        to="#section-features1"
        smooth
        className="more--btn hover-underline"
        scroll={(el) => ScrollWithOffset(el)}
      >
        Learn More
      </HashLink>

      <img
        src={heroImg}
        alt="girl, profile of business card "
        className="hero-img"
      />
      <Scroll_Down_Arrow />
    </div>
  );
};

export default HeroSection;
