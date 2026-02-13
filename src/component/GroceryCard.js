import Groceryoption from "./FoodOption"

export default function Grocerycard({imgdata}){
return(
    <>
    
    <div >
        <a href={imgdata?.action?.link}>
         <img className="w-36 h-45" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ imgdata?.imageId}></img>
    </a>
   <h2>{imgdata?.action?.text}</h2>
    </div>
    </>
)
}
