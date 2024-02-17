import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Component/Routing";
import Login from "./Component/Login";
import Slider from "./Component/Slider";
import ThreeCards from "./Component/ThreeCards";
import Step from "./Component/Step";
import DoctorDashboard from "./Component/DoctorDashboard";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      {/* <Navbar/>
      <PatientDashboard/> */}
      {/* <AddCase/> */}
      {/* <Slider /> */}
      {/* <ThreeCards /> */}
      {/* <Step/> */}
      <DoctorDashboard />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
};
export default App;
