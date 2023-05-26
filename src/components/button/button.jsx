import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

export function Button(){
    return(
        <div className='content-button'>
            <Link className="button" to={'/formulario'}>+</Link>
        </div>
    )
}