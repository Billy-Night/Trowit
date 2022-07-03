import './OrderCrdBasic.css';
import SideNavBar from '../Side_NavBar/SideNavBar';
import OderCardTemplate from './OderCardTemplate';
import OderCardBusinessTemplate from './OderCardBusinessTemplate';

const OrderCrdBasic = () => {
  return (
    <div id="order-crd-basic">
      <SideNavBar />
      {/* first part in the page */}
      <header className="OCB__header-container">
        <div className="OCB__sub-container__header-and-menu">
          <h1 className="OCB__sub-container__header">Order physical card</h1>
          <div className="OCB__sub-container__drop-menu"></div>
        </div>
      </header>
      {/* wrapping the content with the <hr/> in the page  */}
      <main>
        <div className="OCB__sub-container1__content-and-divider">
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
          <hr className="OCB__sub-container1__divider" />
        </div>

        <section>
          <OderCardTemplate
            header="Customized"
            cta="Upload your own design and customize your card!"
            benefit1="✔ NFC connectivity"
            benefit2="✔ Lasting material"
            benefit3="✔ No watermark"
            price="€20"
            fee="shipping fees"
            button="order"
          />
        </section>
        <section>
          <OderCardTemplate
            header="Premium"
            cta="Send us the details, and we’ll design your card!"
            benefit1="✔ NFC connectivity"
            benefit2="✔ Lasting material"
            benefit3="✔ No watermark"
            price="€30"
            fee="shipping fees"
            button="order"
          />
        </section>
      </main>
    </div>
  );
};

export default OrderCrdBasic;
