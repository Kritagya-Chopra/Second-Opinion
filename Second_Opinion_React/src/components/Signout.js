import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Signout = () => {
    const navigate= useNavigate();
    useEffect(()=>{
        sessionStorage.clear();
        navigate('/');
    },[])
  return (
    <><div><h1>Hello</h1></div></>
  )
}
export default Signout