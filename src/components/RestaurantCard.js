import {useContext} from "react"
import { CDN_URL } from "../utils/constants"
 import UserContext from "../utils/UserContext"



const RestaurantCard = (props) => {
    const {cardDetails, } = props 

    const {userData} = useContext(UserContext)
    
    //console.log(cardDetails.info)
    const {name, cloudinaryImageId, avgRating, areaName, cuisines, deliveryTime} = cardDetails.info

    return (
      <div className="p-2 w-60 bg-gray-200 hover:bg-gray-400 m-2 shadow-md rounded-md">
        <img src = {CDN_URL + cloudinaryImageId}
        alt = "rest-logo"
        className="w-60 rounded-md pb-2" 
        />
        <h3 className="text-md py-2 font-bold">{name}</h3>
        <h4>{avgRating} Rating</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{deliveryTime}</h4>
        <h5>{areaName}</h5>
        <h2>User : {userData}</h2>
      </div>
    )
  }

  export const withPromotedLable = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute px-2 py-1 m-2 bg-black text-white rounded-md">Promoted</label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };

  export default RestaurantCard