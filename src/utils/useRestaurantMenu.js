import { useEffect, useState } from "react";
import {MENU_URL} from "./constants"



const useRestaurantMenu = (id) => {
    [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    fetchData = async () => {
        const response = await fetch(MENU_URL + id)
        const data = await response.json()
        
        setResInfo(data?.data)
    }

    return resInfo;
}

export default useRestaurantMenu