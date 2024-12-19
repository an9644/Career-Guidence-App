import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [Name,setName]=useState('')
    const [UserName,setUsername]=useState('')
    const [Password,setPassword]=useState('')
    // const [userType,setuserType]=useState('admin')
    const navigate=useNavigate()

    const handleSignup =async (e)=>{
        e.preventDefault();
        const newuser={Name,UserName,Password}
        // console.log(Name,UserName,Password,userType);
        
        const res= await fetch("http://localhost:8080/signup",{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newuser)
        })
        console.log(res);        
        if(res.ok){
            alert("Signup Sucessfully")
            navigate('/')
        }else{
            alert("Signup Failed")
        }
    }
    
  return (
    <div className="h-screen bg-cover bg-center bg-[url('./assets/Images/bg5.jpeg')]" >
    <div className="flex justify-center items-center h-full">
        <div className="bg-transparent backdrop-blur-md h-auto max-w-md w-full mx-4 rounded-xl  shadow shadow-2xl  p-8 border border-gray-200">

            <p className="text-3xl font-bold text-center mb-4 text-gray-900">Sign In</p>
            <form onSubmit={handleSignup}>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="name" > Name:</label>
                    <input type="text" id="name" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={Name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="username" >Username:</label>
                    <input type="text" id="username"  className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={UserName} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="password">Password:</label>
                    <input type="password" id="password"  className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={Password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                {/* <div className="mb-4">
                    <label className=" mb-2 text-sm text-gray-600 font-medium">Role :</label>
                    <select id="userType" className="w-full px-4 py-2 border rounded-lg" value={userType} onChange={(e)=>setuserType(e.target.value)} >
                        <option value="">Select userType</option>
                        <option value="admin">admin</option>
                        <option value="user">user</option>
                    </select>
                </div> */}
                <input type="submit" value="Create Account" className="mt-2 bg-gray-400 text-black ml-28 border border-gray-900	hover:bg-gray-700 hover:border border-gray-200 text-white font-bold py-2 px-4 rounded" />
                <p className="mt-4 text-gray-600">Already have an Account? &nbsp;<Link className="text-gray-500	" to="/"> Login</Link></p>
            </form>
        </div>
    </div>
</div>
  )
}

export default Signup