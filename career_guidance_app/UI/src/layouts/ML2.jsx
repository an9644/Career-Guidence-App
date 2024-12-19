import React from 'react'
import Horinav from '../components/User/Horinav'


const ML2 = ({children}) => {
  return (
    <>
    <div className=" bg-transparent fixed   backdrop-blur-sm h-screen w-[1450px] m-2 rounded-xl"> 
      <Horinav />
      {children}
         </div>
    </>
  )
}

export default ML2