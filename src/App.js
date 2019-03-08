import React, { Component } from 'react';
//import { Button, Card } from 'reactstrap'
import Header from "./Header";
import Products from "./Products";
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header></Header>
        <Products/>
      </div>
    );
  }
}

export default App;
