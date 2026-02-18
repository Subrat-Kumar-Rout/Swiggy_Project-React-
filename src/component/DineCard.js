import { DineOption } from "./DineOption";


export function DineCard({value}){
    return(
        <div className="shrink-0 w-80 relative">
        <img className="w-full h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ value?.info?.mediaFiles[0]?.url}></img>
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black/90 to-transparent"></div>
        <p className="absolute bottom-3 left-2 text-white font-bold text-lg drop-shadow-md truncate pr-2 ">{value?.info?.name}</p>
        <p className="absolute bottom-3 right-2 text-white font-bold text-lg drop-shadow-md truncate pr-2 ">{value?.info?.rating?.value}</p>
        
        </div>
    )
}