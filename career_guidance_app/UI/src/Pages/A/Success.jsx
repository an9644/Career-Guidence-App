import React from 'react'
import Mainlayout from '../../layouts/Mainlayout'
import ML2 from '../../layouts/ML2'
import Menticons from '../../components/User/Menticons'
import { Link } from 'react-router-dom'

const Success = () => {    
    return(
      <>
      <Mainlayout>
    <div className="bg-transparent  backdrop-blur-sm fixed  h-screen w-44 ml-32 rounded-xl m-2 ">
      <Menticons />     </div>
    <div className="bg-transparent backdrop-blur-sm fixed ml-80   h-screen w-[1450px] m-2 rounded-xl">
        <ML2>
        <div class="text-center text-4xl font-bold mt-28 text-fuchsia-700">
            Congradulation!!  Your Booking  Has Completed ..
          </div>
          <div className="text-center text-4xl font-bold mt-28 text-fuchsia-700">Our Employee Will contact You shortly.....</div>
          <button className="mt-12 bg-gray-700 ml-[600px] p-2 rounded-xl text-white hover:bg-fuchsia-700"><Link to="/mentorship">Go Back</Link></button>        
        </ML2>
         </div>
    </Mainlayout>
      </>
    )
  
}

export default Success