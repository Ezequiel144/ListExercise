import React from "react";
import {Card} from '../components/card/card.jsx';
import {Title} from '../components/title/title.jsx';
/* import data from "../../public/carddata.json"; */
import imgOne from '../asset/img/fitness-g7fba0b93a_1280.png';
import imgTwo from '../asset/img/calistenic-removebg-preview.png';
import imgThree from '../asset/img/chica-haciendo-ejercicios-icono-de-estilo-de-dibujos-animados-hw3drh-removebg-preview.png';
import {Button} from '../components/button/button.jsx';


const listCard = [
    {
        "id":1,
        "title":"Technique Guides",
        "text":"Learn amazing street workout and calisthenics",
        "color":"#48CAE4",
        "img":imgThree
    },
    {
        "id":2,
        "title":"Skills Training",
        "text":"Learn amazing street workout and calisthenics",
        "color":"#D84797",
        "img":imgTwo
    },
    {
        "id":3,
        "title":"Strength Training",
        "text":"Learn amazing street workout and calisthenics",
        "color":"#26FFE6",
        "img":imgOne
    }
];

export function PagesOne(){
    return(
        <div className="app">
            <Title
                name='Ezequiel'
            /> 
            {
                listCard.map(element => {
                    return(<Card
                        title={element.title}
                        text={element.text}
                        imgCard= {element.img}
                        color={element.color}
                    />)
                })
            }
            <Button/>
        </div>
    )
}