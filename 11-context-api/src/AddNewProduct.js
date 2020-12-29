import React from "react";
import ShopContext from "./ShopContext";

export default class AddNewProduct extends React.Component {
  static contextType = ShopContext;
  state = {
    newProduct: {
      _id: 0,
      name: "",
      sku: "",
      price: 0,
      imageUrl: ""
    }
  };
  updateFormField = event => {
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [event.target.name]: event.target.value
      }
    });
  };
  addProduct = () => {
    this.context.addNewProduct({ ...this.state.newProduct });
    this.setState({
      newProduct: {
        _id: 0,
        name: "",
        sku: "",
        price: 0,
        imageUrl: ""
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <h2>Add New Product</h2>
        <div>
          <label className="form-label">SKU</label>
          <input
            type="text"
            name="sku"
            value={this.state.newProduct.sku}
            onChange={this.updateFormField}
            className="form-control"
          />
        </div>
        <div>
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.newProduct.name}
            onChange={this.updateFormField}
            className="form-control"
          />
        </div>
        <div>
          <label className="form-label">Price</label>
          <input
            type="text"
            name="price"
            value={this.state.newProduct.price}
            onChange={this.updateFormField}
            className="form-control"
          />
        </div>
        <div>
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.newProduct.imageUrl}
            onChange={this.updateFormField}
            className="form-control"
          />
        </div>
        <button onClick={this.addProduct} className="btn btn-primary">
          Save
        </button>
      </React.Fragment>
    );
  }
}
