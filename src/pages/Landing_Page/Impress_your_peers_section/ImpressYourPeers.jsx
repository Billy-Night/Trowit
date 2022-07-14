import "./ImpressYourPeers.css";
import impress_your_peers from "../../../images/landing_page/hand_with_mobile@2x.png";

const ImpressYourPeers = (props) => {
  return (
    <div id="impress_your_peers">
      <img
        src={impress_your_peers}
        alt="profile preview"
        className="IYP--main-img"
      />
      <p className="IYP-text--p1">
        Impress your peers with a slick business card, and share your
        information with just a tap on their phone. That’s the magic of NFC!
      </p>
      <p className="IYP-text--p2">
        TROWIT is the last Business Card you’ll ever need! Not only they are
        better for the environment, but they also make a great first impression!
      </p>
      {/* Needs to be a link to expernal blog */}
      <button className="IYP-learn-more--btn MC--hover-underline">
        Learn More
      </button>
      <button
        className="IYP-order-trowit--btn"
        onClick={props.HandleClickOrdCard}
      >
        Order your physical TROWIT Business Card
      </button>
    </div>
  );
};

export default ImpressYourPeers;
