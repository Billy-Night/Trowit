import './CardsPage.css';
import SideNavBar from '../Side_NavBar/SideNavBar.jsx';
// import cardWork from '../../images/cards_page/card_work@2x.png';
// import cardPersonal from '../../images/cards_page/card_personal@2x.png';
// import createCard from '../../images/cards_page/create_card@2x.png';
import CardsData from '../../cardData';

import Card from '../Organisims/Card';

const CardsPage = () => {
  return (
    <div id="cardsPage">
      <div>
        <SideNavBar />
        <p className='title'> Cards</p>
      </div>
      {/* Added Dynamic cards from the fake data that can be found in the cardData.js file this will be replace by information from the Database */}
      <div className="CP_cards">
        {CardsData.map((card, index) => (
          <Card key={index} src={card.image} alt={card.imgAlt} />
        ))}
        {/* <div className="card">
          <img src={cardWork} alt="card for work" />
        </div>
        <div className="card">
          <img src={cardPersonal} alt="card for personal stuff" />
        </div>
        <div className="card">
          <img src={createCard} alt="create a card" />
        </div> */}
      </div>
    </div>
  );
};

export default CardsPage;
