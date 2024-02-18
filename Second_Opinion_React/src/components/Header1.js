import React, { Component } from 'react';

import '../App';
export default class Header1 extends Component {


  render() {
 

    return (
       
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
           
        <h2 className="my-0 mr-md-auto font-weight-normal" style={{color:'#2AB8C3'}}>Second Opinion</h2>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" style={{fontSize:'150%'}} href="/">Home</a>
          <a className="p-2 text-dark"style={{fontSize:'150%'}} href="/about">About Us</a>
          <a className="p-2 text-dark"style={{fontSize:'150%'}} href="/contact">Contact Us</a>
          <a className="p-2 text-dark" style={{fontSize:'150%'}}href="#">FAQs</a>
        </nav>
        <a className="btn btn-outline-primary" style={{fontSize:'150%'}} href="/login">Login</a>
      </div>
    )
  }
}

