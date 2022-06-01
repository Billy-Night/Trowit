import './LPFeatures.css';
import business_cards_img from '../../../images/landing_page/business_cards_img.svg';
import people_img from '../../../images/landing_page/people_img.svg';
import business_card_img from '../../../images/landing_page/business_card_img.svg';

const LPFeatures = () => {
  return (
    <div className="features-section">
      <div className="img-and-text">
        <image src={business_cards_img} alt="Business cards icon" />
        <p className="description">
          Easily create and share your Digital Business Card(s)
        </p>
      </div>
      <div className="img-and-text">
        <image src={people_img} alt="People connecting icon" />
        <p className="description">
          Manage your contacts and grow your network seamlessly
        </p>
      </div>
      <div className="img-and-text">
        <image src={business_card_img} alt="Business card icon" />
        <p className="description">
          Impress your peers with the NFC powered TROWIT card
        </p>
      </div>
    </div>
  );
};

export default LPFeatures;
