import React from 'react'

export default function Product(props) {
    return (
    <React.Fragment>
        <div class="card mb-3" style={{width: '18rem'}}>
          <div class="card-body">
            <img class="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <h5 class="card-title">{props.name}</h5>
            <div class="card-text">
                <ul>
                    <li>SKU: {props.sku}</li>
                    <li>Price: {props.price}</li>
                </ul>
            </div>
            <a href="#" class="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </React.Fragment>)
}