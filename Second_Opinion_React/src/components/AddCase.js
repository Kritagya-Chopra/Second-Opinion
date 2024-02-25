import React, { useEffect, useState } from "react";
import '../styles/AddCase.css';
import axios from "axios";
import { useNavigate } from "react-router";

const AddCase = () => {
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(""); // State to store the selected option
    const [disease,setDisease]=useState();
    useEffect(() => {
        axios.get("http://localhost:8080/disease")
            .then(resp => {
                setData(resp.data);
                console.log(resp.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[]);

    // Function to handle option change
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Function to handle form submission
    const handleSearch = () => {
        navigate(`/add-case-data/${selectedOption}`);
        // Perform any action based on the selected option
    };

    return (
        <>
            <div className="headingAddCase">
                <h2>Search for a specialist</h2>
                <p>
                    To find the most suitable specialist for your case, please type a diagnosis, 
                    symptom, or body part of concern:
                </p>
            </div>
            <select value={selectedOption} onChange={(e)=>{
                handleOptionChange(e)
            }}>
                <option value="">Select an option</option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
            <button className="addCase-search" onClick={handleSearch}>Search</button>
            <br />
            <br />
            <br />
        </>
    );
}

export default AddCase;
