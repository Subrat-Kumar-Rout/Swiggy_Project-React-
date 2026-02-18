import {restaurants} from "../Utils/DineData"
import {DineCard} from "./DineCard"


export function DineOption(){
return(
    <>
<h1 className=" max-w-[80%] mx-auto font-bold text-lg">Discover best restaurants on Dineout</h1>
<div className="flex gap-5 flex-nowrap overflow-x-auto p-4 max-w-[80%] mx-auto ">
{
    restaurants.map((data)=><DineCard key={data?.info?.id} value={data}></DineCard>)
}
</div>
</>
)
}