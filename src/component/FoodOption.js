import {imageGridCards} from "../Utils/FoodData"
import Foodcard from "./Foodcard"

export default function FoodOption(){
    return(
        <>
        <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
        {
            imageGridCards.map((foodDetails) => <Foodcard key={foodDetails.id} foodDetails={foodDetails}></Foodcard>)
        }
         </div>
        </>
       
    )
}