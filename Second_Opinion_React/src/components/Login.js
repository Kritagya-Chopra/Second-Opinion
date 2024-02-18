import React, { useState } from "react";
// import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    user: "",
    password: "",
  });
  
  
  const handleData = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Handlelogin = () => {
    console.log(loginData);
    axios.post('http://localhost:8080/user/login', loginData,{headers: {'Content-Type': 'application/json',}}  )
        .then(response => {
          console.log(typeof(response.data.status));
            if(response.data.status==false){
             
              toast.error("Invalid User Details", {
                className: "toast-message"
              });
             
            }
            else{
              
            }
        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
  };


  return (
    <>
    
      <div className="wrapper"></div>
      
      <div className="login-page">
      
        <h1>Log in</h1>
        <label>E-mail address</label>
        <input
          type="email"
          name="userName"
          value={loginData.user}
          onChange={handleData}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleData}
        />
        <button onClick={Handlelogin} className="btn">LOGIN</button>
        <p className="account">
          No account? <span className="create-one"><Link to="/register">create one</Link></span>
        </p>
        <p className="go-back">Go back</p>
        <div className="back-side">
          <p className="term">Terms of use</p>
          <p className="privacy">Privacy Policy</p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Login;
