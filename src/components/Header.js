import { APP_LOGO } from "../utils/constants"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { useContext, useState } from "react"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"



const Header = () => {
  const [btnName, setBtnName] = useState("Login")

  const onlineStatus = useOnlineStatus();

  const {userData} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)


  return(
    <div className="flex align-middle justify-between shadow-lg p-8 ">
      <img src = {APP_LOGO}
      alt = "app-logo"
      className="w-20"
      />
      <ul className="flex align-middle">
        <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
        <Link className="" to = "/">
        <li className="mx-4">Home</li>
        </Link>
        <Link className="link-item" to = "/about">
        <li className="mr-4">About</li>
        </Link>
        <Link className="link-item" to = "/contact">
        <li className="mr-4">Contact Us</li>
        </Link>
        <Link className="link-item" to = "/grocery">
        <li className="mr-4">Grocery</li>
        </Link>
        <Link to = "/cart">
        <li className="mr-4 font-bold text-lg">Cart - ({cartItems.length} items)</li>
        </Link>
        <div>
        <button className="bg-blue-100 rounded-md px-4 py-1" type = "button" onClick={() => {
          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
        }}>
          {btnName}
        </button>
        </div>
        <li className="mx-4 font-bold text-lg">User: {userData}</li>
      </ul>
    </div>
  )
}

export default Header