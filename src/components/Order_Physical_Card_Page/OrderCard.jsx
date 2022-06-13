import './OrderCard.css';
import SideNavBar from '../Side_NavBar/SideNavBar';

const OrderCard = () => {

    return (
        <div className='order-card'>
            <p>
                <SideNavBar />
                This is the order card page where the user selects their purchase option
            </p>
        </div>
    );
};

export default OrderCard;