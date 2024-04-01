
import axios from "axios";
import React, { useEffect, useState } from "react";
const PatientCase=()=>{
    const sid=sessionStorage.getItem("did");
    const [doctor,setDoctor]=useState([]);
    const [cases,setCases]=useState(
        {
            title:"",
            description:""
        }
    );
    useEffect(()=>{
        axios.get("http://localhost:8080/doctor/specialization/"+sid).then(resp=>{
            console.log(resp?.data);
            setDoctor(resp?.data);
        }).catch(e=>{
            console.log(e);
        })
    },[])
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setCases((cases) => ({
          ...cases,
          [name]: value,
        }));
        console.log(cases);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("",cases).then(resp=>{

        }).catch(e)
        console.log(cases);
    }
    return(
        <>
            <h1>hello</h1>
            <form onSubmit={handleSubmit}>
            <label>Enter Title</label>
            <input type="text" name="title" value={cases.title} onChange={handleChange}/>
            <label>Add Your Description</label>
            <textarea rows={5} cols={50} name="description" value={cases.description} onChange={handleChange}></textarea>
            {/* <label>Add your supporting documents</label>
            <br></br>
            <input type="file" name="document"/> */}
            <button type="submit">Submit</button>
            </form>
        </>
    );

}
export default PatientCase;