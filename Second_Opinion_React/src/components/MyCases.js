import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MyCases = () => {
    const patientId=sessionStorage.getItem("id");
    const [cases,setCases]=useState([]);
    useEffect(()=>{
        getMyCases();
    },[]);
    const getMyCases=async()=>{
        const response = await axios.get("http://localhost:8080/case/patient/"+patientId);
        setCases(response?.data);
        
    }
  return (
   <>
    <div className='Cases_Container'>
        {cases?.map((item)=>(
            <div key={item.id}>
                <h1>{item.title}</h1>
            </div>

        ))}
    </div>
   </>
  )
}

export default MyCases