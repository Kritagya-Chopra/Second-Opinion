import React from "react";
import Navbar from "./Navbar";
import PatientComponent from "./PatientComponent";
import Header from "./Header";
import Footer from "./Footer";
const Dashboard=()=>{
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