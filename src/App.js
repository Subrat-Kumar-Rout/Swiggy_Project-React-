import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import FoodOption from "./component/FoodOption";
import Groceryoption from "./component/GroceryOption"
import { DineOption } from "./component/DineOption";


function Main(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <Groceryoption></Groceryoption>
        <DineOption></DineOption>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);