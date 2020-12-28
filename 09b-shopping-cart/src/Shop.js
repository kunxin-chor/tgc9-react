import React from "react";
import axios from "axios";
import Catalog from "./Catalog";

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
              <h1>My Shop</h1>
              <Catalog products={this.state.products}/>
          </React.Fragment>
      )
  }
}
