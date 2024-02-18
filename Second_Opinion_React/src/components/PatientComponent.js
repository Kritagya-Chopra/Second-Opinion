import React from "react";
// import "./PatientDashboard.css";
import { FaHospitalUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const PatientComponent=()=>{
    const navigate=useNavigate();
    return (
        <>
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
        </>
    )
}
export default PatientComponent;