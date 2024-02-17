import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddCases from "./AddCases";
import PatientDashboard from "./PatientComponent";


const Routing=()=>{
    return(
        <>
            <Routes>
                <Route path="/dashboard" element={<PatientDashboard/>}/>
                <Route path="/new-case" element={<AddCases/>}/>
            </Routes>
        </>
    )
}
export default Routing;