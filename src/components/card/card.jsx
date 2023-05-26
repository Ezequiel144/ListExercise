import React from "react";
/* import imgFirst from '../../asset/img/fitness-g7fba0b93a_1280.png' */
import './card.css'

export function Card({imgCard,color,title,text}){
    return(
        <section className="card" style={{
            /* background: `linear-gradient(to right, rgba(206,140,224,1) 49%, rgba(182,91,187,1) 70%);` */
            backgroundColor: `${color}`
        }}>
            <div className="content-img">
                <img className="img-png" src={`${imgCard}`} alt="img"/>
            </div>
            <div>
                <h2 className="text-center">{title}</h2>
                <p className="text">{text}</p>
            </div>
        </section>
    )
}