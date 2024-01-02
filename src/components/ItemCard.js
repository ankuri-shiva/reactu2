import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"
import {CDN_URL} from "../utils/constants"
const ItemCard = (props) => {
    const {cardDetails} = props
    //console.log(cardDetails.card.info.name)

    const dispatch = useDispatch();

    const handleAddItem = (cardDetails) => {
        dispatch(addItem(cardDetails));
    }

    return (
        <div className="flex justify-between align-middle my-4 border-b shadow-lg p-4">
        <div className="text-left">
            <h1 className="text-md">{cardDetails.card.info.name}</h1>
            <h1 className="text-sm py-2">Rs-{cardDetails.card.info.price/100}/</h1>
            <p className="text-xs">{cardDetails.card.info.description}</p>
        </div>
        <div>
            <button className="bg-black text-white rounded-md px-2 absolute" 
            onClick={() => handleAddItem(cardDetails)}
            >Add +</button>
            <img src = {CDN_URL + cardDetails.card.info.imageId} alt = "resImage" className="w-20 rounded-md" />
        </div>
        </div>
    )
}

export default ItemCard