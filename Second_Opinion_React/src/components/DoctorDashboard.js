import React from "react";
import '../styles/DoctorDashboard.css';
import { useNavigate } from "react-router-dom";
import DoctorNavbar from "./DoctorNavBar";
import Header from "./Header";
import Footer from "./Footer";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const presentHandle = () => {
    navigate("/presentbutton");
  };

  return (
    <>
    <Header />
    <DoctorNavbar/>
      <div className="Container">
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <div className="float-left">
          <p>Welcome Doctor</p>
        </div>
        <div className="buttons">
          <button onClick={presentHandle()}>Present</button>
          <button>New</button>
          <button>Completed</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DoctorDashboard;
