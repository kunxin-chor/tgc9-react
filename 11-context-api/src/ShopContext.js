import React from 'react';

const context = React.createContext({
    products: [],
    cartItems:[],
    addToCart: (product)=> {

    },
    newProduct:{
        _id: 0,
        imageUrl:"",
        name:"",
        sku:"",
        price:0
    },
    addNewProduct:(newProduct) => {}
  
})

export default context;