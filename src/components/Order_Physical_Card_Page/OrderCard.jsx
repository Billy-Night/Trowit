import './OrderCard.css';
import SideNavBar from '../Side_NavBar/SideNavBar';

const OrderCard = () => {
  return (
    <div id="order-card">
      <SideNavBar />
      <div className="OC__main-container">
        {/* first part in the page */}
        <div className="OC__sub-container1__header-and-menu">
          <h1 className="OC__sub-container1__header">Order physical card</h1>
          <div className="OC__sub-container1__drop-menu"></div>
        </div>
        {/* second part in the page  */}
        <div className="OC__sub-container2__sub-title-and-preview-cards">
          <h2 className="OC__sub-container2__sub-title">Select your card:</h2>
          <div className="OC__sub-container2__preview-cards">
            <div className="OC__sub-container2__single-card">
              {/* <p className="OC__sub-container2__preview-card-category">Work</p> */}
            </div>
            <div className="OC__sub-container2__single-card">
              {/* <p className="OC__sub-container2__preview-card-category">
                Personal
              </p> */}
            </div>
          </div>
        </div>
        {/* third part in the page  */}
        <div className="OC__sub-container3__price-table-and-buttons">
          <div className="OC__sub-container3__price-frame">
            <h3 className="OC__sub-container3___header">Basic</h3>
            <p className="OC__sub-container3__price-frame__cta">
              Choose from our 5 business card designs!
            </p>
            <ul className="OC__sub-container3__price-frame__benefits">
              <li className="OC__sub-container3__price-frame__single-benefit">
                ✔ NFC connectivity
              </li>
              <li className="OC__sub-container3__price-frame__single-benefit">
                ✔ QR code on the card
              </li>
              <li className="OC__sub-container3__price-frame__single-benefit">
                ✔ Lasting material
              </li>
              <li className="OC__sub-container3__price-frame__single-benefit">
                - TROWIT watermark
              </li>
            </ul>
          </div>
          {/* price & fees part in the page  */}
          <div className="OC__sub-container3__price-and-fees">
            <h4 className="OC__sub-container3__price">€10</h4>
            <p className="OC__sub-container3__fee">+ shipping fees</p>
          </div>
          {/* btn part in the page  */}
          <button className="OC__sub-container3__button">Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
