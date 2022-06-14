import './CardsPage.css';
import SideNavBar from '../Side_NavBar/SideNavBar.jsx';
import cardWork from '../../images/cards_page/card_work@2x.png';
import cardPersonal from '../../images/cards_page/card_personal@2x.png';
import createCard from '../../images/cards_page/create_card@2x.png';

const CardsPage = () => {
  return (
    <div id="cardsPage">
      <div>
        <SideNavBar />
        <p>This is the cards page</p>
      </div>
      <div className="CP_cards">
        <div className="card">
          <img src={cardWork} alt="card for work" />
        </div>
        <div className="card">
          <img src={cardPersonal} alt="card for personal stuff" />
        </div>
        <div className="card">
          <img src={createCard} alt="create a card" />
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
