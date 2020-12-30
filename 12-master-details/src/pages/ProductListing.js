import React, {useContext} from 'react'
import ProductContext from '../ProductContext'
import {Link} from 'react-router-dom'

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
                <th></th>
            </tr>

            {context.products.map(p=>(
                <tr>
                    <td>
                        {p.sku}
                    </td>
                    <td>
                        <Link to={"/product_details/" + p._id}>
                            {p.name}
                        </Link>
                    </td>
                    <td>
                        {p.price}
                    </td>
                    <td>
                        <Link className="btn btn-primary" to={'/edit_product/' + p._id}>Edit</Link>
                    </td>

                </tr>

            ))}
        </table>

    </React.Fragment>

}