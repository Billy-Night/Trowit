import "./CardsPage.css";
import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context/MyProvider";
import { useNavigate } from "react-router-dom";
import workImg from "../../images/cards_page/card_work@2x.png";
// import cardWork from '../../images/cards_page/card_work@2x.png';
// import cardPersonal from '../../images/cards_page/card_personal@2x.png';
// import createCard from '../../images/cards_page/create_card@2x.png';
//!previous data coming from the fake data
// import CardsData from '../../cardData';
import SearchCard from "./SearchCard";
import createCard from "../../images/cards_page/create_card@2x.png";
import Card from "./Card.jsx";
import Layout from "../../components/Layout/Layout";

const CardsPage = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  let [cardsData, setCards] = useState();

  let id = context.userId;

  useEffect(() => {
    fetch(`http://localhost:3306/cards/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, [id]);

  const handleCardSelectClick = (id) => {
    console.log(id);
    if (id === 3999) {
      navigate("/cards/newcard");
    } else {
      navigate(`/cards/individual/card/${id}`);
    }
  };

  return (
    <Layout title="Cards" extraControls={
      <SearchCard />
    }>
      <div id="cardsPage">
        <div className="CP_cards">
          {cardsData ? (
            <>
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  colour={card.colour}
                  className={"cards_page_card"}
                  id={card.id}
                  type={card.type}
                  img={workImg}
                  action={() => handleCardSelectClick(card.id)}
                />
              ))}
            </>
          ) : null}
          <div>
            {/* <div className='position'> */}
            <Card
              img={createCard}
              id={3999}
              className={"cards_page_card"}
              // FIXME: we need text for accessibility: type={"Add Card"}
              action={() => handleCardSelectClick(3999)}
            />
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
    </Layout>
  );
};

export default CardsPage;
