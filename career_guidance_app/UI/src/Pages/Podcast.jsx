import React,{useState,useEffect} from 'react'
import Mainlayout from '../layouts/Mainlayout'
import Podicons from '../components/User/Podicons'
import ML2 from '../layouts/ML2'
import jpeg2 from '../assets/Images/2.jpeg'

const Podcast = () => {
    const [Podcasts,setPodcasts]=useState([])

  useEffect(()=>{
    const fetchPodcasts = async () => {
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
          setPodcasts(Podcasts)
          console.log(Podcasts);   
        }

      } catch (error) {
        console.error(error);        
      }
    }
    fetchPodcasts();
  },[])
  return (
    <>
        <Mainlayout>
        <div className="bg-transparent fixed  backdrop-blur-sm h-screen w-44 ml-28 rounded-xl m-2 ">
        <Podicons />     </div>
        <div className="bg-transparent fixed ml-80  backdrop-blur-sm h-screen w-[1450px] mt-2 rounded-xl">
        <ML2>
        <div className="p-2 text-5xl font-serif text-fuchsia-700 font-bold text-center mt-12 "> 
             These are the famous Podcasts<br/>
            <p className="mt-3">Entroll Now and Improve yourself </p> </div>
            <div className="text-5xl mt-7 ml-4 font-bold font-serif text-gray-600 text-center">        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {Podcasts.length>0?(
              
              Podcasts.map((Podcast)=>{
                return(
                  <div className="bg-teal-200 max-w-md h-fit ml-9 my-4 rounded-xl p-5"  
                    key={Podcast._id} >
                        <img src={jpeg2} className="rounded-xl w-80 h-64 mx-auto object-cover"/>
                        <p id="profname" className="text-xl text-fuchsia-900 font-bold text-center mt-4">{Podcast.podcastName}</p>
                        <p id="professional" className=" text-fuchsia-900 text-lg ml-[130px]">{Podcast.councilName}</p>
                        <p id="description" className=" text-gray-500 text-lg text-center mt-4">{Podcast.description}    
                        <p id="rating" className=" text-gray-500 text-lg text-center mt-4">{Podcast.rating}              </p>
                        </p>
                    <div><button className="bg-teal-400 mt-1 ml-36 p-3 rounded-xl hover:bg-teal-800  hover:text-white">Entroll Now </button></div>
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
    </>
  )
}

export default Podcast