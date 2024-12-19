import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/Images/logo.png'

const Menticons = () => {
  return (
    <>
    {/* <div className="bg-transparent backdrop-blur-sm h-screen w-72 ml-1 rounded-xl m-2 "> */}
        <div className="grid grid-cols-2">
            <div className="relative"> <img  src={logo}    alt="logo"  className="object-cover h-full w-24 h-24 rounded-xl m-2"  />  </div>
            <div className="mt-7 font-bold text-fuchsia-800 text-3xl">Career Path..</div>
        </div>
        <hr className="border-t-2 border-purple-700 w-full" />    
        <div className="flex flex-col gap-5 mt-4">
            <button className="text-fuchsia-700"><Link to="/mentorship"> Mentorship</Link></button>
            <button className="text-fuchsia-700"><Link to="/booksession"> Book a session</Link></button>
            <button className="text-fuchsia-700"><Link to="/councillors">Professional</Link></button>
            <button className="text-fuchsia-700"><Link to="/payment">Payments</Link></button>


        </div>
    {/* </div> */}
    
    </>
  )
}

export default Menticons