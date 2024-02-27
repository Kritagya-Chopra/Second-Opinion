import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
  return (
    <>
        <div className='Cases_Container'>
        {cases?.map((item)=>(
            <div key={item.id}>
                <p>{item.title}</p>
            </div>

        ))}
    </div>
    </>
    
  )
}

export default DoctorCases