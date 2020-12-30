import React from "react";
import ShopContext from "./ShopContext";
import Catalog from "./Catalog";
import axios from "axios";
import ShoppingCart from "./ShoppingCart";
export default class Shop extends React.Component {
  state = {
    products: [],
    cartItems: [],
    newProduct: {
      _id: 0,
      imageUrl: "",
      name: "",
      sku: "",
      price: 0
    },
    addToCart: product => {
      this.setState({
        cartItems: [...this.state.cartItems, product]
      });
    },
    addNewProduct: newProduct => {
      this.setState({
        products: [...this.state.products, newProduct]
      });
    }
  };

  async componentDidMount() {
    let response = await axios.get("products.json");
    this.setState({
      products: response.data
    });
  }

  render() {
    return (
      <React.Fragment>
        <ShopContext.Provider value={this.state}>
          <div className="container">
            <h1>Welcome to our OnlineStore(tm)!</h1>
          </div>
          <div class="row">
            <div class="col">
              <Catalog />
            </div>
            <div class="col">
              <ShoppingCart />
            </div>
          </div>
        </ShopContext.Provider>
      </React.Fragment>
    );
  }
}
