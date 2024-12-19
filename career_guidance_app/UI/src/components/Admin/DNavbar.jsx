import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/Images/logo.png'
import bg from '../../assets/Images/4.jpeg'
import Logout from '../../components/Logout'

const DNavbar = () => {
      const Username=localStorage.getItem('userType')
      console.log(Username)

  return (
    <>
        <ul>
            <li className=""><div className="grid grid-cols-2">
                <div className="relative"> <img  src={logo}   alt="logo"  className="object-cover h-full w-24 h-24 rounded-xl m-2"  />  </div>
                <div className="mt-7 font-bold text-fuchsia-800 text-3xl">Career Path..</div>
            </div></li>
            <li className="ml-4"> <div className="flex  ">
                <img className=" rounded-full border border-7 " src={bg}   width="60" height="60" />
                        <p className="m-3"><b><Link to={'/admindetails'}>{Username}</Link></b> </p>
                </div></li>
                <li className="py-2 text-fuchsia-800"><Link to="/addadmin" className="text-xl font-medium text-gray-700">Add Admin</Link></li>
            <li className="py-2 text-fuchsia-800"><Link to="/dashboard" className="text-xl font-medium text-gray-700">Dashboard</Link></li>
            <li className="py-2 text-fuchsia-800"><Link to="/userlist" className="text-xl font-medium text-gray-700">Users</Link></li>
            <li className="py-2 text-fuchsia-800"><Link to="/addpodcast" className="text-xl font-medium text-gray-700"> Podcasts</Link></li>
            <li className="py-2 text-fuchsia-800"><Link to="/addjob" className="text-xl font-medium text-gray-700"> Jobs</Link></li>
            <li className="py-2 text-fuchsia-800"><Link to="/addcouncil" className="text-xl font-medium text-gray-700"> Councillors</Link></li>
            <li className="text-xl font-medium text-gray-900"><Logout /> </li>
        </ul>
    </>

  )
}

export default DNavbar