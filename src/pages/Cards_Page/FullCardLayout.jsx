import profilimg from '../../images/full_card_imgs/hero-img_crop@2x.png';
import mailIcon from '../../images/full_card_imgs/mail@2x.png';

import './FullCardLayout.css';

const FullCardLayout = () => {
  return (
    <div id="fclo__container">
      <section className="flco__img-logo">
        <div className="flco__img-logo-container">
          <img className="flco__img-profile" src={profilimg} alt="profile" />
          <img className="flco__logo" src="#" alt="" />
        </div>
      </section>
      <section className="flco__card-info">
        <header className="flco__header">
          <h1 className="flco__full-name">First & Last Name</h1>
          <p className="flco__title">Title</p>
          <p className="flco__company">Company</p>
        </header>
        <main className="flco__card-details">
          <div className="flco__email">
            <div className="flco__icon email"></div>
            <p className="flco__text">email@trowit.com</p>
          </div>
          <div className="flco__mobile">
            <div className="flco__icon mobile"></div>
            <p className="flco__text">+ 1 234 567 8901</p>
          </div>
          <div className="flco__website">
            <div className="flco__icon website"></div>
            <p className="flco__text">trowit.com</p>
          </div>
          <div className="flco__linkedin">
            <div className="flco__icon linkedin"></div>
            <p className="flco__text">trowit</p>
          </div>
        </main>
      </section>
      <footer className="flco__credit">
        <p className="flco__footer-text">
          A free digital business card from TROWIT
        </p>
      </footer>
    </div>
  );
};

export default FullCardLayout;
