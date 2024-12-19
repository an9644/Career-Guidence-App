import React,{useState,useEffect} from 'react'
import jpeg6 from '../assets/Images/6.jpeg'
import Mainlayout from '../layouts/Mainlayout'
import Homeicons from '../components/User/Homeicons'
import ML2 from '../layouts/ML2'


const Jobs = () => {
  const [Jobs,setJobs]=useState([])

  useEffect(()=>{
    const fetchJobs = async () => {
      try {
        const response= await fetch('http://localhost:8080/getallpodcast',{
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
    fetchJobs();
  },[])
  return (
    <Mainlayout>
       <div className="bg-transparent fixed backdrop-blur-sm h-screen w-56 ml-36 rounded-xl m-2 ">
        <Homeicons /> </div>
      <div className=" bg-transparent absolute  ml-96  backdrop-blur-sm h-screen w-[1450px] m-2 rounded-xl">
             <ML2>
             <div className="text-4xl ml-6 mt-12  text-fuchsia-700 font-bold">These are some of the jobs that was highly recommended </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Jobs.length>0?(
                      
                      Jobs.map((Job)=>{
                return(
                  <div className="bg-teal-200 max-w-md h-fit ml-9 my-4 rounded-xl p-5 shadow-xl"
                    key={Job._id} >
                          <img src={jpeg6} className="rounded-xl w-72 h-72 mx-auto object-cover shadow-xl" />
                          <div id="profname" className="text-xl font-bold text-center mt-1">{Job.jobName}</div>
                          <div className="flex justify-center">
                              <span className="text-yellow-400">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </span><span className="ml-2 text-gray-600">({Job.rating}/5)</span>
                          </div>
                          <div id="description" className="text-lg ml-8 mt-4">
                              {Job.description}
                              <br /><p className="ml-8 mt-3">Salary Range : 5LK-6LK per year </p>
                          </div>                   
                      </div>
                )
                })):(
                  <div className="text-center text-3xl font-bold text-fuchsia-700"> No Podcast Available </div>
                )
              }              
          </div>
           </ML2> 
        </div>
    </Mainlayout>
  )
}

export default Jobs