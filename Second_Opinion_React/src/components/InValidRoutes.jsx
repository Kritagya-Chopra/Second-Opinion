import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const InValidRoutes = ({Component}) => {
    const navigate=useNavigate();
    useEffect(()=>{
        const isToken=sessionStorage.getItem('id');
        if(!isToken){
            navigate('/login')
        }
    })
  return (
    <div>
        <Component/>
    </div>
  )
}

export default InValidRoutes