import React, { Component } from 'react';

import '../App';
export default class Header1 extends Component {


  render() {
 

    return (
       
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
           
        <h5 className="my-0 mr-md-auto font-weight-normal">Second Opinion</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="#">Home</a>
          <a className="p-2 text-dark" href="#">About Us</a>
          <a className="p-2 text-dark" href="#">Contact Us</a>
          <a className="p-2 text-dark" href="#"></a>
        </nav>
        <a className="btn btn-outline-primary" href="#">Sign up</a>
      </div>
    )
  }
}

