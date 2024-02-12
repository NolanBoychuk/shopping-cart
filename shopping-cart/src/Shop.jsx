import { PRODUCTS } from "./Products";
import {Product} from "./Product.jsx"
export const Shop = () => {
    return <div className = 'shop'>
        <div className = 'shopTitle'>
            <h1>My Shop</h1>
        </div>
        <div className = "products">
            {PRODUCTS.map((product) => (<Product data = {product}/>))}
        </div>
    </div>
}