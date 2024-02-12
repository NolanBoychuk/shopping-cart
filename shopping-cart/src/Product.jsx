import { ShopContext } from "./contextProvider.jsx";
import {useContext} from "react";
export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    return <div className = 'product'>
        <img src={productImage} alt={productName} className = 'productImage'/>
        <div className = "description">
            <p>{productName}</p>
            <p>${price}</p>
        </div>
        <button className = "addCartButton" onClick = {() => addToCart(id)}>
            Add To Cart {cartItems[id] > 0 && <>{(cartItems[id])}</>}
        </button>
    </div>
};