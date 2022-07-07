import "./CardsPage.css";
import SideNavBar from "../../components/Side_NavBar/SideNavBar.jsx";
// import cardWork from '../../images/cards_page/card_work@2x.png';
// import cardPersonal from '../../images/cards_page/card_personal@2x.png';
// import createCard from '../../images/cards_page/create_card@2x.png';
import CardsData from "../../cardData";
import SearchCard from "./SearchCard";

import Card from "./Card.jsx";
import Avatar from "../../components/Avatar/Avatar";

const CardsPage = () => {
  return (
    <div id="cardsPage">
      <div>
        <SideNavBar />
        <p className="title"> Cards</p>
        <SearchCard />
        {/* I don't think using line <br> is good practice whats best then???  */}
        <br />
        <br />
      </div>
      <div>
        <Avatar />
      </div>
      {/* Added Dynamic cards from the fake data that can be found in the cardData.js file this will be replace by information from the Database */}
      <div className="CP_cards">
        {CardsData.map((card, index) => (
          <Card
            key={index}
            src={card.image}
            alt={card.imgAlt}
            id={card.id}
            address={card.address}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
