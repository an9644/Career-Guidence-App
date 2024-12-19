import React from 'react'
import DNavbar from '../components/Admin/DNavbar'

const AdminL = ({children}) => {
  return (
    <>
    <div className="w-64  bg-transparent backdrop-blur-sm p-4 h-screen fixed top-0 left-0 shadow-md text-center">
        <DNavbar />
        {children}
        </div>

    </>
  )
}

export default AdminL