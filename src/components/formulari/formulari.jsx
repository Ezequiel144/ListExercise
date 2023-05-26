import React, { UseState } from "react";
import './formulari.css';


const handleChange = e => {
    console.log(`${e.target.name}:${e.target.value}`);
    const [State, SetState] = UseState('');
    SetState(State + e.target.value); 
    console.log(State);
}

const handleSendFrom = e => {
    e.preventDefault();
}

export function Formulari(){

    return(
        <form className="formMain" onChange={handleSendFrom}>
            <label htmlFor="Exercise" className="textInput">Title</label>
            <input type="text" id="Excercise" className="inputGet" name='titulo' onChange={handleChange}/>
            <label htmlFor="descrip" className="textInput">Description</label>
            <input type="text" id="descrip" className="inputGet" name="description" onChange={handleChange}/>
            <label htmlFor="img" className="textInput">imagen</label>
            <input type="text" id="img" className="inputGet" name="imge" onChange={handleChange}/>
            <label htmlFor="color" className="textInput">Color</label>
            <input type="text" id="color" className="inputGet" name="color" onChange={handleChange}/>
            <input type="submit" className="sendButton" name="submitButton" />
            {/* <textarea name="descrip" id="descrip" cols="30" rows="10" /> */}
        </form>
    )
}