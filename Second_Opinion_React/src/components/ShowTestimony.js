import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/Slider.css';
import { GrPrevious, GrNext } from "react-icons/gr";
const ShowTestimony = () => {
  const [patients, setPatients] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  console.log("testimonials");
  console.log(testimonials);
  console.log("patients");
  console.log(patients);

  const handlePrevious = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === 0 ? testimonials?.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    getTestimony();
  }, [])
  // const getTestimony=async()=>{
  //     const response=await axios.get("http://localhost:8080/testimonials/all");
  //     setTestimonials(response?.data?.data);
  //     //const pData=axios.get("http://localhost:8080/patient")
  // }
  // const getpatientsdetails=()=>{
  //    testimonials.forEach((item)=>{
  //     const response=axios.get("http://localhost:8080/patient/"+item?.patientId);
  //     setPatients(...patients,response);
  //    })

  // }
  const getTestimony = async () => {
    const response = await axios.get("http://localhost:8080/testimonials/all");
    setTestimonials(response?.data?.data);
    getPatientsDetails(response?.data?.data);
  }

  const getPatientsDetails = (testimonialsData) => {
    const promises = testimonialsData.map(async (item) => {
      try {
        const response = await axios.get("http://localhost:8080/patient/" + item?.patientId);
        return response?.data;
      } catch (error) {
        console.error("Error fetching patient details for ID " + item?.patientId + ":", error);
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
    <div className='slider-container'>
    <div className='container'>
    <div className="slider-container carousel slide">
      <button className="slider-button" onClick={handlePrevious}>
        <GrPrevious />
      </button>
      <div class="carousel-inner">
        <div class="carousel-item active">



        {patients.length > 0 && (
  <div className="slider-content">
    <div className="left-slider">
      <img style={{ width: "350px", height: "300px" }} className="rounded mx-auto d-block img-thumbnail" src={patients[sliderIndex]?.data?.photo} alt={patients[sliderIndex]?.data?.name} />
    </div>
    <div className="right-slider">
      <h2>Testimonials</h2>
      <br></br>
      <h4 className="heading4">Patient Name: {patients[sliderIndex]?.data?.name}</h4>
      <br></br>
      <h5 className="heading4">{testimonials[sliderIndex]?.testimony}</h5>
      <br></br>
      <h5 className="heading4">Rating: {testimonials[sliderIndex]?.rating}</h5>
    </div>
  </div>
)}
        </div>

      </div>

      <button className="slider-button" onClick={handleNext}>
        <GrNext />
      </button>
    </div>
    </div>
    </div>
  );
}

export default ShowTestimony