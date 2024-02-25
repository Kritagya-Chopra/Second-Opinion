import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { StepDescription } from 'semantic-ui-react';

const AddCaseData = () => {
    const [getSymp,setGetSymp]=useState(['Fever','Sore throat','Muscle or body aches']);
    const {id}=useParams();
    const [getDoctors,setGetDoctors]=useState([]);
    const [title,setTitle]=useState();
    const [description,setDescription]=useState();
    const [symptoms,setSymptom]=useState([]);
    const [doctorId,setDoctorId]=useState();
    console.log("hello"+typeof(id));
    useEffect(()=>{
        getDoctorsHandler();
    },[])
    const getDoctorsHandler=async()=>{
        try {
            const response=await axios.get("http://localhost:8080/doctor/specialization/"+id)
            console.log(response.data?.data);
            setGetDoctors(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    }
    const SubmitCase=()=>{
        const date=new Date();
        console.log("doctor",doctorId);
        console.log("date",symptoms);
    }
  return (
    <>
        <div className='AddCaseDataContainer'>
            <div className='Title_Container'>
                <input type='text' placeholder='Title' name='title' onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='Description_Container'>
                <textarea  placeholder='Description' name='description' cols={10} rows={5} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className='Checkbox_Container'>
                {
                    getSymp?.map((symptom,index)=>{
                        return(
                            <div>
                            
                            {/* need to be updated */}
                                <input type='checkbox' value={index} id={symptom} onChange={(e)=>setSymptom([...symptoms,e.target.value])}/>
                                <label htmlFor={symptom}>{symptom}</label>
                            </div>
                        )
                    })
                }
            </div>
            <input type='file' onChange={(e)=>{
                console.log(e.target.value);
            }}/>
            <div>
                <select onChange={(e)=>console.log("doctorid",e.target.value)}>
                    <option value="" selected disabled>Select Doctor</option>
                    {getDoctors?.map((doctor)=>(
                        <option key={doctor?.id} id={doctor?.id} value={doctor?.id}>{doctor?.name}</option>
                    ))}
                </select>
            </div>
            <button onClick={()=>{SubmitCase()}}>submit</button>
        </div>  
    </>
  )
}

export default AddCaseData