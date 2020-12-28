import React from "react";

// we assume `products` is an array of products
function renderProducts(products) {
  let jsx = [];
  for (let p of products) {
    jsx.push(
      <React.Fragment>
        <li>
          {p.name} ({p.sku}) : ${p.price}
        </li>
      </React.Fragment>
    );
  }

  return jsx;
}

export default function Catalog(props) {
  return <React.Fragment>
      {renderProducts(props.products)}
  </React.Fragment>;
}
