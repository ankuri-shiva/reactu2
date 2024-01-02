import { useSelector, useDispatch } from "react-redux"
import AddedToCart from "./AddedToCart"
import {clearCart} from "../utils/cartSlice"




const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items)
    console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());

    };

    return (
        <div className="p-10 m-10 text-center">
            <h1 className="font-bold text-xl">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="bg-black text-white rounded-md px-2"
            onClick = {() => handleClearCart()}
            >Clear Cart</button>
            {cartItems.length > 1 && (
                cartItems.map((each) => (
                    <AddedToCart cartDetails = {each} key = {each.card.info.id} />
                ))
            ) }
            </div>
        </div>
    )
}

export default Cart 