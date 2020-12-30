import React, {useContext} from 'react'
import ProductContext from '../ProductContext'

export default function ProductListing() {
    const context = useContext(ProductContext);
    return <React.Fragment>
        <h1>Product Listing</h1>
        <table className="table">
            <tr>
                <th>
                    SKU
                </th>
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
            </tr>

            {context.products.map(p=>(
                <tr>
                    <td>
                        {p.sku}
                    </td>
                    <td>
                        {p.name}
                    </td>
                    <td>
                        {p.price}
                    </td>
                </tr>

            ))}
        </table>

    </React.Fragment>

}