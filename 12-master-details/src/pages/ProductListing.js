import React, {useContext} from 'react'
import ProductContext from '../ProductContext'

export default function ProductListing() {
    const context = useContext(ProductContext);
    return <React.Fragment>
        <h1>Product Listing</h1>
    </React.Fragment>

}