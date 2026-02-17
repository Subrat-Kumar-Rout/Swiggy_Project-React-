import {imageGridCard} from "../Utils/Grocery"
import Grocerycard from "./GroceryCard"

export default function Groceryoption(){
return(
    <>
    <div className="w-[80%] mx-auto mt-20 px-4">
    <h1 className="font-bold text-2xl mb-4">Shop groceries on Instamart</h1>
    <div className="container mx-auto flex mt-5 gap-10 overflow-x-auto overflow-y-hidden pb-8">
    {
        imageGridCard.map((imgdata)=> <Grocerycard key={imgdata.id} imgdata={imgdata}> </Grocerycard>  )
    }
    </div>
    <hr className="my-8 border-gray-200" />
    </div>
    </>
)
}
