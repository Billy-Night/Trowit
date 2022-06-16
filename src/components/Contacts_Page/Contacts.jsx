import SideNavBar from '../Side_NavBar/SideNavBar.jsx';
import './Contacts.css';
import ContactSortingOrder from './ContactSortingOrder.jsx';

const Contact = () => {

    return (
        <div className='contact'>
            <SideNavBar />
            <p>This is the contacts page</p>
            

            <ContactSortingOrder />
        </div>
    );
}

export default Contact;