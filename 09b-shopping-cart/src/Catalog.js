import React from "react";
import Product from "./Product";

// we assume `products` is an array of products
function renderProducts(products, addToCart) {
  let jsx = [];
  for (let p of products) {
    jsx.push(
      <Product
        imageUrl={p.imageUrl}
        name={p.name}
        sku={p.sku}
        price={p.price}
        addToCart={addToCart}
        id={p._id}
        key={p._id}
      />
    );
  }

  return jsx;
}

export default function Catalog(props) {
  return (
    <React.Fragment>
      <h1>Catalog</h1>

      {renderProducts(props.products, props.addToCart)}
    </React.Fragment>
  );
}
