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
import InValidRoutes from "./components/InValidRoutes";
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





      <Route path="/patient/profile" element={<InValidRoutes Component={PatientProfile}/>}/>
      <Route path="/doctor/profile" element={<InValidRoutes Component={DoctorProfile}/>}/>
      <Route path="/patient/dashboard" element={<InValidRoutes Component={PatientDashboard}/>}/>
      <Route path="/doctor/dashboard" element={<InValidRoutes Component={DoctorDashboard }/>}/>
      <Route path="/new-case" element={<InValidRoutes Component={AddCases}/>}/>
      <Route path="/add-case-data/:id" element={<InValidRoutes Component={AddCaseData}/>}/>
      <Route path="/patient/mycases" element={<InValidRoutes Component={MyCases}/>}/>
      <Route path="/doctor/cases" element={<InValidRoutes Component={DoctorCases }/>}/>
      <Route path="/patient/mycases/:id" element={<InValidRoutes Component={CaseDetails}/>}/>
      <Route path="/doctor/mycases/:id" element={<InValidRoutes Component={DoctorCaseDetails}/>}/>
      <Route path="/patient/case/feedback" element={<InValidRoutes Component={CaseFeedback}/>}/>
      <Route path="/patient/testimony" element={<InValidRoutes Component={Testimony}/>}/>    
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
