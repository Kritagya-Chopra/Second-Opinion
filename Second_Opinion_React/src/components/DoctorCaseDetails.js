import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import axios from 'axios';

export const DoctorCaseDetails = () => {
    const { id } = useParams();
    useEffect(() => {
        getCaseDetails();
    }, []);
    const msg = "Please wait for Doctor's Response."
    const [data, setData] = useState(null); // Set initial state to null
    const [patientData, setPatientData] = useState(null); // Set initial state to null
    const [symp, setSymp] = useState([]);
    const getCaseDetails = async () => {
        try {
            const response = await axios.get("http://localhost:8080/case/" + id);
            const pData = await axios.get("http://localhost:8080/patient/" + response.data.patientId);
            setData(response.data);
            setPatientData(pData.data.data);
            setSymp(response.data.symptoms);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    //title description openTime  closeTime  document  opinion responseTime status symptoms[] id
    //doctor name photo qualification.name qualification.university languagesSpoken licenseNo specialization.name yearsOfExperience

    return (
        <>
            <Header />
            <div className='container'>
                <h2 className='heading1' style={{ color: "#2ab8c3" }}>Case Details</h2>
                {data && (<>
                    <div className='row'>
                        <h4>Title: {data?.title}</h4>
                        {console.log(patientData)}
                    </div>
                    <div className='row'>
                        <p>Description: {data?.description}</p>

                    </div>

                    <p>Symptoms:</p>
                    {symp?.map((item) => {
                        return (
                            <div className='row' key={item.id}>
                                <li>{item.name}</li>
                            </div>
                        );

                    })}


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
                </>)}
                <div className='row'>
                    {
                        patientData &&
                        (<>
                            <div>
                        <h4>Patient's Details: </h4>


                    </div>
                    <div>

                        <div className="row">
                        
                            <div className='col'>

                                <p>Doctor's Name: {patientData?.name}</p>
                            </div>
                            <div class="col">
                                <p>Blood Group: {
                                    patientData?.bloodGroup
                                }</p>
                            </div>

                            <div className="col">
                                <p>Weight:{patientData?.weight}</p>
                            </div>
                        </div>




                    </div>
                        </>)
                    }
                    {/* <h5 className="mb-2"><strong>{patientData?.name}</strong></h5> */}
                    {/* <p class="text-muted">Web designer <span class="badge bg-primary">PRO</span></p> */}
                    {/* <img className='img-thumbnail rounded float-right' style={{ width: "30%", height: "30%" }} ></img> */}
                </div>

                <div class="text-center">
                    <button type='button' className='btn btn-primary ' >Submit Opinion</button>
                </div>
                <br></br>
                <br></br>
            </div>
            <Footer />
        </>

    )
}
