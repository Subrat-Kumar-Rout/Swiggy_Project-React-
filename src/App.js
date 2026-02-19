import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import FoodOption from "./component/FoodOption";
import Groceryoption from "./component/GroceryOption"
import { DineOption } from "./component/DineOption";
import Restaurant from "./component/Restaurant";



function Main(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <Groceryoption></Groceryoption>
        <DineOption></DineOption>
        <Restaurant></Restaurant>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);