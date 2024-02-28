import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const CaseFeedback = () => {
    const [rating, setRating] = useState(0); // State to store the current rating
    const [description, setDescription] = useState();
    const id = sessionStorage.getItem("id");
    const did = useLocation();
    const navigate=useNavigate();
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
        const response=axios.post("http://localhost:8080/feedback",postData);
        navigate("/patient/dashboard");
    }
    return (
        <div className="rating-container">
            <h2>Provide your Valuable feedback</h2>
            <div className="rating-stars">

                {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1; // Rating value starts from 1
                    return (
                        <span
                            key={index}
                            className={ratingValue <= rating ? 'star filled' : 'star'}
                            onClick={() => handleRatingChange(ratingValue)}
                        >
                            ★
                        </span>
                    );
                })}
            </div>
            <div className='Description_Container'>
                <textarea placeholder='Description' name='description' cols={10} rows={5} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <button onClick={() => { submitData() }}>Submit</button>
            </div>
        </div>
    );
};

export default CaseFeedback