import './CreateNewCard.css';
import SideNavBar from '../Side_NavBar/SideNavBar.jsx';

const CreateNewCard = () => {

    return (

        <div>
            <SideNavBar />
            <p>This is the create new cards page</p>
            <div className="create-card-form-container">
            <form>
                <input value="" id="type" name="type" placeholder="Card Type" />
                <input value="" id="first_name" name="first_name" placeholder="First Name" />
                <input value="" id="last_name" name="last_name" placeholder="Last Name" />
                <input value="" id="title" name="title" placeholder="title" />
                <input value="" id="department" name="department" placeholder="department" />
                <input value="" id="company" name="company" placeholder="department" />
                <input value="" id="phone" name="phone" placeholder="phone" />
                <input value="" id="email" name="email" placeholder="email" />
                <input value="" id="address" name="address" placeholder="address" />
                <input value="" id="website" name="website" placeholder="website" />
                <input value="" id="link" name="link" placeholder="link" />
            </form>
            </div>
        </div>
    );
};

export default CreateNewCard;