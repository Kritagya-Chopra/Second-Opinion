import axios from 'axios';
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Testimony = () => {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState();
    const id = sessionStorage.getItem("id");
    const navigate=useNavigate();

    
    const handleRatingChange = (value) => {
        setRating(value);
    };
    const submitData = () => {
        const postData = {
            patientId: parseInt(id),
            testimony: description,
            rating: rating,
            createdAt:"2024-02-27T15:00:23.525Z"
        }
        console.log(postData);
        const response=axios.post("http://localhost:8080/testimonials",postData);
        navigate("/patient/dashboard");
    }
  return (
    <>
        <Header></Header>
      <Navbar></Navbar>
        <div className="container">

            <h2>Provide your Valuable Testimony</h2>
            <p >Dear Customer,<br />
                Thank you for using SecondOpinion. We would like to know how our app performed.
                Please spare some moments to give us your valuable testimony as it will help us in improving our service.</p>

            <p style={{marginBottom:"0",paddingBottom:"0"}}>Please rate our app service experience</p>
          
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
                <textarea placeholder='Enter Detailed Testimony' name='description' cols={10} rows={5} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <button className='btn btn-success float-right' onClick={() => { submitData() }}>Submit</button>
                <br></br><br></br><br></br>
            </div>
        </div>
        <Footer></Footer>
        </>
  )
}

export default Testimony