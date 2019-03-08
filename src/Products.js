import React, { Component } from 'react';
//import ProductList from "./products.json";
import { Jumbotron} from 'reactstrap';
import Product from  './Product';


let listOfProducts =  [
  {
    "name": "Product1",
    "price":3086.40,
    "description": "lajsd;ljkdflkjsdfjdf;jfkjdajz;jl",
},
{
    "name": "Product2",
    "price":3086.40,
    "description": "lajsd;ljkdflkjsdfjdf;jfkjdajz;jl"
    
},
{
    "name": "Product3",
    "price":3086.40,
    "description": "lajsd;ljkdflkjsdfjdf;jfkjdajz;jl"
},
{
    "name": "Product4",
    "price":3086.40,
    "description": "lajsd;ljkdflkjsdfjdf;jfkjdajz;jl"
},
{
    "name": "Product5",
    "price":3086.40,
    "description": "lajsd;ljkdflkjsdfjdf;jfkjdajz;jl"
},
{
    "name": "Product6",
    "price":3086.40,
    "description": "lajsd;ljkdflkjsdfjdf;jfkjdajz;jl"
},
{
    "name": "Product7",
    "price":3086.40,
    "description": "lajsd;ljkdflkjsdfjdf;jfkjdajz;jl"
},
{
    "name": "Product8",
    "price":3086.40,
    "description": "lajsd;ljkdflkjsdfjdf;jfkjdajz;jl"
}
];
export default class Products extends Component {

constructor (props){
    super(props);
    this.state={
      productsList: {
        productName:"",
        productPrice:0,
        productDescription:"",
      },
    }


  };
  
  render() {
 
    var ProductCardInfo =listOfProducts.map((detail)=>{
      let  productName =  detail.name;
      let  productPrice = detail.price;
      let  productDesc = detail.description;
      return(
        
           <Product 
              productName={productName} 
              productPrice={productPrice} 
              productDesc={productDesc} 
              />
        
      )
    }
    
    )
    
      return ( 
        <div>
         
          <h1>Top Products</h1>
         
            {ProductCardInfo}
  
         
        </div>
      )

        
      
  }
}
