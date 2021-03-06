import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context/MyProvider";
import { useNavigate } from 'react-router-dom';
import "./OrderCard.css";
import SideNavBar from "../../components/Side_NavBar/SideNavBar";
import OderCardTemplate from "./OderCardTemplate";
import OderCardBusinessTemplate from "./OderCardBusinessTemplate";
import Card from "../Cards_Page/Card";
import workImg from "../../images/cards_page/card_work@2x.png";
import Layout from "../../components/Layout/Layout";

const OrderCard = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);

  let [cardsData, setCards] = useState();
  let [selectedCardId, setSelectedCardId] = useState();
  let [selectedCardIndex, setSelectedCardIndex] = useState();
  let [cardSelected, setCardSelected] = useState(false);

  let userId = context.userId;

  useEffect(() => {
    fetch(`http://localhost:3306/cards/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, [userId]);

  const handleCardSelectClickOC = (id) => {
    setSelectedCardId(id);
    let index = cardsData.findIndex((e) => e.id === id);
    console.log(index);
    setSelectedCardIndex(index);
    setCardSelected(!cardSelected);
    console.log(`Selected card id: ${selectedCardId}`);
  };

  // const handleOrderPlanSelected = (type) => {
  //  fetch('http://localhost:3306/api/order/physical/card', {
  //   method: "POST",
  //   headers: new Headers({
  //     "Content-Type": "application/json",
  //   }),
  //   body: JSON.stringify({
  //     plan: type,
  //     users_id: userId,
  //   }),
  //  })
  //  .then((res) => {
  //   if (res.status === 200) {
  //     console.log("Plan selected and added to order");
  //     navigate('/');
  //   } else {
  //     console.log("There was an error adding the plan to order")
  //   }
  //  });
  // };

  const handleOrderPlanSelected = (type) => {
  console.log(type);
    if (type === "basic") {
      // console.log("Clicked Basic");
      navigate(`/order/card/${type}`)
    } else if (type === "customized") {
      // console.log("Clicked Customized");
      navigate(`/order/card/${type}`)
    } else if (type === "premium") {
      // console.log("Clicked Premium");
      navigate(`/order/card/${type}`)
    }
  };

 

  return (
    <Layout title="Order physical card">
      <div id="order-card">
        <div className="OC__main-container">
          {/* second part in the page  */}
          <div className="OC__sub-container2__sub-title-and-preview-cards">
            <h2 className="OC__sub-container2__sub-title">Select your card:</h2>
            <div className="OC__sub-container2__preview-cards">
              {cardsData ? (
                cardSelected ? (
                  <>
                    <Card
                      colour={cardsData[selectedCardIndex].colour}
                      id={cardsData[selectedCardIndex].selectedCardId}
                      type={cardsData[selectedCardIndex].type}
                      img={workImg}
                      className={"OC__sub-container2__single-card"}
                      action={() =>
                        handleCardSelectClickOC(cardsData[selectedCardIndex].id)
                      }
                    />
                  </>
                ) : (
                  <>
                    {cardsData.map((card, index) => (
                      <div>
                        <Card
                          key={index}
                          colour={card.colour}
                          id={card.id}
                          type={card.type}
                          img={workImg}
                          className={"OC__sub-container2__single-card"}
                          action={() => handleCardSelectClickOC(card.id)}
                        />
                      </div>
                    ))}
                  </>
                )
              ) : null}
              {/* <div className="OC__sub-container2__single-card">
              <p className="OC__sub-container2__preview-card-category">
                Personal
              </p>
            </div> */}
            </div>
          </div>
          {/* third part in the page  */}
          <div className="OC__sub-container3__price-cards">
            <OderCardTemplate
              header="Basic"
              cta="Choose from our 5 business card designs!"
              benefit1="??? NFC connectivity"
              benefit2="??? Lasting material"
              benefit3="- TROWIT watermark"
              price="???10"
              fee="shipping fees"
              button="order"
              type="basic"
              action={handleOrderPlanSelected}
            />
            <OderCardTemplate
              header="Customized"
              cta="Upload your own design and customize your card!"
              benefit1="??? NFC connectivity"
              benefit2="??? Lasting material"
              benefit3="??? No watermark"
              price="???20"
              fee="shipping fees"
              button="order"
              type="customized"
              action={handleOrderPlanSelected}
            />
            <OderCardTemplate
              header="Premium"
              cta="Send us the details, and we???ll design your card!"
              benefit1="??? NFC connectivity"
              benefit2="??? Lasting material"
              benefit3="??? No watermark"
              price="???30"
              fee="shipping fees"
              button="order"
              type="premium"
              action={handleOrderPlanSelected}
            />
            <OderCardBusinessTemplate
              header="Business"
              cta1="Do you want to order TROWIT Business Cards for the whole team?"
              cta2="Get in touch for a personalized quote!"
              button="Contact Sales"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderCard;
