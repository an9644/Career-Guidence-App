import React, { useEffect ,useState} from 'react'; 
import bg2 from '../assets/Images/bg2.jpg'
import jpeg2 from '../assets/Images/2.jpeg'
import Navbar1 from '../components/User/Navbar1';
import Horinav from '../components/User/Horinav';
import Homeicons from '../components/User/Homeicons';
import { Link } from 'react-router-dom';

const Home = () => {
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
    <div className=' bg-[url(./assets/Images/1.png)] bg-cover h-screen'>
       
       <div className="bg-transparent fixed backdrop-blur-lg h-screen w-32 rounded-xl m-2 flex flex-col">
      <Navbar1 /> </div>
      <div className="bg-transparent fixed backdrop-blur-sm h-screen w-56 ml-36 rounded-xl m-2 ">
        <Homeicons /> </div>
      <div className=" bg-transparent absolute  ml-96  backdrop-blur-sm h-screen w-[1450px] m-2 rounded-xl">
             
              <Horinav />  
              <div className="relative  ">
                <img src={bg2} alt="img" className="w-[1440px] h-64 rounded-xl m-2 object-cover" />
                <button className="absolute bg-gray-300 ml-28 top-1/2 mt-24 transform -translate-x-1/2 -translate-y-1/2 text-black hover:bg-gray-700 hover:text-white font-bold py-2 px-8 rounded">
                Explore more  </button>
              </div>              

              <div className="text-center text-3xl font-bold text-fuchsia-700"> Welcome to Career Path <br /><p className="mt-4">
                  Its a Career Guidence App Here you will get every guidance for your future career. </p>
              </div>
              <div className="text-xl text-fuchsia-700 mt-4 ml-4">Some of the career podcast. </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Podcasts.length>0?(
              
              Podcasts.map((Podcast)=>{
                return(
                  <div className="bg-teal-200 max-w-md h-fit ml-9 my-4 rounded-xl p-5"  
                    key={Podcast._id} >
                        <img src={jpeg2} className="rounded-xl w-80 h-64 mx-auto object-cover"/>
                        <div id="profname" className="text-xl text-fuchsia-900 font-bold text-center mt-4">{Podcast.podcastName}</div>
                        <div id="professional" className=" text-fuchsia-900 text-lg ml-[130px]">{Podcast.councilName}</div>
                        <div id="description" className=" text-gray-500 text-lg text-center mt-4">{Podcast.description}    
                        <div id="rating" className=" text-gray-500 text-lg text-center mt-4">{Podcast.rating}              </div>
                        </div>
                    <div><button className="bg-teal-400 mt-1 ml-36 p-3 rounded-xl hover:bg-teal-800  hover:text-white"><Link to='/booksession'>Entroll Now</Link> </button></div>
               </div>
                )
                })):(
                  <div className="text-center text-3xl font-bold text-fuchsia-700"> No Podcast Available </div>
                )
              }
                </div>  
              <div className='  justify-between  mt-4 '>
                  </div>
            </div>  
             </div>
             
          
  );
};

export default Home;