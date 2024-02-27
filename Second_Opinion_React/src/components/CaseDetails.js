import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import axios from 'axios';

export const CaseDetails = () => {
    const { id } = useParams();
    useEffect(() => {
        getCaseDetails();
    }, []);
    const msg = "Please wait for Doctor's Response."
    const [data, setData] = useState();
    const [doctorData, setDoctorData] = useState();
    const getCaseDetails = async () => {
        const response = await axios.get("http://localhost:8080/case/" + id);
        const doctordata = await axios.get("http://localhost:8080/doctor/" + response.data.doctorId);
        //console.log(doctordata.data.data);
        setData(response.data);
        setDoctorData(doctordata.data.data);
        console.log(response.data);
    }

    //title description openTime  closeTime  document  opinion responseTime status symptoms[] id
    //doctor name photo qualification.name qualification.university languagesSpoken licenseNo specialization.name yearsOfExperience

    return (
        <>
            <Header />
            <div className='container'>
                <h2 className='heading1' style={{ color: "#2ab8c3" }}>Case Details</h2>
                <div className='row'>
                    <h4>Title: {data?.title}</h4>

                </div>
                <div className='row'>
                    <p>Description: {data?.description}</p>

                </div>
                <div className='row'>

                    <p>Opinion: {data?.opinion !== null && (data?.opinion)}
                        {data?.opinion === null && (msg)}
                    </p>
                </div>


                <div className="row">
                    <div class="col">
                        <p>Case Open Time: {
                            data?.openTime
                        }</p>
                    </div>
                    <div className="col">
                        <p>Case Close Time:
                            {data?.closeTime !== null && (data?.closeTime)}
                            {data?.closeTime === null && (" Not closed yet")}
                        </p>
                    </div>

                </div>
                <div className='row'>
                    <div className="col">
                        <p>Status: {data?.status}</p>
                    </div>
                </div>
                <div className='row'>
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3" style="width: 150px;"
  alt="Avatar" />

<h5 class="mb-2"><strong>John Doe</strong></h5>
<p class="text-muted">Web designer <span class="badge bg-primary">PRO</span></p>
                    <h4>Doctor's Details: </h4>
                        <img className='img-thumbnail rounded float-right' style={{ width:"30%", height:"30%"}} src={doctorData?.photo}></img>
                </div>
              
                <div className="row">
                <div className='col'>
                    <p>Doctor's Name: {doctorData?.name}</p>
                </div>
                    <div class="col">
                        <p>Specialization: {
                            doctorData?.specialization.name
                        }</p>
                    </div>
                    
                    <div className="col">
                        <p>Experience: { doctorData?.yearsOfExperience} years</p>
                    </div>
                </div>

                
                    <div class="row">
                        <p>Education Details:</p>
                    </div>
                    <div className="row">
                    <div className="col">
                        <p>Qualification: { doctorData?.qualification.name}</p>
                    </div>
                    <div className="col">
                        <p>University: { doctorData?.qualification.university} years</p>
                    </div>
                    <div className="col">
                        <p>License No: { doctorData?.licenseNo}</p>
                    </div>
                </div>

                </div>
                <Footer />
            </>

            )
}
