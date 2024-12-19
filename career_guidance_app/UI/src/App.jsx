import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Login from './Pages/Login'
import Signup from './Pages/Signup';

import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";

import Mentorship from './Pages/Mentorship';
import Bookingses from './Pages/Bookingses';
import Success from './Pages/A/Success';
import Payment from './Pages/Payment';
import Councillor from './Pages/Councillor';

import Podcast from './Pages/Podcast';

import Settings from './Pages/Settings';
import Education from './Pages/Education';
import Qualification from './Pages/Qualification';

import Addadmiin from './Pages/Admin/Addadmiin';
import ViewAdmin from './Pages/Admin/ViewAdmin';

import Dashbord from './Pages/Admin/Dashbord';
import Userlist from './Pages/Admin/Userlist';
import Podcastadmin from './Pages/Admin/Podcastadmin';
import Jobadmin from './Pages/Admin/Jobadmin'
import ViewJob from './Pages/Admin/ViewJob';
import Councilloradmin from './Pages/Admin/Councilloradmin';
import ViewPodcat from './Pages/Admin/ViewPodcat';
import ViewCouncillor from './Pages/Admin/ViewCouncillor';
import AdminProfile from './Pages/Admin/AdminProfile';
import Contactas from './Pages/Contactas';
import UserProfile from './Pages/UserProfile';
import Updateadmin from './Pages/Admin/Updateadmin';




const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        {/*Prottected Routes*/}
        <Route path='/home' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        {/* Mentorship Pages */}
        <Route path='/mentorship' element={<Mentorship />}/>
        <Route path='/booksession' element={<Bookingses />} />
        <Route path='/bksuccess' element={<Success />}/>
        <Route path='/getallcouncil' element={<Councillor />}/>
        <Route path='/payment' element={<Payment />} />
        <Route path='/councillors' element={<Councillor />} />
        {/* Podcast */}
        <Route path='/podcast' element={<Podcast />} />
        {/* Settings  */}
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/settings' element={<Settings />} />
        <Route path='/education' element={<Education />} />
        <Route path='/qualification' element={<Qualification />}/>
        {/*Admin  */}
        <Route path='/dashboard' element={<Dashbord />} />
        <Route path='/addadmin' element={<Addadmiin />}/>
        <Route path='/viewadmin' element={<ViewAdmin />} />
        <Route path='/userlist' element={<Userlist />}/>
        <Route path='/addpodcast' element={<Podcastadmin />}/>
        <Route path='/viewpodcast' element={<ViewPodcat />}/>
        <Route path='/addjob' element={<Jobadmin />}/>
        <Route path='/viewjob' element={<ViewJob />}/>
        <Route path='/addcouncil' element={<Councilloradmin/>} />
        <Route  path='/viewcouncil' element={<ViewCouncillor/>}/>
        <Route path='/admindetails' element={<AdminProfile/>}/>
        <Route path='/adminprofile' element={<Updateadmin/>}/>
        <Route path='/contactus' element={<Contactas />}/>
        </>
        
    ))   



  return (
    <RouterProvider router={router} />
  )
};

export default App