import React,{useState} from 'react'
import AdminL from '../../layouts/AdminL'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Podcastadmin = () => {
  const [PodcastName,setPodcastName]=useState('')
  const [CounciltName,setCounciltName]=useState('')
  const [PodcastId,setPodcastId]=useState('')
    const [Rating,setRating]=useState('')
    const [Description,setDescription]=useState('')
   
    const navigate=useNavigate()

    const handlePodcast =async (e)=>{
        e.preventDefault();
        const newuser={PodcastName,CounciltName,PodcastId,Rating,Description}
        
        const res= await fetch("http://localhost:8080/addpodcast",{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newuser)
        })
        console.log(res);        
        if(res.ok){
            alert("Podcast  added Sucessfully")
            navigate('/viewpodcast')
        }else{
            alert("Failed to add Podcast")
        }
    }
  return (
   <>
        <div className="bg-[url(./assets/Images/1.png)] fixed bg-cover w-screen h-screen">
      <AdminL></AdminL>

     <div className="ml-64 p-4 mt-12">
        <div className="flex justify-between items-center mb-4">
            
            <div className="grid grid-cols-2 gap-5 text-2xl text-fuchsia-800 text-center">
               <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"> <Link to="/addpodcast">Add Podcast</Link></button>
               <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"> <Link to="/viewpodcast">View Podcasts</Link></button>
            </div>
            
        </div>

        <div className="bg-transparent backdrop-blur-md h-auto max-w-md w-full mx-4 rounded-xl  shadow shadow-2xl ml-[500px]  p-8 border border-gray-200">

            <p className="text-3xl font-bold text-center mb-4 text-fuchsia-900">Add Podcasts</p>
            <form onSubmit={handlePodcast}>
            <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="podcastname" >Podcast Name:</label>
                    <input type="text" id="podacastname" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={PodcastName} onChange={(e)=>setPodcastName(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="id" >Podcast Id:</label>
                    <input type="text" id="id" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={PodcastId} onChange={(e)=>setPodcastId(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="councilname" >Councillor Name:</label>
                    <input type="text" id="councilname" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={CounciltName} onChange={(e)=>setCounciltName(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="description">Description :</label>
                    <input type="text" id="description"  className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={Description} onChange={(e)=>setDescription(e.target.value)}/>
                </div> 
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="rating" >Rating :</label>
                    <input type="text" id="rating" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={Rating} onChange={(e)=>setRating(e.target.value)}/>
                </div>
                          
                
                <button type="submit"  className="mt-2 bg-fuchsia-600 text-black ml-28 border border-gray-900	hover:bg-fuchsia-700 hover:border border-gray-200 text-white font-bold py-2 px-4 rounded-xl"> Add Podcast</button>
            </form>
        </div>
    </div>

     </div>
     </>  
     )
}

export default Podcastadmin


