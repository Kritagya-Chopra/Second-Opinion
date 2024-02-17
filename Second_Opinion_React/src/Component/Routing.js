import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddCases from "./AddCases";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";
import PresentButton from "./PresentButton";
import NewButton from "./NewButton";
import CompleteButton from "./CompleteButton";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-case" element={<AddCases />} />
        <Route path="/terms" element={<TermsOfUse/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/presentbutton" element={<PresentButton/>}/>
        <Route path="/newbutton" element={<NewButton/>}/>
        <Route path="/completebutton" element={<CompleteButton/>}/>
      </Routes>
    </>
  );
};
export default Routing;
