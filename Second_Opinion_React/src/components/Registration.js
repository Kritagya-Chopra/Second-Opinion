import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import { Link, useNavigate } from 'react-router-dom';
const Registration = () => {
  const naviagte=useNavigate();
  const [isChecked,setIsChecked]=useState();
  const [regData, setRegData] = useState({
    userName:"",
    password:"",
    repeatPassword:"",
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
    if(isChecked===undefined){
      toast.error("Please check the terms")
      return;
    }
    if (!validator.isEmail(regData.userName)){
        toast.error("provide valid email address", {
          className: "toast-message"
        });
        return;
    }
    if(regData.password.length<8){
      toast.error("provide password of minimum 8 length", {
        className: "toast-message"
      });
      return;
    }
    if(regData.password!=regData.repeatPassword){
      toast.error("Password must be same", {
        className: "toast-message"
      });
      return;
    }
    axios.post('http://localhost:8080/user/register', regData,{headers: {'Content-Type': 'application/json',}}  )
        .then(response => {
            if(response.data.status===false){
             
              toast.error(response.data.message, {
                className: "toast-message"
              });
             
            }
            else{
              toast.success("Registration successful",{
                className:"toast-message"
              });
              if(regData?.role==1){
                naviagte("/doctor/profile");

              }
              else{
                naviagte("/patient/profile",{
                  state:{data:response.data.data}
                });

              }
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
                          <input type="email" name="userName" id="email" className="form-control form-control-lg" onChange={handleData}/>
                          <label className="form-label" htmlFor="email">Enter Email</label>
                        </div>
    
                        <div className="form-outline mb-4">
                          <input type="password" id="password" name="password" className="form-control form-control-lg" onChange={handleData} />
                          <label className="form-label" htmlFor="password">Enter Password</label>
                        </div>
    
                        <div className="form-outline mb-4">
                          <input type="password" id="repeatPassword" name="repeatPassword" className="form-control form-control-lg" onChange={handleData} />
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

                          <input className="form-check-input me-2" type="checkbox" value="terms" id="terms"  
                            onChange={(e)=>{setIsChecked(e.target.value)}}
                          />

                          <label className="form-check-label" htmlFor="terms">
                            I agree all statements in <Link to="/terms" className="text-body">Terms of service</Link>
                          </label>
                        </div>

          
    
                        <div className="d-flex justify-content-center">
                          <button type="button" onClick={HandleRegistration} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                        </div>
    
                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to={"/login"}>Login here</Link></p>
                        
                      </form>
    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer/>
        </section>
      );
    };
    

export default Registration