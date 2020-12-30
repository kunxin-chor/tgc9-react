import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import ProductContext from '../ProductContext';


export default function ProductDetails() {
    const params = useParams();
    const productId = parseInt(params.product_id);
    const context = useContext(ProductContext);
    const product = context.products.find((p)=>p._id === productId);
    console.log(product)

    return <React.Fragment>
        <h1>Product Details</h1>
        <img src={product.imageUrl}/>
        <ul>
            <li>Name: {product.name}</li>
            <li>SKU: {product.sku}</li>
            <li>Price: {product.price}</li>
        </ul>

    </React.Fragment>

}