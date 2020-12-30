import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductListing from "./pages/ProductListing";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import ProductContext from "./ProductContext"
import ProductDetails from "./pages/ProductDetails";

class App extends React.Component {
  state = {
    products: [],
    addNewProduct:(p) => {
        // add a new id to the product
        p._id = Math.floor(Math.random() * 10000);
        let cloned = [...this.state.products, p];
        this.setState({
            products: cloned
        })
    },
    findProduct:(productId) => {

        return this.state.products.find(p => p._id === parseInt(productId));
    },
    updateProduct:(product) => {
        const index = this.state.products.findIndex(p => p._id === product._id);
        this.setState({
            products: [...this.state.products.slice(0, index),
                       product,
                       ...this.state.products.slice(index+1)
            ]
        })
    }
  };
  async componentDidMount() {
    let response = await axios.get("/products.json");
    this.setState({
      products: response.data
    });
  }
  render() {
    return (
      <div className="container">
        <Router>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Product Listing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add_product">Add New</Link>
              </li>
            </ul>
          </nav>

          <ProductContext.Provider value={this.state}>  
          <Switch>
            <Route exact path="/">
              <ProductListing />
            </Route>
            <Route exact path="/add_product">
              <AddProduct />
            </Route>
            <Route exact path="/edit_product/:product_id">
              <UpdateProduct />
            </Route>
            <Route exact path="/product_details/:product_id">
              <ProductDetails/>
            </Route>
          </Switch>
          </ProductContext.Provider>
        </Router>
      </div>
    );
  }
}

export default App;
