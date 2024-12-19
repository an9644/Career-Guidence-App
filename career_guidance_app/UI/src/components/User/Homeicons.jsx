import React from 'react'
import { useNavigate } from 'react-router-dom';
import  logo from '../../assets/Images/logo.png'

const Homeicons = () => {
    const navigate =useNavigate();
    const handleJobs = () => {
      navigate('/jobs'); 
    };
    
  return (
    <>
        <div className="grid grid-cols-2">
            <div className="relative"> <img  src={logo}   alt="logo"  className="object-cover h-full w-24 h-24 rounded-xl m-2"  />  </div>
            <div className="mt-7 font-bold text-fuchsia-800 text-3xl">Career Path..</div>
        </div>
        <hr className="border-t-2 border-purple-700 w-full"/>    
        <div className="flex flex-col gap-5 mt-4">
            <button onClick={handleJobs} className="text-fuchsia-700"> Jobs</button>
    </div>
    </>
  )
}

export default Homeicons