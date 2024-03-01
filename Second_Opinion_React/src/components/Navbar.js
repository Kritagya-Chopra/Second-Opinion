import React from  'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
const Navbar=()=>{
    return (
        <>
          <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd",margin:"0"}}>
           
          <div className='left-navbar'>
                <Link className="p-2 text-dark headerNavlink" style={{fontSize:'100%'}} to="mailto:secondopinion@gmail.com">Contact Us</Link>&nbsp;&nbsp;&nbsp;
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'100%'}}  to="mailto:secondopinion@gmail.com">secondOpinion@gmail.com</Link>&nbsp;&nbsp;&nbsp;
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'100%'}}  to="mailto:secondopinion@gmail.com">+91 7080920302</Link>
            </div>
            <div className='right-navbar'>
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'110%'}} to={"/patient/dashboard"}>Dashboard</Link> &nbsp;&nbsp;&nbsp;
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'110%'}} to={"/patient/testimony"}>Add Testimony</Link> &nbsp;&nbsp;&nbsp;
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'110%'}} to={"/patient/mycases"}>My Cases</Link>&nbsp;&nbsp;&nbsp;
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'110%'}} to={"/patient/profile"}>Profile</Link>
            </div>
           </nav> 
        </>
    )
}
export default Navbar;