import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../context/MyProvider';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FullCard from "./FullCard";
import "./IndividualCardPage.css";



const IndividualCard = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate();

    let [cardData, setCardData] = useState();


    //! It has to be called exactly the same as defined in the path(App.js)
    let { id } = useParams();

    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:3306/api/individual/card/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setCardData(data);
            console.log(data);
        });
    }, [id]);

    const handleClickEditCard = () => {
        console.log("clicked");
        // context.handleCreateNewCardForm(cardData[0]);
        context.setCrtCard({...cardData[0]});
        context.setEditCard(true);
        navigate('/cards/newcard');
    };

    const handleClickConnectContact = () => {
        console.log("Connecting");
    };

    return (
        <div className="individual-card-page-container">
            <p>This is the individual contact card page</p>
            <p>Card ID: {id}</p>
            <>
                {cardData ? 
                <FullCard first_name={cardData[0].first_name} last_name={cardData[0].last_name}/>
                :
                null
                }
            </>
            {(cardData) ? 
                    (cardData[0].users_id === context.userId) ? 
                    <div>
                        <p>This is the users card you can edit it below</p>
                        <button onClick={handleClickEditCard}>Edit Me</button>
                    </div>
                    :
                    <div>
                       <p>This is not the users card you can add as contact</p>
                       <button onClick={handleClickConnectContact}>Connect</button> 
                    </div>
                    :
                    null
                    }
        </div>
    )
}

export default IndividualCard; 