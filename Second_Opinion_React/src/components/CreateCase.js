import React from "react";
import Navbar from "./Navbar";
import PatientComponent from "./PatientComponent";
import Header from "./Header1";
import Footer from "./Footer";
const CreateCase=()=>{
    return(
        <>
            <Header/>
            <Navbar/>
            <PatientComponent/>
            <Footer/>
        </>
    )
}
export default CreateCase;