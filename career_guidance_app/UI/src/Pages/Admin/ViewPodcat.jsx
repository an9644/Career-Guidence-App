import React,{useState,useEffect} from 'react'
import AdminL from '../../layouts/AdminL'
import { Link } from 'react-router-dom'
import bg2 from '../../assets/Images/2.jpeg'

const ViewPodcat = () => {
  const [Podcasts,setPodcast]=useState([])

    const fetchPodcast = async () => {
      try {
        const response= await fetch('http://localhost:8080/getallpodcast',{
          method:'GET',
          credentials:'include',
          headers:{"Content-Type":'application/json'},
        })
        if(!response){
          alert('Failed to fetch data')
        }
        const Podcasts=await response.json()
        if (Array.isArray(Podcasts) ){
          setPodcast(Podcasts)
          console.log(Podcasts);   
        }

      } catch (error) {
        console.error(error);        
      }
    }
    useEffect(()=>{
fetchPodcast();
  },[])
  const handleRemoveuser = async (PodcastId) => {

    if (window.confirm('Are you sure you want to remove this Podcast?')) {
      try {
        const res = await fetch(`http://localhost:8080/deletepodcast?PodcastId=${PodcastId}`, {
          method: 'DELETE',
          credentials:'include'
        });
        if (res.ok) {
          alert('Podcast removed successfully');
          fetchPodcast();          
        } else {
          const errorData = await res.json();
          alert(errorData.message || 'Error removing Podcast');
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
               <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"><Link to="/addpodcast">Add Podcast</Link></button>
               <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"><Link to="/viewpodcast">View Podcasts</Link></button>
            </div>
            
        </div>
        </div>
        <div className=" ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Podcasts.length>0?(
                      
                      Podcasts.map((Podcast)=>      (
                  <div className="bg-teal-200 max-w-md h-fit ml-9 my-4 rounded-xl p-5 shadow-xl"
                    key={Podcast._id} >
                          <img src={bg2} className="rounded-xl w-72 h-72 mx-auto object-cover shadow-xl" />
                          <div  className="text-xl font-bold text-center mt-1">{Podcast.podcastName}</div>
                          <div className="flex justify-center">
                              <span className="text-yellow-400">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </span><span className="ml-2 text-gray-600">({Podcast.rating}/5)</span>
                          </div>
                          <span className='text-center ml-44' >{Podcast.councilName}</span>
                          <div id="description" className="text-lg text-center mt-4">
                              {Podcast.description}
                              <br />
                              </div>
                              <div className=' gap-2  ml-16'>
            <button onClick={() => handleRemoveuser(Podcast._id)} className="bg-teal-400 mt-1  p-3 rounded-xl hover:bg-teal-800  hover:text-white"> Delete  </button>
        </div>
                      </div>
                )
                )):(
                  <div className="text-center text-3xl font-bold text-fuchsia-700"> No Podcast Available </div>
                )
              }              
          </div>
        </div>
    
    </>
  )
}
  
export default ViewPodcat