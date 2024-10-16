import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Clock from "./Components/Clock";

export default function App(){

    return(
        <BrowserRouter >
            <Routes>
                <Route exact path="/" element={<Clock />}/>
                <Route exact path = "*" element={<ErrorPage />}/>
                <Route />
            </Routes>
        </BrowserRouter >
    )
}


