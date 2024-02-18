import React from  'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return (
        <>
           <nav>
            <div className='left'>
                <p>Contact Us</p>
                <a href="mailto:ujjwalpratapsingh01@gmail.com">ujjwalpratapsingh01@gmail.com</a>
                <a href="#">7080920302</a>
            </div>
            <div className='right'>
                <Link to={"/dashboard"}>Dashboard</Link>
                <a href='#'>My Cases</a>
                <a href="#">Profile</a>
            </div>
           </nav> 
        </>
    )
}
export default Navbar;