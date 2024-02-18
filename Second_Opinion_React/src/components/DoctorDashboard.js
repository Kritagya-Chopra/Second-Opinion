import React from "react";
// import "./DoctorDashboard.css";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const presentHandle = () => {
    navigate("/presentbutton");
  };

  return (
    <>
      <div className="Container">
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <div className="welcome">
          <p>Welcome Doctor</p>
        </div>
        <div className="buttons">
          <button onClick={presentHandle()}>Present</button>
          <button>New</button>
          <button>Completed</button>
        </div>
      </div>
    </>
  );
};
export default DoctorDashboard;
