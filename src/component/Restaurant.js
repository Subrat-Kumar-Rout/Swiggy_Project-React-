import { useState,useEffect } from "react";


export default function Resturant(){
    const [resdata,Setresdata] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const proxyServer = "https://thingproxy.freeboard.io/fetch/";
            const swiggyapi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2706&lng=85.8334&is-seo-homepage-enabled=true"
            const response = await fetch(proxyServer+swiggyapi);
            const data = await response.json();
            Setresdata(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }

        fetchData();
    },[])

    console.log(resdata);

   return(
      <h1>Check the Console for Data</h1>
   ) 
}