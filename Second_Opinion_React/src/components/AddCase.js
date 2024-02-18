import React from "react";
// import "./AddCase.css"
const AddCase=()=>{
    return(
        <>
            <div className="headingAddCase">
            <h2>Search for a specialist</h2>
            <p>
            To find the most suitable specialist for your case, please type a diagnosis, 
            symptom or body part of concern:
            </p>
            </div>
            
            <input type="text" placeholder="Enter Disease"></input>
            <button className="search">Search</button>
        </>
    )
}
export default AddCase;