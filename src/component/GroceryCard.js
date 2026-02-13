import Groceryoption from "./FoodOption"

export default function Grocerycard({imgdata}){
return(
    <>
    
    <div className="flex-shrink-0 w-36 md:w-40 transition-transform hover:scale-105" >
        <a href={imgdata?.action?.link}>
            
                <img className="w-full h-full object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ imgdata?.imageId}></img>
            
         
    </a>
    <h2 className="text-center mt-2 text-sm font-semibold whitespace-normal break-words w-full">
    {imgdata?.action?.text}
</h2>
   
    </div>
    </>
)
}


