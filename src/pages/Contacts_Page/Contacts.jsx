import Avatar from "../../components/Avatar/Avatar.jsx";
import SideNavBar from "../../components/Side_NavBar/SideNavBar.jsx";
import { useNavigate } from 'react-router-dom';
import "./Contacts.css";
import ContactSortingOrder from "./ContactSortingOrder.jsx";
import SearchCard from "../Cards_Page/SearchCard.jsx"

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact-card');
  }

  return (
    <div className="contact">
      <SideNavBar />
      <Avatar />
      <p className="title_contacts"> Contacts</p>
      <p className="search_card">
      <SearchCard />
      </p>
      <ContactSortingOrder />
      <button className="add-contact-btn" onClick={handleClick}>Create New Contact</button>
    </div>
  );
};

export default Contact;
