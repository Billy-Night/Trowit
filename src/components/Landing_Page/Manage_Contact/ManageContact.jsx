import './ManageContact.css';
import mergeContact from '../../../images/landing_page/merge_contact@2x.png';

import ScrollWithOffset from '../../../utils/utils.jsx';

import { HashLink as Link} from "react-router-hash-link";

const ManageContact = () => {
  return (
    <div id="manage_contact">
      <img src={mergeContact} alt="profile preview" className="MC--main-img" />
      <p className="MC-text--p1">
        Create your beautifully designed Digital Business Card with just a few
        clicks, and easily share it through email, social media and more.
      </p>
      <p className="MC-text--p2">
        Anyone can receive your digital card, even if they don't have an account
        on TROWIT!
      </p>
      <Link to='#impress_your_peers' className="MC-learn-more--btn MC--hover-underline" scroll={el => ScrollWithOffset(el)}>
        Learn More
      </Link>
      <button className="MC-order-trowit--btn">
        Order your physical TROWIT Business Card
      </button>
    </div>
  );
};

export default ManageContact;
