import React, { Component } from 'react';

import '../App';
import { Link } from 'react-router-dom';
export default class Header1 extends Component {


  render() {
 

    return (
       
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
           
        <h2 className="my-0 mr-md-auto font-weight-normal" style={{color:'#2AB8C3'}}>Second Opinion</h2>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" style={{fontSize:'150%'}} to="/">Home</Link>
          <Link className="p-2 text-dark"style={{fontSize:'150%'}} to="/about">About Us</Link>
          <Link className="p-2 text-dark"style={{fontSize:'150%'}} to="/contact">Contact Us</Link>
          <Link className="p-2 text-dark" style={{fontSize:'150%'}} to="#">FAQs</Link>
        </nav>
        <Link className="btn btn-outline-primary" style={{fontSize:'150%'}} to="/login">Login</Link>
      </div>
    )
  }
}

