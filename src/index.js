/* const root = document.getElementById('root');

const element = document.createElement('h1');

element.textContent = 'hola';

root.append(element); 

#como ejemplo
*/

import React from 'react';
import ReactDOM from 'react-dom';
/* import { Card } from './components/card/card.jsx' */
/* import { PagesOne } from './pages/pagesOne.js'; */
import { App } from './app.js';
import './index.css';

const root = document.getElementById('root');
/* const elem = <h2>Hola React</h2> */
/* ReactDOM.render(_QUE_,_DONDE_); */

/* ReactDOM.render(<PagesOne/>,root); */

ReactDOM.render(<App/>,root);