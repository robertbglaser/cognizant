import React, { Component } from 'react'
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

export default class Product extends Component {
  render() {
    return (
      <div>
          <Card color="danger"> 
             <CardBody > 
                 <CardTitle >{"Eat at Joes"} </CardTitle>
                 <CardText >"Product Name goes here</CardText>
                 <CardText>"Price"</CardText>
                 <CardText>"description goes here</CardText>
              
                 
              </CardBody>
              <Button size="sm" color="primary">Add to Cart</Button>



          </Card>
        
      </div>
    )
  }
}
