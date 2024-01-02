import { useState, useEffect, useContext } from "react"
import RestaurantCard, {withPromotedLable} from "./RestaurantCard"
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"


const Body = () => {
    const [restCards, setRestCards] = useState([]);

    const [filteredCards, setFilteredCards] = useState([])

    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, []);


    const {userData, setUserName} = useContext(UserContext);
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const response = await data.json()
        // optional chaining 
        const restaurants = response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        
        setRestCards(restaurants) 
        setFilteredCards(restaurants)         
    };


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <h2>Seems like you are offline!! please check your internet connection.</h2>
    }

    const RestaurantPromotedCard = withPromotedLable(RestaurantCard)

    return  restCards.length === 0 ? ( <Shimmer />) : (
        <div className="p-8">
            <div className="flex align-middle">
                <div className="mr-5">
                    <input className="border border-solid border-black rounded-lg" type = "text" value = {searchText}  onChange = {(event) => {
                        setSearchText(event.target.value)
                    }}/>
                    <button className="bg-blue-100 px-4 py-1 rounded-lg " type = "button" onClick = {() => {
                        setFilteredCards(() => restCards.filter((eachCard) => eachCard.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }}>search</button>
                </div>
                <div>
                <button className="bg-green-500 px-4 py-1 rounded-lg" type = "button" onClick={() => (
                    setFilteredCards(() => restCards.filter((each) => each.info.avgRating > 4.0))
                )}>Top Rated Restaurants</button>
                </div>
                <div className="ml-4">
                    User : <input className="border border-solid border-black rounded-lg px-2" value = {userData}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
                </div>
            </div>
            <div className="flex flex-wrap">
            {filteredCards.map((each) => (
                <Link className="link-item" key ={each.info.id} to = {"/restaurant/" + each.info.id}>
                    {
                        each.info.avgRating >= 4.3 ? (<RestaurantPromotedCard cardDetails = {each} />) : (
                            <RestaurantCard   cardDetails = {each} />
                        )
                    }   
                </Link>
            ))}
            </div>
        </div>
    )

}


export default Body