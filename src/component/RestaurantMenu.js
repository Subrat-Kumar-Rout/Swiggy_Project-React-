import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


export default function RestaurantMenu(){
    const {id} = useParams();

    const [ResData,SetResData] = useState(null);

    useEffect(()=>{
            async function fetchData() {
                const proxyServer =  "https://cors-anywhere.herokuapp.com/";
                const swiggyapi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2706&lng=85.8334&restaurantId=${id}`;
                const response = await fetch(proxyServer+swiggyapi);
                const data = await response.json();
                SetResData(data);
            }
             fetchData();
        },[]);

            console.log(ResData);
        
    return(
        <>
        <h1>Hello World</h1>
        <div>{id}</div>
        </>
    )
}