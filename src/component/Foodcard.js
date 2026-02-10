import FoodOption from "./FoodOption"


export default function Foodcard({foodDetails}){
    return(
        <>
        <a href={foodDetails?.action?.link}>
            <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodDetails?.imageId}></img>
        </a>
        
        </>
    )
}