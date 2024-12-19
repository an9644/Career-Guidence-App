import React from 'react'
import Navbar1 from '../components/User/Navbar1'


const Mainlayout = ({children}) => {
  return (
    <>
   <div className=' bg-[url(./assets/Images/1.png)] bg-cover h-screen backdrop-blur-lg'>
       
       <div className="bg-transparent fixed  h-screen w-32 rounded-xl m-2 flex flex-col">
      <Navbar1 /> 
      {children}
      </div>
      
               </div> 
    </>
  )
}

export default Mainlayout