import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import FoodOption from "./component/FoodOption";
import Groceryoption from "./component/GroceryOption"


function Main(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <Groceryoption></Groceryoption>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);