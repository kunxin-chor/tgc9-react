import React from 'react'
import ShopContext from './ShopContext'
import Catalog from './Catalog'
import axios from 'axios'
export default class Shop extends React.Component {
    state = {
        products:[]
    }

    async componentDidMount() {
        let response = await axios.get('products.json');
        this.setState({
            products: response.data
        })
    }

    render() {
        return (
        <React.Fragment>
            <ShopContext.Provider value={this.state}>
                <div className="container">
                    <h1>Welcome to our OnlineStore(tm)!</h1>
                </div>
                <Catalog/>
            </ShopContext.Provider>

        </React.Fragment>
        )

    }
}