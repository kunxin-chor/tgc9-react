import React from "react";

// we assume `products` is an array of products
function renderProducts(products) {
  let jsx = [];
  for (let p of products) {
    jsx.push(
      <React.Fragment>
        <div class="card" style={{width: '18rem'}}>
          <div class="card-body">
            <img class="card-img-top" src={"dummy.jpg"} alt="Card image cap" />
            <h5 class="card-title">{p.name}</h5>
            <div class="card-text">
                <ul>
                    <li>SKU: {p.sku}</li>
                    <li>Price: {p.price}</li>
                </ul>

            </div>
            <a href="#" class="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return jsx;
}

export default function Catalog(props) {
  return <React.Fragment>{renderProducts(props.products)}</React.Fragment>;
}
