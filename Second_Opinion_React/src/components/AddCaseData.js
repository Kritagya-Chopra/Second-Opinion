import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AddCaseData = () => {
    const navigate=useNavigate();
    const [getSymp, setGetSymp] = useState(['','Fever','Chills', 'Sore throat', 'Muscle or body aches']);
    const { id } = useParams();
    const [getDoctors, setGetDoctors] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [symptoms, setSymptom] = useState([]);
    const [doctorId, setDoctorId] = useState();
    const patientId = sessionStorage.getItem("id");
    useEffect(() => {
        getDoctorsHandler();
    }, [])
    const getDoctorsHandler = async () => {
        try {
            const response = await axios.get("http://localhost:8080/doctor/specialization/" + id)
            console.log(response?.data?.data);
            setGetDoctors(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    }
    const SubmitCase = async() => {
        const date = new Date();
        const postData = {

            patientId: parseInt(patientId),
            doctorId: parseInt(doctorId),
            diseaseId: parseInt(id),
            description: description,
            title: title,
            document: [
                "null"
            ],
            symptomIds: symptoms
        }
        const response=await axios.post("http://localhost:8080/case/newCase",postData)
        navigate("/patient/mycases");
    }
    return (
        <>
        <Header></Header>
            <div className='container'>
                <div className='Title_Container'>
                    <input className='form-label' type='text' placeholder='Add Case Title' name='title' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='Description_Container'>
                    <textarea className='form-label' placeholder='Add Case Description' name='description' cols={10} rows={5} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='Checkbox_Container'>
                    {
                        getSymp?.map((symptom, index) => {
                            return (
                                <div>
                               
                                    {index!==0 &&
                                    (
                                        <div><input className='form-check-label'  type='checkbox' value={index} id={symptom} onChange={(e) => setSymptom([...symptoms, e.target.value])} />
                                    <label htmlFor={symptom}>{symptom}</label>
                                    </div>)
                                    }
                                    
                                </div>
                            )
                        })
                    }
                </div>
                <input className='form-label' type='file' onChange={(e) => {
                    console.log(e.target.value);
                }} />
                <div>
                    <select onChange={(e) => setDoctorId(e.target.value)}>
                        <option value="" selected disabled>Select Doctor</option>
                        {getDoctors?.map((doctor) => (
                            <option key={doctor?.id} id={doctor?.id} value={doctor?.id}>{doctor?.name}</option>
                        ))}
                    </select>
                    <br></br><br></br>
                </div>
                <button className='btn btn-primary ' onClick={() => { SubmitCase() }}>submit</button>
                <br></br><br></br>
            </div>
            <Footer></Footer>
        </>
    )
}

export default AddCaseData