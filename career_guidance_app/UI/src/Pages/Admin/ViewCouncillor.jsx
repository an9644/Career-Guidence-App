import React,{useState ,useEffect} from 'react'
import AdminL from '../../layouts/AdminL'
import { Link } from 'react-router-dom'
import bg2 from '../../assets/Images/2.jpeg'

const ViewCouncillor = () => {
    const [Councillors,setCouncillor]=useState([])

      const fetchCouncillors= async ()=>{
        try {
          const response=await fetch('http://localhost:8080/getallcouncillors',{
            method:'GET',
            credentials:'include',
            headers:{"Content-Type":"appication/json"},
          })
          if(!response){
            alert('Failed to fetch data')
          }
          const Councillors =await response.json()
          if (Array.isArray(Councillors) ){
            setCouncillor(Councillors)
            console.log(Councillors);   
          }       
         } catch (error) {
          console.error(error);          
        }
      }
      useEffect(()=>{
      fetchCouncillors();
    },[])
    const handleRemoveDish = async (councilId) => {
      if (window.confirm('Are you sure you want to remove this Councillor?')) {
          const res = await fetch(`http://localhost:8080/deletecouncillor?councilId=${councilId}`, {
            method: 'DELETE',
            credentials:'include'
          });
  
          if (res.ok) {
            alert('Councillor removed successfully');
            fetchCouncillors();
          } else {
            const errorData = await res.json();
            alert(errorData.message || 'Error removing Councillor');
          }

        }}
    return (
   <>
    <div className=' bg-[url(./assets/Images/1.png)] fixed bg-cover w-screen h-screen'>
      <AdminL>  </AdminL>  
   <div className="ml-64 p-4 mt-12">
        <div className="flex justify-between items-center mb-4">
            
        <div className="grid grid-cols-2 gap-5 text-2xl text-fuchsia-800 text-center">
            <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"> <Link to="/addcouncil">Add Councillor</Link></button>
            <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"> <Link to="/viewcouncil">View Councillor</Link></button>
            </div> </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {Councillors.length>0?(
              
              Councillors.map((Councillor)=> (
                  <div className="bg-teal-200 shadow-xl max-w-md h-96 ml-9 my-4 rounded-xl div-5"
                    key={Councillor._id} >
                    <img src={bg2} alt='img' className="shadow-xl rounded-full w-32 h-32 mx-auto object-cover" />
                    <div id="profname" className="text-xl font-bold text-center">{Councillor.councilName}</div>
                    <div id="professional" className="text-lg text-center">{Councillor.occupation}</div>
                    <div id="description" className="text-lg text-center mt-4 ">
                        {Councillor.description}            </div>
                    <div className="flex justify-center">
                        <span className="text-yellow-400">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </span><span className="ml-2 text-gray-600">({Councillor.rating}/5)</span>
                        <div className='ml-24'>
            <button onClick={() => handleRemoveDish(Councillor._id)} className="bg-teal-400 mt-1  p-3 rounded-xl hover:bg-teal-800  hover:text-white"> Delete Councillor </button>
        </div>
                    </div>
                   
                </div>
                
                )
                )):(
                  <div  className="text-center text-3xl font-bold text-fuchsia-700"> No Councillor Available </div>
                )
              }         
          </div>

            
        </div>
       </div>
   
   </>
  )
}

export default ViewCouncillor
