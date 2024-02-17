import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import "./profile-pic.css";
import VerticalNavBar from './VerticalNavBar';
const PatientProfile = () => {
  // State variables to store profile data
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password',
    gender: 'male',
    mobile: '1234567890',
    dateOfBirth: '1990-01-01',
    bloodGroup: 'A+',
    height: '175',
    weight: '70',
    profilePhoto: null
  });

  // Function to handle changes in profile data
  const handleProfileDataChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle profile photo upload
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfileData((prevData) => ({
      ...prevData,
      profilePhoto: file,
    }));
  };

  // Function to handle profile data submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions to update profile data (e.g., call backend API)
    console.log('Profile data updated:', profileData);
    // Optionally, reset form fields or show success message
  };
  const [imageUrl, setImageUrl] = useState('profile-icon.png');

  const handleFileChange = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <>
    <Header/> 
    <div style={{display:"flex"}} >
        <VerticalNavBar />
    <div className="container">
      
      <form onSubmit={handleSubmit}>
      
    <div class="row gx-3 mb-3">
        <div className="col-md-6">
            <div className='d-flex flex-column '>
            <h2 className='text-muted'>My Profile</h2>
            <br></br>
            <br></br>
            <label htmlFor="fullName" className="form-label p-2">Full Name</label>
          <input
            type="text"
            className="form-control p-2 align-self-end"
            id="fullName"
            name="fullName"
            value={profileData.fullName}
            onChange={handleProfileDataChange}
          />

            </div>
         
        </div>

        <div className="col-md-6 profile-pic">
      <label className="-label" htmlFor="file">
        <span className="glyphicon glyphicon-camera"></span>
        <span>Change Image</span>
      </label>
      <input id="file" type="file" onChange={handleFileChange}/>
      <img src={imageUrl} id="output" width="200" alt="Profile"/>
    </div>
        </div>
        <div class="row gx-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleProfileDataChange}
            readOnly // Prevents editing email
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={profileData.password}
            onChange={handleProfileDataChange}
          />
        </div>
        </div>
        <div class="row gx-3 mb-3">
        <div className="col-md-4">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            value={profileData.mobile}
            onChange={handleProfileDataChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={profileData.dateOfBirth}
            onChange={handleProfileDataChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={profileData.gender}
            onChange={handleProfileDataChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        </div>
        
        <div class="row gx-3 mb-3">
       
        <div className="col-md-4">
          <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
          <input
            type="text"
            className="form-control"
            id="bloodGroup"
            name="bloodGroup"
            value={profileData.bloodGroup}
            onChange={handleProfileDataChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="height" className="form-label">Height (cm)</label>
          <input
            type="text"
            className="form-control"
            id="height"
            name="height"
            value={profileData.height}
            onChange={handleProfileDataChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="weight" className="form-label">Weight (kg)</label>
          <input
            type="text"
            className="form-control"
            id="weight"
            name="weight"
            value={profileData.weight}
            onChange={handleProfileDataChange}
          />
        </div>
       
        </div>
        <button type="submit" className="btn btn-primary float-right">Save Changes</button>
        <br></br>
        <br></br>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default PatientProfile;
