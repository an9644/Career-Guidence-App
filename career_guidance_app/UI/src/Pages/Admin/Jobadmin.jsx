import React,{useState} from 'react'
import AdminL from '../../layouts/AdminL'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Jobadmin = () => {
    const [JobName,setJobName]=useState('')
    const [JobId,setJobId]=useState('')
    const [Description,setDescription]=useState('')
    const [Rating,setRating]=useState('')
    const [SalaryRange,setSalaryRange]=useState('')
    const navigate=useNavigate()

    const handleJob =async (e)=>{
        e.preventDefault();
        const newuser={JobName,JobId,Description,Rating,SalaryRange}
        
        const res= await fetch("http://localhost:8080/addjob",{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newuser)
        })
        console.log(res);        
        if(res.ok){
            alert("job added Sucessfully")
            navigate('/viewjob')
        }else{
            alert("Failed to add job")
        }
    }
  return (
    <>
        <div className=' bg-[url(./assets/Images/1.png)] fixed w-screen bg-cover h-screen'>
        <AdminL>
        </AdminL>        
          <div className='text-center  ml-32  w-screen'>
         </div>
         <div className="ml-64 p-4 mt-12">
        <div className="flex justify-between items-center mb-4">
            
            <div className="grid grid-cols-2 gap-5 text-2xl text-fuchsia-800 text-center">

               <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"> <Link to="/addjob">Add Jobs</Link></button>
               <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"> <Link to="/viewjob">View Jobs</Link></button>
            </div>
            
        </div>

        <div className="bg-transparent backdrop-blur-md h-auto max-w-md w-full mx-4 rounded-xl  shadow shadow-2xl ml-[500px]  p-8 border border-gray-200">

            <p className="text-3xl font-bold text-center mb-4 text-fuchsia-900">Add Jobs</p>
            <form onSubmit={handleJob}>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="username" >Job:</label>
                    <input type="text" id="username" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={JobName} onChange={(e)=>setJobName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label  className=" text-gray-600" htmlFor="">Job Id:</label>
                    <input type="number" id="" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" 
                     value={JobId} onChange={(e)=>setJobId(e.target.value)}/>
                </div> 
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="description">Description :</label>
                    <input type="text" id="description"  className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                     value={Description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label  className=" text-gray-600" htmlFor="">Rating Of the Job :</label>
                    <input type="number" min="0" max="5" id="" className="mt-3 bg-gray-100 w-full p-2 rounded-lg"
                     value={Rating} onChange={(e)=>setRating(e.target.value)} />
                </div>  
                <div className="mb-4">
                    <label  className=" text-gray-600" htmlFor="">Salary Range :</label>
                    <input type="number"  id="" className="mt-3 bg-gray-100 w-full p-2 rounded-lg"
                     value={SalaryRange} onChange={(e)=>setSalaryRange(e.target.value)} />
                </div> 
                <button type='submit' className="mt-2 bg-fuchsia-600 text-black ml-32 border border-gray-900	hover:bg-fuchsia-700 hover:border border-gray-200 text-white font-bold py-2 px-4 rounded-xl">Add Job</button>
            </form>
        </div>
    </div>

        </div>

    </>
  )
}

export default Jobadmin