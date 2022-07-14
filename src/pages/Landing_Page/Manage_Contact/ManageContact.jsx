import "./ManageContact.css";
import mergeContact from "../../../images/landing_page/merge_contact@2x.png";

import { ScrollWithOffset } from "../../../utils/utils.jsx";

import { HashLink as Link } from "react-router-hash-link";

const ManageContact = (props) => {
  return (
    <div id="manage_contact">
      <img src={mergeContact} alt="profile preview" className="MC--main-img" />
      <p className="MC-text--p1">
        Add your connections to the address book by entering the contact
        details, or by simply scanning the business card.
      </p>
      <p className="MC-text--p2">
        Customize your address book by adding notes and tags to your contacts,
        and easily organize your contacts into groups.
      </p>
      <Link
        to="#impress_your_peers"
        className="MC-learn-more--btn MC--hover-underline"
        scroll={(el) => ScrollWithOffset(el)}
      >
        Learn More
      </Link>
      <button
        className="MC-order-trowit--btn"
        onClick={props.HandleClickOrdCard}
      >
        Order your physical TROWIT Business Card
      </button>
    </div>
  );
};

export default ManageContact;
