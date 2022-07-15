import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FullCard from "./FullCard";
import "./IndividualCardPage.css";


const IndividualCard = () => {
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


    return (
        <div className="individual-card-page-container">
            <p>This is the individual contact card page</p>
            <p>Card ID: {id}</p>
            <>
            {cardData ? 
            <>
            <p>First Name: {cardData[0].first_name}</p>
            <p>Second Name: {cardData[0].second_name}</p>
            </>
            :
            null
            }
            </>
            <FullCard />
        </div>
    )
}

export default IndividualCard; 