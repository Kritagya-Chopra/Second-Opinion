import React from "react";
import Navbar from "./Navbar";
import PatientComponent from "./PatientComponent";
import Header1 from "./Header1";
import Footer from "./Footer";
import { useLocation, useNavigate } from 'react-router-dom';
const Dashboard=()=>{
    const patientData=useLocation();
    return(
        <>

            <Header1/>
            <Navbar/>
            <PatientComponent/>
            <Footer/>
        </>
    )
}
export default Dashboard;