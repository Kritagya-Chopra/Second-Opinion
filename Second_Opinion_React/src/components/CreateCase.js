import React from "react";
import Navbar from "./Navbar";
import PatientComponent from "./PatientComponent";
import Header1 from "./Header1";
import Footer from "./Footer";
const CreateCase=()=>{
    return(
        <>
            <Header1/>
            <Navbar/>
            <PatientComponent/>
            <Footer/>
        </>
    )
}
export default CreateCase;