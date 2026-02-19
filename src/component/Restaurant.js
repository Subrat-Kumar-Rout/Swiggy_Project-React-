import { useState,useEffect } from "react";
import RestCard from "./RestCard";

export default function Restaurant(){
    const [resdata,Setresdata] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const proxyServer =  "https://cors-anywhere.herokuapp.com/";
            const swiggyapi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2706&lng=85.8334&is-seo-homepage-enabled=true"
            const response = await fetch(proxyServer+swiggyapi);
            const data = await response.json();
           
            Setresdata(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
         fetchData();
    },[]);

    
  

     return (
            <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
                
                {
                    resdata.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
                }
    
            </div>
        )

}





