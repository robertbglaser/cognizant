import React, { Component } from 'react';
import ProductList from "./products.json";
import { Jumbotron} from 'reactstrap';
import Product from  './Product';

export default class Products extends Component {
  render() {
    return (
      <div>
          <Jumbotron>
          <h1 className="display-3">Top Products</h1>
          <h1>{ProductList.name}</h1>
          <Product></Product>



          </Jumbotron>
        
      </div>
    )
  }
}
