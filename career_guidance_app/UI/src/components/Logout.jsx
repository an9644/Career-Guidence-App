import React from 'react'
import  {useNavigate} from 'react-router-dom'

const Logout = () => {
    const navigate =useNavigate();
    const handleLogout= async()=>{
        await fetch('http://localhost:8080/logout',{
            method:'GET',
            credentials :"include",
        });
        document.cookie='AuthToken=; Max-Age=0';
        navigate('/');
    }
    return (
        <button onClick={handleLogout} className=" rounded-md  text-gray-500 mr-6 mt-5">
           Logout   </button>

  )
}

export default Logout