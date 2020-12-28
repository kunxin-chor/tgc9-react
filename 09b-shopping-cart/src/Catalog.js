import React from "react";
import Product from "./Product"

// we assume `products` is an array of products
function renderProducts(products) {
  let jsx = [];
  for (let p of products) {
    jsx.push(
        <Product
            imageUrl = {p.imageUrl}
            name = {p.name}
            sku = {p.sku}
            price = {p.price}
        />
    );
  }

  return jsx;
}

export default function Catalog(props) {
  return <React.Fragment>{renderProducts(props.products)}</React.Fragment>;
}
