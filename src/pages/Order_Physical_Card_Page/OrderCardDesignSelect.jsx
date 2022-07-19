import { useParams } from "react-router-dom";
import "./OrderCrdBasic.css";
import Layout from "../../components/Layout/Layout";
import OderCardTemplate from "./OderCardTemplate";
// import SideNavBar from "../../components/Side_NavBar/SideNavBar";

//* import images
import mainCard from "../../images/order_physical_card_basic/card_img@2x.png";
import cardfront1 from "../../images/order_physical_card_basic/small_card1@2x.png";
import cardfront2 from "../../images/order_physical_card_basic/small_card2@2x.png";
import cardfront6 from "../../images/order_physical_card_basic/small_card6@2x.png";
import cardfront8 from "../../images/order_physical_card_basic/small_card8@2x.png";

const OrderCardDesignSelect = () => {

    //!!THIS IS A TEST COMPONENT PLEASE DON'T DO ANY WORK IN HERE




    const { id } = useParams();

    return (
        <Layout title="Order physical card">
        <div id="order-crd-basic">
          {/* first part in the page */}
          <div className="OCB__main-container">
            {/* wrapping the content with the <hr/> in the page  */}
            <main className="OBC__containers">
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
              </section>
              <hr className="OCB__middle-divider" />
              <section className="OCB__sub-container2__mein-card-front-back">
                <div className="OCB__main-card-preview">
                  <img src={mainCard} alt="preview of physical card " />
                </div>
    
                <div className="OCB__main-card-font">
                  <h1 className="OBC__subtitle">Choose design - front</h1>
                  <article className="OCB__cards-img-container">
                    <img src={cardfront1} alt="display the card's design" />
                    <img src={cardfront2} alt="display the card's design" />
                    <img src={cardfront1} alt="display the card's design" />
                    <img src={cardfront2} alt="display the card's design" />
                    <img src={cardfront1} alt="display the card's design" />
                  </article>
                </div>
                <hr className="OCB__form-divider" />
                <div className="OCB__main-card-font">
                  <h1 className="OBC__subtitle">Choose design - back</h1>
                  <article className="OCB__cards-img-container">
                    <img src={cardfront6} alt="display the card's design" />
                    <img src={cardfront8} alt="display the card's design" />
                    <img src={cardfront6} alt="display the card's design" />
                    <img src={cardfront8} alt="display the card's design" />
                    <img src={cardfront6} alt="display the card's design" />
                  </article>
                  <p className="OCB__main-card__description">
                    Do you want to customize the design, add a picture on the back
                    or rearrange the fields on the card? <span> +UPGRADE</span>
                  </p>
                </div>
              </section>
              <hr className="OCB__middle-divider" />
              <section className="OCB__submit-order">
                <p className="OCB__input-title">First Name</p>
                <input type="name" placeholder="Jane" />
                <hr className="OCB__form-divider" />
    
                <p className="OCB__input-title">Last Name</p>
                <input type="name" placeholder="Doe" />
                <hr className="OCB__form-divider" />
    
                <p className="OCB__input-title">Street & Number</p>
                <input type="text" placeholder="1355 Market Street Suite" />
                <hr className="OCB__form-divider" />
    
                <p className="OCB__input-title">City</p>
                <input type="text" placeholder="San Francisco" />
                <hr className="OCB__form-divider" />
    
                <p className="OCB__input-title">Zip Code</p>
                <input type="number" placeholder="94103" />
                <hr className="OCB__form-divider" />
    
                <p className="OCB__input-title">Country</p>
                <input type="text" placeholder="USA" />
                <hr className="OCB__form-divider" />
    
                <p className="OCB__input-title">Phone Number</p>
                <input type="number" placeholder="+1234567890" />
                <hr className="OCB__form-divider" />
    
                <button className="OCB__sub-container3__button">
                  order trowit
                </button>
              </section>
            </main>
          </div>
        </div>
        </Layout>
    );
};

export default OrderCardDesignSelect;