import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ProductContext from "../ProductContext";

export default function UpdateProduct() {
  const params = useParams();
  const productId = params.product_id;
  const context = useContext(ProductContext);
  const product = context.findProduct(productId);
  const history = useHistory();
 
  const [productState, setProductState] = useState({
    _id: product._id,
    sku: product.sku,
    name: product.name,
    imageUrl: product.imageUrl,
    price: product.price
  });

  const updateFormField = (event) => {
      setProductState({
          ...productState,
          [event.target.name] : event.target.value
      })
  }

  const update = () => {
      context.updateProduct({...productState});
      history.push('/');
  }

  return (
    <React.Fragment>
      <h1>Update Product</h1>
      <div>
        <label className="form-label">Product SKU</label>
        <input
          type="text"
          name="sku"
          value={productState.sku}
          onChange={updateFormField}
          className="form-control"
        />
      </div>
       <div>
        <label className="form-label">Product Name</label>
        <input
          type="text"
          name="name"
          value={productState.name}
          onChange={updateFormField}
          className="form-control"
        />
      </div>
       <div>
        <label className="form-label">Product Price</label>
        <input
          type="text"
          name="price"
          value={productState.price}
          onChange={updateFormField}
          className="form-control"
        />
      </div>

       <div>
        <label className="form-label">Product Image</label>
        <input
          type="text"
          name="imageUrl"
          value={productState.imageUrl}
          onChange={updateFormField}
          className="form-control"
        />
      </div>
      <button onClick={update}>Update</button>
    </React.Fragment>
  );
}
