import './OrderCard.css';
import SideNavBar from '../Side_NavBar/SideNavBar';

const OrderCard = () => {

    return (
        <div className='order-card'>
            <p>
                <SideNavBar />
                <p className='title'> Order physical card</p>
            </p>
        </div>
    );
};

export default OrderCard;