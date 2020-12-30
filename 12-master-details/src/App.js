import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  state = {
      products:[]
  }  
  async componentDidMount(){
    let response = await axios.get('products.json');
    this.setState({
        products: response.data
    })

  }
  render() {
    return <div className="App"></div>;
  }
}

export default App;
