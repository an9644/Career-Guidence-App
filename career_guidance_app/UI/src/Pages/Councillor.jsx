import React, { useEffect, useState } from 'react'
import Mainlayout from '../layouts/Mainlayout'
import ML2 from '../layouts/ML2'
import Menticons from '../components/User/Menticons'
import jpeg2 from '../assets/Images/2.jpeg'


const Councillor = () => {
    const [Councillors,setCouncillors]=useState([])

    useEffect(()=>{
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
          const Councillors=await response.json()
          if (Array.isArray(Councillors) ){
            setCouncillors(Councillors)
            console.log(Councillors);   
          }       
         } catch (error) {
          // setLoading('false')
          console.log('Error:',error);          
        }
      }
      fetchCouncillors();
    },[])
   
  return (
    <>
    <Mainlayout>
    <div className="bg-transparent fixed  backdrop-blur-sm h-screen w-44 ml-28 rounded-xl m-2 ">
      <Menticons />     </div>
    <div className="bg-transparent fixed ml-80  backdrop-blur-sm h-screen w-[1450px] mt-2 rounded-xl">
      <ML2>
      <div className="text-4xl ml-6 mt-12  font-bold">These are our Trusted Councillor</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Councillors.length>0?(
              
              Councillors.map((Councillor)=>{
                return(
                  <div className="bg-teal-200 shadow-xl max-w-md h-72 ml-9 my-4 rounded-xl div-5"
                    key={Councillor._id} >
                    <img src={jpeg2} className="shadow-xl rounded-full w-32 h-32 mx-auto object-cover" />
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
                    </div>
                </div>
                )
                })):(
                  <div className="text-center text-3xl font-bold text-fuchsia-700"> No Councillor Available </div>
                )
              }         
          </div>

      </ML2>
      </div>
    </Mainlayout>

  
    </>
  )
}

export default Councillor