import React from  'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
const DoctorNavbar=()=>{
    return (
        <>
        <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd",margin:"0"}}>
           
            <div className='left-navbar'>
                <Link className="p-2 text-dark headerNavlink" style={{fontSize:'100%'}} to="mailto:secondopinion@gmail.com">Contact Us</Link>&nbsp;&nbsp;&nbsp;
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'100%'}}  to="mailto:secondopinion@gmail.com">secondOpinion@gmail.com</Link>&nbsp;&nbsp;&nbsp;
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'100%'}}  to="mailto:secondopinion@gmail.com">+91 7080920302</Link>
            </div>
            <div className='right-navbar'>
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'110%'}} to={"/doctor/dashboard"}>Dashboard</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'110%'}} to={"/doctor/mycases"}>MyCases</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="p-2 text-dark headerNavlink"style={{fontSize:'110%'}} to={"/doctor/profile"}>Profile</Link>&nbsp;&nbsp;
            </div>
           </nav> 
        </>
    )
}
export default DoctorNavbar;