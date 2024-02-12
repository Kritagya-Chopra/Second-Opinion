import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

  const [regData, setRegData] = useState({
    firstName: "",
    lastName: "",
    userName:"",
    email:"",
    password:"",
    role:1,
    
  });
  
  
  const handleData = (e) => {
    const { name, value } = e.target;
    setRegData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoleSelection = (e) => {
    const { value } = e.target;
    setRegData((prevData) => ({
      ...prevData,
      role: value,
    }));
  };

  const HandleRegistration = () => {
    console.log(regData);
    axios.post('http://localhost:8080/registration', regData,{headers: {'Content-Type': 'application/json',}}  )
        .then(response => {
          console.log(typeof(response.data.status));
            if(response.data.status===false){
             
              toast.error("Invalid User Details", {
                className: "toast-message"
              });
             
            }
            else{
              toast.success("Registration successful",{
                className:"toast-message"
              });
            }
        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
  };

   
      return (
        <section className="vh bg-image" >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: '15px' }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-4">Create an account</h2>
    
                      <form>
    
                        <div className="form-outline mb-4">
                          <input type="email" id="email" className="form-control form-control-lg" onChange={handleData}/>
                          <label className="form-label" htmlFor="email">Enter Email</label>
                        </div>
    
                        <div className="form-outline mb-4">
                          <input type="password" id="password" className="form-control form-control-lg" onChange={handleData} />
                          <label className="form-label" htmlFor="password">Enter Password</label>
                        </div>
    
                        <div className="form-outline mb-4">
                          <input type="password" id="repeatPassword" className="form-control form-control-lg" onChange={handleData} />
                          <label className="form-label" htmlFor="repeatPassword">Repeat your password</label>
                        </div>

                        <div className="form-outline mb-4">
                        
                          <label className="form-label" htmlFor="role">Role</label>
                         
                          <select className="role" style={{marginLeft:'10%'}} onChange={handleRoleSelection}>
                        <option value="1">Doctor</option>
                        <option value="2">Patient</option>
                        
                      </select>
                      </div>
                        



                        <div className="form-check flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="terms" />
                          <label className="form-check-label" htmlFor="terms">
                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                          </label>
                        </div>

          
    
                        <div className="d-flex justify-content-center">
                          <button type="button" onClick={HandleRegistration} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                        </div>
    
                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
    
                      </form>
    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };
    

export default Registration