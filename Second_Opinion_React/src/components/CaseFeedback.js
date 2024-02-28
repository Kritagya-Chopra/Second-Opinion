import axios from 'axios';
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const CaseFeedback = () => {

    const [rating, setRating] = useState(0); // State to store the current rating
    const [description, setDescription] = useState();
    const id = sessionStorage.getItem("id");
    const did = useLocation();
    const navigate = useNavigate();
    console.log(did.state.data);
    // Function to handle rating change
    const handleRatingChange = (value) => {
        setRating(value);
    };
    const submitData = () => {
        const postData = {
            patientId: parseInt(id),
            doctorID: did.state.data,
            review: description,
            rating: rating,
            responseTime: "2024-02-27T15:00:23.525Z"
        }
        console.log(postData);
        const response = axios.post("http://localhost:8080/feedback", postData);
        navigate("/patient/dashboard");
    }
    return (
        <>
        <Header></Header>
      
        <div className="container">
        <h4 >Provide your Valuable Feedback</h4>
            <p >Dear Customer,<br />
                Thank you for using SecondOpinion. We would like to know how the doctor performed.
                Please spare some moments to give us your valuable feedback as it will help us in improving our service.</p>

            <p style={{marginBottom:"0",paddingBottom:"0"}}>Please rate your service experience</p>
          
            <div className="rating-stars"  style={{paddingTop:"0"}}>

                <Container>

                    {[...Array(5)].map((item, index) => {
                        const givenRating = index + 1;
                        return (
                            <label>
                                <Radio
                                    type="radio"
                                    value={givenRating}
                                    onClick={() => {
                                        setRating(givenRating);
                                        alert(
                                            `Are you sure you want to give ${givenRating} stars ?`
                                        );
                                    }}
                                />
                                <Rating>
                                    <FaStar
                                        color={
                                            givenRating < rating || givenRating === rating
                                                ? "#FFD700"
                                                : "rgb(192,192,192)"
                                        }
                                    />
                                </Rating>
                            </label>
                        );
                    })}
                </Container>

            </div>
            <div className='Description_Container'>
                <textarea placeholder='Enter Detailed Feedback' name='description' cols={10} rows={5} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <button className='btn btn-success float-right' onClick={() => { submitData() }}>Submit</button>
                <br></br><br></br><br></br>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default CaseFeedback;


