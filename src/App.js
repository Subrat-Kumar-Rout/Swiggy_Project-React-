import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home"
import Restaurant from "./component/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";

function Main(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurants" element={<Restaurant></Restaurant>}></Route>
            <Route path="/city/bhubaneswar/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);