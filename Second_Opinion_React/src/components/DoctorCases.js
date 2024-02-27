import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router';
import DoctorNavbar from './DoctorNavBar';
    

const DoctorCases = () => {
    const [cases,setCases]=useState([]);
    const id=sessionStorage.getItem("id");
    useEffect(()=>{
        getCasesDetails();
    },[]);
    const getCasesDetails=async()=>{
        const response=await axios.get("http://localhost:8080/case/doctor/"+id)
        setCases(response?.data);
    }
    const patientId=sessionStorage.getItem("id");
    

    const navigate = useNavigate();

    // const getMyCases=async()=>{
    //     const response = await axios.get("http://localhost:8080/case/patient/"+patientId);
    //     console.log(response?.data);
    //     setCases(response?.data);
        
    // }

    const readMore = (e)=>{
        console.log(e.target.value);
        navigate(`/doctor/mycases/${e.target.value}`)

    }

  return (
   <>
   <Header />
    <DoctorNavbar />

    <div class="accordion" id="accordionExample">
    <h2 className='heading1' style={{ color: "#2ab8c3" }}>All Cases</h2>
    {cases?.map((item)=>(
           //title description openTime  closeTime  document  opinion responseTime status symptoms[] id
       
  <div class="accordion-item" key={item.id}>
    <h3 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h4>{item.title}</h4>
      </button>
    </h3>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>{item.description}</p>
        <span>Case Open Time:</span> <code>{item.openTime}</code> <button className='float-right' value={item.id} onClick={(e)=>{readMore(e)}}>Read More</button>
      </div>
    </div>
  </div>
   ))}
  </div>

    <Footer></Footer>
   </>
  )
}

export default DoctorCases;