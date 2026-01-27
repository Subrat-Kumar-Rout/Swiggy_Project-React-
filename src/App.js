import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";


function Main(){
    return(
        <>
        <Header></Header>
        <h1>hello</h1>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);