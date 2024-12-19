import React,{useState} from 'react'
import AdminL from '../../layouts/AdminL'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Addadmiin = () => {
  const [Name,setName]=useState('')
  const [UserName,setUserName]=useState('')
  const [Password,setPassword]=useState('')   
    const navigate=useNavigate()

    const handleAdmin =async (e)=>{
        e.preventDefault();
        const newadmin={Name,UserName,Password}
        
        const res= await fetch("http://localhost:8080/addadmin",{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newadmin)
        })
        console.log(res);        
        if(res.ok){
            alert("Admin  added Sucessfully")
            navigate('/viewadmin')
        }else{
            alert("Failed to add admin")
        }
    }
  return (
     <>
        <div className="bg-[url(./assets/Images/1.png)] fixed bg-cover w-screen h-screen">
      <AdminL></AdminL>

     <div className="ml-64 p-4 mt-12">
     <div className="grid grid-cols-2 gap-5 text-2xl text-fuchsia-800 text-center">
            <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"> <Link to="/addadmin ">Add Admin</Link></button>
            <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"> <Link to="/viewadmin">View Admin</Link></button>
            </div>

        <div className="bg-transparent backdrop-blur-md h-auto  w-[700px] mx-4 rounded-xl  shadow shadow-2xl ml-[400px] mt-36 p-8 border border-gray-200">

            <p className="text-3xl font-bold text-center mb-4 text-fuchsia-900">Add Admin</p>
            <form onSubmit={handleAdmin}>
            <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="adminname" >Admin Name:</label>
                    <input type="text" id="adminname" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={Name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="username" > Username:</label>
                    <input type="text" id="username" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={UserName} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="password" >Password :</label>
                    <input type="password" id="password" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={Password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                
                
                <button type="submit"  className="mt-2 bg-fuchsia-600 text-black ml-44 border border-gray-900	hover:bg-fuchsia-700 hover:border border-gray-200 text-white font-bold py-2 px-4 rounded-xl"> Add Admin</button>
            </form>
        </div>
    </div>

     </div>
     </>  
  )
}

export default Addadmiin