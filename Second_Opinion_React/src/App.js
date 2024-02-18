import React from "react";

import Registration from "./components/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Terms from "./components/Terms";
import AddCases from "./components/AddCases";
import PatientProfile from "./components/PatientProfile";
import DoctorDashboard from "./components/DoctorDashboard";
import PatientDashboard from "./components/PatientDashboard";
import DoctorProfile from "./components/DoctorProfile";
import Dashboard from "./components/PatientDashboard";
import HomePage from "./components/HomePage";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/patient/profile" element={<PatientProfile/>}/>
      <Route path="/doctor/profile" element={<DoctorProfile/>}/>
      <Route path="/patient/dashboard" element={<PatientDashboard/>}/>
      <Route path="/doctor/dashboard" element={<DoctorDashboard />}/>
      <Route path="/new-case" element={<AddCases/>}/>
      </Routes>
    </BrowserRouter>
 
    
      
    </>
  );
};
export default App;
