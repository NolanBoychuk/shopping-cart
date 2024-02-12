import { ShopContext } from "./contextProvider.jsx";
import {useContext} from "react";
export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);
    return <div className = 'cartItem'>
        <img src={productImage} alt={productName} className = 'productImage'/>
        <div className = "cartItemDescription">
            <p>{productName}</p>
            <p>${price}</p>
        </div>
        <div className = 'editItem'>
            <div>{cartItems[id]}</div>
            <div className = 'addRemove'>
                <button onClick = {() => addToCart(id)}>+</button>
                <button onClick = {() => removeFromCart(id)}>-</button>
            </div>
        </div>
    </div>
};