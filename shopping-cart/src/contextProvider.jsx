import React, { createContext, useState } from "react";
import {PRODUCTS} from "./Products.jsx";

export const ShopContext = createContext(null);
const defaultCart = () => {
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1 ; i ++){
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(defaultCart);
    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}))
    }
    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1}))
    }
    const contextValue = {cartItems, addToCart, removeFromCart};
    console.log(cartItems);
    return (<ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>)
}