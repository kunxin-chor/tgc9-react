import React, { useState, useContext } from "react";
import ProductContext from "../ProductContext";

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    sku: "",
    name: "",
    price: 0,
    imageUrl: ""
  });

  const context = useContext(ProductContext);

  const updateFormField = event => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value
    });
  };

  const processAddProduct = () => {
    context.addNewProduct({ ...newProduct });
    setNewProduct({
      sku: "",
      name: "",
      price: 0,
      imageUrl: ""
    });
  };

  return (
    <React.Fragment>
      <h1>Add Product</h1>
      <div>
        <label className="form-label">SKU</label>
        <input
          type="text"
          className="form-control"
          name="sku"
          value={newProduct.sku}
          onChange={updateFormField}
        />
      </div>
      <div>
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={newProduct.name}
          onChange={updateFormField}
        />
      </div>
      <div>
        <label className="form-label">Price</label>
        <input
          type="text"
          className="form-control"
          name="price"
          value={newProduct.price}
          onChange={updateFormField}
        />
      </div>
      <div>
        <label className="form-label">Image URL</label>
        <input
          type="text"
          className="form-control"
          name="imageUrl"
          value={newProduct.imageUrl}
          onChange={updateFormField}
        />
      </div>
      <button className="btn btn-primary" onClick={processAddProduct}>
        Add
      </button>
    </React.Fragment>
  );
}
