import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Testimony = () => {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState();
    const [user,setUser]=useState(null);
    const id = sessionStorage.getItem("id");
    const navigate=useNavigate();

    const userAuthentications = async () => {
        if (id == null) return null;
        else {
            try {
                const response = await axios.get('http://localhost:8080/user/' + id);
                setUser(response?.data?.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
    };
   
    useEffect(() => {
        userAuthentications();
    }, []); // Run only once after the component mounts

    useEffect(() => {
        if (user) {
            console.log('User:', user);
            if (user.role !== 'PATIENT') {
                navigate('/login');
            }
        }
    }, [user, navigate]);
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
    <div className="rating-container">
            <h2>Provide your Valuable Testimony</h2>
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
  )
}

export default Testimony