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
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import AddCaseData from "./components/AddCaseData";
import MyCases from "./components/MyCases";
import { CaseDetails } from "./components/CaseDetails";
import DoctorCases from "./components/DoctorCases";
import { DoctorCaseDetails } from "./components/DoctorCaseDetails";
import Testimony from "./components/Testimony";
import CaseFeedback from "./components/CaseFeedback";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/patient/profile" element={<PatientProfile/>}/>
      <Route path="/doctor/profile" element={<DoctorProfile/>}/>
      <Route path="/patient/dashboard" element={<PatientDashboard/>}/>
      <Route path="/doctor/dashboard" element={<DoctorDashboard />}/>
      <Route path="/new-case" element={<AddCases/>}/>
      <Route path="/add-case-data/:id" element={<AddCaseData/>}/>
      <Route path="/patient/mycases" element={<MyCases/>}/>
      <Route path="/doctor/cases" element={<DoctorCases />}/>
      <Route path="/patient/mycases/:id" element={<CaseDetails/>}/>
      <Route path="/doctor/mycases/:id" element={<DoctorCaseDetails/>}/>
      <Route path="/patient/case/feedback" element={<CaseFeedback/>}/>
      <Route path="/patient/testimony" element={<Testimony/>}/>    
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
