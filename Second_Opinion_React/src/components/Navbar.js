import React from  'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return (
        <>
           <nav className='navbar'>
            <div className='left'>
                <p>Contact Us</p>
                <a href="mailto:secondopinion@gmail.com">secondopinion@gmail.com</a>
                <a href="#">+91 7080920302</a>
            </div>
            <div className='right'>
                <Link to={"/patient/dashboard"}>Dashboard</Link>
                <a href='#'>My Cases</a>
                <Link to={"/patient/Myprofile"}>Profile</Link>
            </div>
           </nav> 
        </>
    )
}
export default Navbar;