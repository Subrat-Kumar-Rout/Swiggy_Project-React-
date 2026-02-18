import { DineOption } from "./DineOption";


export function DineCard({value}){
    return(
        <div className="shrink-0 w-80">
        <img className="w-full h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ value?.info?.mediaFiles[0]?.url}></img>
        </div>
    )
}