import React, {useContext} from 'react'
import ShopContext from './ShopContext'
import Product from './Product'

export default function Catalog() {
    const context = useContext(ShopContext);
    return <React.Fragment>
            <h2>Catalog</h2>
            {context.products.map(p=>
                <Product
                    name={p.name}
                    imageUrl={p.imageUrl}
                    sku={p.sku}
                    price={p.price}
                    id={p._id}
                />)}
    </React.Fragment>

}