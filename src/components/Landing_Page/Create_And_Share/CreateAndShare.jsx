import './CreateAndShare.css';
import profilePreview from '../../../images/landing_page/create_and_share_img@2x.png';

const CreateAndShare = () => {
  return (
    <div id="create_and_share">
      <img
        src={profilePreview}
        alt="profile preview"
        className="CAS--main-img"
      />
      <p className="CAS-text--p1">
        Create your beautifully designed Digital Business Card with just a few
        clicks, and easily share it through email, social media and more.
      </p>
      <p className="CAS-text--p2">
        Anyone can receive your digital card, even if they don't have an account
        on TROWIT!
      </p>
      <button className="CAS-learn-more--btn CAS--hover-underline">
        Learn More
      </button>
      <button className="CAS-order-trowit--btn">
        Order your physical TROWIT Business Card
      </button>
    </div>
  );
};

export default CreateAndShare;
