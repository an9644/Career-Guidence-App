import React from 'react'

const Horinav = () => {
  return (
        <>
     <div className=' flex justify-between  mt-4 '>
    <div className=" ml-64 flex justify-cente w-96 h-12 rounded-xl hover:shadow-lg focus-within:shadow-lg hover:border-black border transition duration-300  bg-white overflow-hidden">
    <div className="grid place-items-center h-full w-12 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    <input className=" h-full w-full  text-md text-gray-550  " type="text" id="search" placeholder="Search here.." /> 
</div>        
<div className="flex justify-cente gap-5   ">                    
</div>
     </div>
        </>
  )
}

export default Horinav