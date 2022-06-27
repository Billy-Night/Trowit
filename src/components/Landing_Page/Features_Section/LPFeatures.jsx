import './LPFeatures.css';
import business_cards_img from '../../../images/landing_page/business_cards_img.svg';
import people_img from '../../../images/landing_page/people_img.svg';
import business_card_img from '../../../images/landing_page/business_card_img.svg';

const LPFeatures = () => {
  return (
    <div className="features-section" id="section-features1">
      <div className="img-and-text">
        <img
          src={business_cards_img}
          className="business-cards"
          alt="Business cards icon"
        />
        <p className="description">
          Easily create & share your Digital Business Card(s)
        </p>
      </div>
      <div className="img-and-text">
        <img
          src={people_img}
          className="business-cards"
          alt="People connecting icon"
        />
        <p className="description">
          Manage your contacts & grow your network seamlessly
        </p>
      </div>
      <div className="img-and-text">
        <img
          className="LPF-icon"
          src={business_card_img}
          className="business-cards"
          alt="Business card icon"
        />
        <p className="description">
          Impress your peers with the NFC powered TROWIT card
        </p>
      </div>
    </div>
  );
};

export default LPFeatures;
