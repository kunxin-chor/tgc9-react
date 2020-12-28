import React from 'react'

export default function Product(props) {
    return (
    <React.Fragment>
        <div className="card mb-3" style={{width: '18rem'}}>
          <div className="card-body">
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <h5 className="card-title">{props.name}</h5>
            <div className="card-text">
                <ul>
                    <li>SKU: {props.sku}</li>
                    <li>Price: {props.price}</li>
                </ul>
            </div>
            <button className="btn btn-primary" onClick={()=>{
                props.addToCart({
                    _id: props.id,
                    imageUrl: props.imageUrl,
                    name: props.name,
                    sku: props.sku,
                    price: props.price
                })
            }}>
              Add to Cart
            </button>
          </div>
        </div>
      </React.Fragment>)
}