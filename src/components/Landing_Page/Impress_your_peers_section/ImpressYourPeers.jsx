import './ImpressYourPeers.css';
import impress_your_peers from '../../../images/landing_page/hand_with_mobile@2x.png';

const ImpressYourPeers = (props) => {
  return (
    <div id="impress_your_peers">
      <img
        src={impress_your_peers}
        alt="profile preview"
        className="IYP--main-img"
      />
      <p className="IYP-text--p1">
        Create your beautifully designed Digital Business Card with just a few
        clicks, and easily share it through email, social media and more.
      </p>
      <p className="IYP-text--p2">
        Anyone can receive your digital card, even if they don't have an account
        on TROWIT!
      </p>
      {/* Needs to be a link to expernal blog */}
      <button className="IYP-learn-more--btn MC--hover-underline">
        Learn More
      </button>
      <button className="IYP-order-trowit--btn" onClick={props.HandleClickOrdCard}>
        Order your physical TROWIT Business Card
      </button>
    </div>
  );
};

export default ImpressYourPeers;
