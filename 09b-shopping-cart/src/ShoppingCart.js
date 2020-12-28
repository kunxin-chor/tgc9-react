import React from "react";
import CartItem from "./CartItem";

export default function ShoppingCart(props) {
  return (
    <React.Fragment>
      <h1>Shopping Cart</h1>
      <ul className="list-unstyled">
        {props.cartItems.map(cartItem => (
          <li className="media">
            <CartItem product={cartItem} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
