import React, { Component } from 'react';
//import ProductList from "./products.json";
import { Card, CardText, CardBody, CardTitle, CardGroup, Button, Row, Col}  from 'reactstrap';
import{BrowserRouter as Router} from "react-router-dom";

export default class Product extends Component {

  constructor (props){
    super(props);
    this.state={
      productsList: {
        productName:"",
        productPrice:0,
        productDescription:"",
      },
    }
  }
  handleClick =(event) =>{
    event.preventDefault();
    event.stopPropagation()
   // var typedInput = event.target.value;
    console.log("in handleClick, yo you yo ")
    //this.setState({showList:true});
  }
  handleSubmit =(event) =>{
    event.preventDefault();
    event.stopPropagation()
    var typedInput = event.target.value;
    console.log("in handleSubmit yo you yo ", typedInput)
    //this.setState({showList:true});
  }
  render() {
    return (
      <div >
        <Row> 
        <Col sm="4"> 
          <Card outline body color="danger" onClick={this.handleClick}> 
             <CardBody> 
                 <CardTitle >{this.props.productName} </CardTitle> 
              </CardBody>
              <Row>
                <h5>{this.props.productName}</h5>
                <br/>
                <h6>"$"{this.props.productPrice}</h6>
                <br/>
                <h5> {this.props.productDesc} </h5>
              </Row>
              <Button size="sm" type="submit" color="primary" onClick={this.handleSubmit}>Add to Cart</Button>
          </Card>
          </Col>
        </Row>
        
      </div>
    )
  }
}
