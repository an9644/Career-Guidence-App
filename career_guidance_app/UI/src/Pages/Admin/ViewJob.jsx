import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import AdminL from '../../layouts/AdminL'
import bg2 from '../../assets/Images/2.jpeg'


const ViewJob = () => {
    const [Jobs,setJobs]=useState([])

    const fetchJobs = async () => {
      try {
        const response= await fetch('http://localhost:8080/getalljobs',{
          method:'GET',
          credentials:'include',
          headers:{"Content-Type":'application/json'},
        })
        if(!response){
          alert('Failed to fetch data')
        }
        const Jobs=await response.json()
        if (Array.isArray(Jobs) ){
          setJobs(Jobs)
          console.log(Jobs);   
        }

      } catch (error) {
        console.error(error);        
      }
    }
    useEffect(()=>{
    fetchJobs();
  },[])
  const handleRemoveuser = async (JobId) => {

    if (window.confirm('Are you sure you want to remove this Job?')) {
      try {
        const res = await fetch(`http://localhost:8080/deletejob?JobId=${JobId}`, {
          method: 'DELETE',
          credentials:'include'
        });
        if (res.ok) {
          alert('Job removed successfully');
          fetchJobs();          
        } else {
          const errorData = await res.json();
          alert(errorData.message || 'Error removing dish');
        }
      }catch (error) {
        console.error(error);
      }}
  };
 
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
        </div>
        <div className=" ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Jobs.length>0?(
                      
                      Jobs.map((Job)=>      (
                  <div className="bg-teal-200 max-w-md h-fit ml-9 my-4 rounded-xl p-5 shadow-xl"
                    key={Job._id} >
                          <img src={bg2} className="rounded-xl w-72 h-72 mx-auto object-cover shadow-xl" />
                          <div id="profname" className="text-xl font-bold text-center mt-1">{Job.jobName}</div>
                          <div className="flex justify-center">
                              <span className="text-yellow-400">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </span><span className="ml-2 text-gray-600">({Job.rating}/5)</span>
                          </div>
                          <div id="description" className="text-lg text-center mt-4">
                              {Job.description}
                              <br /><p className="ml-8 mt-3">{Job.salarayrange} </p>
                          </div> 
                          <div className='ml-36'>
            <button onClick={() => handleRemoveuser(Job._id)} className="bg-teal-400 mt-1  p-3 rounded-xl hover:bg-teal-800  hover:text-white"> Delete User </button>
        </div>                  
                      </div>
                )
                )):(
                  <div className="text-center text-3xl font-bold text-fuchsia-700"> No Job Available </div>
                )
              }              
          </div>
        </div>
    
    </>
  )
}

export default ViewJob