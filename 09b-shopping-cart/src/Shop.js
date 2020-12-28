import React from "react";
import axios from "axios";
import Catalog from "./Catalog";
import ShoppingCart from "./ShoppingCart";

export default class Shop extends React.Component {
  state = {
    products: [],
    cartItems: [],
    newProductSku: "",
    newProductName: "",
    newProductPrice: 0.0
  };
  // componentDidMount is called after the first render
  async componentDidMount() {
    let response = await axios.get("products.json");
    this.setState({
      products: response.data
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>My Shop</h1>
          <div className="row">
            <div class="col">
              <Catalog
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </div>
            <div class="col">
              <ShoppingCart cartItems={this.state.cartItems} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  addToCart = product => {
    this.setState({
      cartItems: [...this.state.cartItems, product]
    });
  };
}
