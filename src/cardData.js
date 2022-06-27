import cardWork from '../src/images/cards_page/card_work@2x.png';
import cardPersonal from '../src/images/cards_page/card_personal@2x.png';
import createCard from '../src/images/cards_page/create_card@2x.png';
import React, {Link} from 'react';

const CardsData = [
 
    {
        "id": 1,
        "name": "Work",
        "image": cardWork,
        "imgAlt": "Work card image",
        "address": "#"
    },
    {
        "id": 2,
        "name": "Personal",
        "image": cardPersonal,
        "imgAlt": "Personal card image",
        "address": "#"
    },

    {
    
        "id": 3,
        "name": "Add Card",
        "image": createCard,
        "imgAlt": "Add card image",
        "address": "/cards/newcard"
    } 
]

export default CardsData;