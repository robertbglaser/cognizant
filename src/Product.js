import React, { Component } from 'react';
//import ProductList from "./products.json";
import { Card, CardText, CardBody, CardTitle, CardGroup, Button, Row, Col}  from 'reactstrap';

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
    var typedInput = event.target.value;
    console.log("in handleClick, yo you yo ", typedInput)
    //this.setState({showList:true});
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <Row> 
        <Col sm="4"> 
          <Card outline body color="danger"> 
             <CardBody> 
                 <CardTitle >{this.props.productName} </CardTitle> 
              </CardBody>
              <Row></Row>
              <Button size="sm" color="primary">Add to Cart</Button>
          </Card>
          </Col>
        </Row>
        
      </div>
    )
  }
}
