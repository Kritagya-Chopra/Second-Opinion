import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowTestimony = () => {
    const [patients,setPatients]=useState([]);
    const [testimonials,setTestimonials]=useState([]);
    useEffect(()=>{
       getTestimony();
    },[])
    // const getTestimony=async()=>{
    //     const response=await axios.get("http://localhost:8080/testimonials/all");
    //     setTestimonials(response.data.data);
    //     //const pData=axios.get("http://localhost:8080/patient")
    // }
    // const getpatientsdetails=()=>{
    //    testimonials.forEach((item)=>{
    //     const response=axios.get("http://localhost:8080/patient/"+item.patientId);
    //     setPatients(...patients,response);
    //    })
        
    // }
    const getTestimony = async () => {
        const response = await axios.get("http://localhost:8080/testimonials/all");
        setTestimonials(response.data.data);
        getPatientsDetails(response.data.data);
    }

    const getPatientsDetails = (testimonialsData) => {
        const promises = testimonialsData.map(async (item) => {
            try {
                const response = await axios.get("http://localhost:8080/patient/" + item.patientId);
                return response.data;
            } catch (error) {
                console.error("Error fetching patient details for ID " + item.patientId + ":", error);
                return null;
            }
        });
        Promise.all(promises)
            .then((patientsData) => {
                // Filter out any null entries (due to failed requests)
                const filteredPatientsData = patientsData.filter(patient => patient !== null);
                // Update state with the filtered patient data
                setPatients(filteredPatientsData);
            })
            .catch((error) => {
                console.error("Error fetching patient details:", error);
            });
    }
    
  return (
    <>
    <h1>See Your Testimonials</h1>
    {console.log(patients[0])}
    {testimonials.map((item, index) => (
        <div key={item.patientId}>
            <p>Item ratings: {item.rating}</p>
            {patients[index] && (
                <div>
                    <p>Patient Name: {patients[index].data.name}</p>
                    <img src={patients[index].data.photo} alt={patients[index].data.name} />
                </div>
            )}
        </div>
    ))}
</>
  )
}

export default ShowTestimony