import {CDN_URL} from "../utils/constants"

const AddedToCart = (props) => {
    const {cartDetails} = props 
    return (
<div className="flex justify-between align-middle my-4 border-b shadow-lg p-4">
        <div className="text-left">
            <h1 className="text-md">{cartDetails.card.info.name}</h1>
            <h1 className="text-sm py-2">Rs-{cartDetails.card.info.price/100}/</h1>
            <p className="text-xs">{cartDetails.card.info.description}</p>
        </div>
        <div>
            <img src = {CDN_URL + cartDetails.card.info.imageId} alt = "restImage" className="w-20 rounded-md" />
        </div>
        </div>
    )
}

export default AddedToCart