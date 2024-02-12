import { ShopContext } from "./contextProvider.jsx";
import {useContext} from "react";
import {Product} from "./Product.jsx";
import {PRODUCTS} from "./Products.jsx";
import {CartItem} from "./CartItem.jsx";
export const Cart = () => {
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);
    let subtotal = 0;
    for(const item in cartItems){
        if(cartItems[item] > 0){
            let itemInfo = PRODUCTS[item - 1];
            subtotal += itemInfo.price * cartItems[item];
        }
    }
    return (
    <div className = 'cart'>
        <div className = 'cartTitle'>
            <h1>Your Cart Items</h1>
        </div>
        <div className = 'cartItems'>
            {PRODUCTS.map((product) =>{ 
                if(cartItems[product.id] !== 0){
                    return <CartItem data = {product}/>
                }
            })}
        </div>
        <div className = 'subtotal'>
            <p>Subtotal: ${subtotal}</p>
        </div>
    </div>)
}