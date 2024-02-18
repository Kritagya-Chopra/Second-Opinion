import React from "react";
import '../styles/PatientDashboard.css';
import { FaHospitalUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
const PatientComponent=()=>{
    const navigate=useNavigate();
    return (
        <>
             <Header/>
            <Navbar/>
            <p className="heading">Dashboard</p>
            <div className="dashboard">
            <FaHospitalUser className="icon"/>
            <div className="text">
            <h2>Second Medical Opinion</h2>
            <p>Thanks to Diagnose.me you can consult your diagnosis with top international experts.<br/>
            You can choose a doctor or hospital that specializes in your problem</p>
            </div>
            <button className="addCaseBtn" onClick={()=>{navigate("/new-case")}}>Add Case</button>
            </div>
            <Footer/>
        </>
    )
}
export default PatientComponent;