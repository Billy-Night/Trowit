import './OrderCrdBasic.css';
import SideNavBar from '../Side_NavBar/SideNavBar';
import OderCardTemplate from './OderCardTemplate';
import OderCardBusinessTemplate from './OderCardBusinessTemplate';

// import images
import mainCard from '../../images/order_physical_card_basic/card_img@2x.png';

const OrderCrdBasic = () => {
  return (
    <div id="order-crd-basic">
      <SideNavBar />
      {/* first part in the page */}
      <div className="OCB__main-container">
        <header className="OCB__sub-container__header-and-menu">
          <h1 className="OCB__sub-container__header">Order physical card</h1>
          <div className="OCB__sub-container__drop-menu"></div>
        </header>
        {/* wrapping the content with the <hr/> in the page  */}
        <main>
          <section className="OCB__sub-container1__content-and-divider">
            <div className="OCB__sub-container1__content">
              <div className="OCB__sub-container2__sub-title-and-preview-cards">
                <h2 className="OCB__sub-container2__sub-title">
                  Select your card:
                </h2>
                <div className="OCB__sub-container2__preview-cards">
                  <div className="OCB__sub-container2__single-card"></div>
                  <div className="OCB__sub-container2__single-card"></div>
                </div>
                <OderCardTemplate
                  header="Basic"
                  cta="Choose from our 5 business card designs!"
                  benefit1="✔ NFC connectivity"
                  benefit2="✔ Lasting material"
                  benefit3="- TROWIT watermark"
                  price="€10"
                  fee="shipping fees"
                  button="upgrade"
                />
              </div>
            </div>
            <hr />
          </section>

          <section className="OCB__sub-container2__mein-card-front-back">
            <div className="OCB__main-card-preview">
              <img src={mainCard} alt="preview of physical card " />
            </div>
            <div className="OCB__main-card-font">
              <h1>Choose design - front</h1>
              <article>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </article>
              {/* <hr /> */}
            </div>
            <div className="OCB__main-card-font">
              <h1>Choose design - back</h1>
              <article>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </article>
              <p>
                Do you want to customize the design, add a picture on the back
                or rearrange the fields on the card? <span>+UPGRADE</span>
              </p>
            </div>
            <div className="OCB__main-card-back"></div>
          </section>
          <section></section>
        </main>
      </div>
    </div>
  );
};

export default OrderCrdBasic;
