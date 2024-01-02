import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"

import {useParams} from "react-router-dom"

import Shimmer from "./Shimmer"
import { useState } from "react"


const RestaurantMenu = () => {

    const {id } = useParams()

    const restMenu = useRestaurantMenu(id);

    const [cardIndex, setCardIndex] = useState(null)

    
    

    if(restMenu === null) return <Shimmer />;

    const {name,city,cuisines} = restMenu?.cards[0]?.card?.card?.info
    //const {itemCards} = restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    const categories = restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((each) => 
    each?.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(categories)

 


    return (
        <div className="text-center  py-4">
            <h1 className="font-bold text-xl">{name}</h1>      
            <h3 className="font-bold text-sm">{city}</h3>
            <span className="text-xs font-bold">{cuisines.join(" ,")}</span>
            <div className="">
                {categories.map((each, index) => (
                    <RestaurantCategory
                     key = {each.card.card.title}
                     showItemCard = {index === cardIndex && true}
                     setCardIndex = {() => setCardIndex(index)}
                      data = {each} />
                ))}
            </div>
        </div>
    )
}
export default RestaurantMenu