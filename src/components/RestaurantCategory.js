//import { useState } from "react"
import ItemCard from "./ItemCard"
const RestaurantCategory = ({data, showItemCard, setCardIndex}) => {
    //const [showItemCard, setShowItemCard] = useState(false)

    const onClickItemCard = () => {
        setCardIndex()
    }

    return (
        <div className="cursor-pointer w-6/12 my-4 m-auto p-4 bg-green-100 rounded-md shadow-lg" onClick={onClickItemCard}>
            <div className="flex justify-between font-bold">
                <h1 className="py-2 my-2">{data.card.card.title}({data.card.card.itemCards.length})</h1>
            <   span className="py-2 my-2">⬇</span>
            </div>
                { showItemCard && data.card.card.itemCards.map((each) => {
                    return (
                        <ItemCard key = {each.card.info.id} cardDetails = {each} />
                    )
                })}      
        </div>
    )
}

export default RestaurantCategory