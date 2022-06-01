import './HeroSection.css';
import heroImg from '../../../images/landing_page/hero-img@2xPS.png';

const HeroSection = () => {
  return (
    <div id="hero-features-section">
      <div className="hero-section--flex">
        <div className="part1--flex-column">
          <h1 className="title">Bring your business card to the digital era</h1>
          <p className="subtitle">
            TROWIT is a Digital & Physical Business Card designed to impress and
            help you grow your network in the 21st century
          </p>
          <div className="C2A-section">
            {/* <C2A-btn />
            <Learn-more-btn /> */}
            <button className="C2A--btn">Order your TROWIT Card</button>
            <button className="more--btn">Learn More</button>
          </div>
        </div>
        <div className="part2--shape-and-img">
          <img
            src={heroImg}
            alt="girl, profile of business card "
            className="hero-img"
          />
        </div>
      </div>
      <div className="features-section">
        <div className="img-and-text">
          <image />
          <p className="description">
            Easily create and share your Digital Business Card(s)
          </p>
        </div>
        <div className="img-and-text">
          <image />
          <p className="description">
            Manage your contacts and grow your network seamlessly
          </p>
        </div>
        <div className="img-and-text">
          <image />
          <p className="description">
            Impress your peers with the NFC powered TROWIT card
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
