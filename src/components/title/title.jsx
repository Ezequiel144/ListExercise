import React from "react";
import './title.css';

export function Title(props){
    return(
        <section className="content">
            <h1 className="title">Welcome {props.name}</h1>
            <p className="text-center textp">let's workout to get someone gains!</p>
        </section>
    )
}