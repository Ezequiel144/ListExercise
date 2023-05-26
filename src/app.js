import React from "react";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { PagesOne } from "./pages/pagesOne";
import { PagesForm } from "./pages/pagesForm.js";
import { NotFound } from './pages/notFound.js';

export function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={PagesOne}/>
                <Route exact path="/formulario" Component={PagesForm}/>
                <Route path="*" Component={NotFound}></Route>
            </Routes>
        </BrowserRouter>
    )
}