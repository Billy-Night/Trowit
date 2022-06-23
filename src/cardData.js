import cardWork from '../src/images/cards_page/card_work@2x.png';
import cardPersonal from '../src/images/cards_page/card_personal@2x.png';
import createCard from '../src/images/cards_page/create_card@2x.png';
import React, {Link} from 'react';

const CardsData(props) {
    return (
    <>

    <Link to={props.path}>
        <img className='Work'
        alt="Work card image"
        src="cardWork"/>
    </Link>
    {
        "id": 1,
        "name": "Work",
        "image": cardWork,
        "imgAlt": "Work card image"
    },
    {
        "id": 2,
        "name": "Personal",
        "image": cardPersonal,
        "imgAlt": "Personal card image"
    },

    {
    
        "id": 2,
        "name": "Add Card",
        "image": createCard,
        "imgAlt": "Add card image"
    }
    </>
    ); 
}


export default CardsData;