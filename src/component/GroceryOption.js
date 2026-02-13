import {imageGridCard} from "../Utils/Grocery"
import Grocerycard from "./GroceryCard"

export default function Groceryoption(){
return(
    <>
    <h1 className="mt-20 font-bold">Shop groceries on Instamart</h1>
    <div className="w-[80%] container mx-auto flex flex-wrap mt-5 gap-3  ">
    {
        imageGridCard.map((imgdata)=> <Grocerycard key={imgdata.id} imgdata={imgdata}> </Grocerycard>  )
    }
    </div>
    </>
)
}
