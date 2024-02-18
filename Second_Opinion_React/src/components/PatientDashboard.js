import React from "react";
import Navbar from "./Navbar";
import PatientComponent from "./PatientComponent";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate } from 'react-router-dom';
const Dashboard=()=>{
    const patientData=useLocation();
    return(
        <>

            <Header/>
            <Navbar/>
            <PatientComponent/>
            <Footer/>
        </>
    )
}
export default Dashboard;