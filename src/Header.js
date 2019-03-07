import React, { Component } from 'react'
import { Navbar, NavItem } from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <div>
          <Navbar> 
                <NavItem>Home</NavItem>
                <NavItem>Cart</NavItem>
          </Navbar>
        
      </div>
    )
  }
}
