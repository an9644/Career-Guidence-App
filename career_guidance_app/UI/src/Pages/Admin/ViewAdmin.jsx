import React, { useState, useEffect } from 'react';
import AdminL from '../../layouts/AdminL';

const ViewAdmin = () => {
  const [adminDatas, setadminDatas] = useState([]);

    const fetchAdminData = async () => {
      try {
        const response = await fetch('http://localhost:8080/getalladmin',{
          method: 'GET',
          headers: {"Content-Type":"application/json"},
          credentials:'include'
        })
       
        const adminDatas = await response.json();
        if (Array.isArray(adminDatas) ){
          setadminDatas(adminDatas)
          console.log(adminDatas);   
        } 
           } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };
    useEffect(() => {
    fetchAdminData();
  }, []);
  const handleRemoveadmin = async (userName) => {
    if (window.confirm('Are you sure you want to remove this admin?')) {
        const res = await fetch(`http://localhost:8080/deleteadmin?userName=${userName}`, {
          method: 'DELETE',
          credentials:'include'
        });
         
        if (res.ok) {
          alert('Admin removed successfully');
          fetchAdminData();
        } else {
            alert('error deleting Admin.')
        }
      }

  };
 

  return (
    <>
    <div className=' bg-[url(./assets/Images/1.png)] bg-cover h-screen'>
    <div className='fixed'>  <AdminL>      </AdminL>   </div>
        <div className="grid grid-cols-1 ml-56  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {adminDatas.length>0?(

        adminDatas.map((adminData) => (
      <div className="bg-teal-200 w-96 text-center h-fit ml-12 my-4 rounded-xl mt-24 p-5"
        key={adminData._id} >
        <p id="profname"className="text-xl text-fuchsia-900 font-bold text-center mt-4" >{adminData.name} </p>
        <p id="professional" className=" text-fuchsia-900 text-lg " > {adminData.userName} </p>
        <p id="description" className=" text-gray-500 text-lg text-center mt-4"  > {adminData.phoneNumber}</p>
        <p id="rating" className=" text-gray-500 text-lg text-center mt-4" >{adminData.email} </p>
        <div>
            <button onClick={() => handleRemoveadmin(adminData._id)} className="bg-teal-400 mt-1  p-3 rounded-xl hover:bg-teal-800  hover:text-white"> Delete Admin </button>
        </div>
      </div>
    ) )):(
      <div className="text-center text-3xl font-bold text-fuchsia-700"> No Admin Available </div>

    )}  </div>
        </div>
      
    </>
  );
};

export default ViewAdmin;