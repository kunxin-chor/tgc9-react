import React from "react";
import CartItem from "./CartItem";

export default function ShoppingCart(props) {
  return (
    <React.Fragment>
        <h1>Shopping Cart</h1>
      {props.cartItems.map(cartItem => (
        <CartItem product={cartItem} />
      ))}
    </React.Fragment>
  );
}
