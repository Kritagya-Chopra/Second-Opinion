import React from 'react';
import { CgProfile } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
const VerticalNavbar = () => {
  return (
    <div style={{width:"15%"}}>
     <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              <CgProfile /> My Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <MdOutlineSecurity /> Security
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <IoSettings />  Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <MdDelete /> Delete Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
   
  );
};

export default VerticalNavbar;
