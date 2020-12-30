import React, {useContext} from 'react'
import ShopContext from './ShopContext'

export default function ShoppingCart() {
    
    const context = useContext(ShopContext)
    return <React.Fragment>
        <h2>Shopping Cart</h2>
        <ul>
        {
            context.cartItems.map(c => <li>{c.name}</li>)
        }
        </ul>
    </React.Fragment>
}