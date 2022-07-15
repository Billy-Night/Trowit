import './CardsPage.css';
import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/MyProvider';
import SideNavBar from '../../components/Side_NavBar/SideNavBar.jsx';
import workImg from "../../images/cards_page/card_work@2x.png";
// import cardWork from '../../images/cards_page/card_work@2x.png';
// import cardPersonal from '../../images/cards_page/card_personal@2x.png';
// import createCard from '../../images/cards_page/create_card@2x.png';
//!previous data coming from the fake data
// import CardsData from '../../cardData';
import SearchCard from './SearchCard';
import createCard from '../../images/cards_page/create_card@2x.png';

import Card from './Card.jsx';
import Avatar from '../../components/Avatar/Avatar';
import { useEffect } from 'react';

const CardsPage = () => {
  const context = useContext(MyContext);

  let [ cardsData, setCards ] = useState();

  let id = context.userId;

  useEffect(() => {
    fetch(`http://localhost:3306/cards/${id}`)
    .then((res) => res.json())
    .then((data) => { 
      setCards(data);
    });
  }, [id])


  return (
    <div id="cardsPage">
      <div>
        <SideNavBar />
        <p className="title"> Cards</p>
        <p className='searchcard'>
        <SearchCard />
        </p>
      </div>
      <div>
        <Avatar />
      </div>
      <div className="CP_cards">
        {cardsData ? 
        <>
        {cardsData.map((card, index) => (
          <Card key={index} colour={card.colour} id={card.id} type={card.type} img={workImg} />
        ))}
        </>
        :
        null }
        <div className='position'>
          <Card img={createCard} id={3999} />
        </div>
      </div>
      {/* Added Dynamic cards from the fake data that can be found in the cardData.js file this will be replace by information from the Database */}
      {/* <div className="CP_cards">
        {CardsData.map((card, index) => (
          <Card
            key={index}
            src={card.image}
            alt={card.imgAlt}
            id={card.id}
            address={card.address}
          />
        ))}
      </div> */}
    </div>
  );
};

export default CardsPage;
