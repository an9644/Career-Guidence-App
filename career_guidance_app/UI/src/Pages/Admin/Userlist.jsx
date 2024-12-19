import React, { useState, useEffect } from 'react';
import AdminL from '../../layouts/AdminL';

const Userlist = () => {
  const [userDatas, setUserData] = useState([]);

    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8080/getallusers',{
          method: 'GET',
          headers: {"Content-Type":"application/json"},
          credentials:'include'
        })
       
        const userDatas = await response.json();
        if (Array.isArray(userDatas) ){
          setUserData(userDatas)
          console.log(userDatas);   
        } 
           } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    useEffect(() => {

    fetchUserData();
  }, []);
  const handleRemoveuser = async (userName) => {

    if (window.confirm('Are you sure you want to remove this User?')) {
      try {
        const res = await fetch(`http://localhost:8080/deleteuser?userName=${userName}`, {
          method: 'DELETE',
          credentials:'include'
        });
        if (res.ok) {
          alert('User removed successfully');
          fetchUserData();          
        } else {
          const errorData = await res.json();
          alert(errorData.message || 'Error removing dish');
        }
      }catch (error) {
        console.error(error);
      }}
  };
 

  return (
    <>
    <div className=' bg-[url(./assets/Images/1.png)] bg-cover h-screen'>
    <div className='fixed'>  <AdminL>      </AdminL>   </div>
        <div className="grid grid-cols-1 ml-56  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userDatas.length>0?(

        userDatas.map((userData) => (
      <div className="bg-teal-200 w-96 text-center h-fit ml-12 my-4 rounded-xl mt-24 p-5"
        key={userData._id} >
        <p id="profname"className="text-xl text-fuchsia-900 font-bold text-center mt-4" >{userData.name} </p>
        <p id="professional" className=" text-fuchsia-900 text-lg " > {userData.email} </p>
        <p id="description" className=" text-gray-500 text-lg text-center mt-4"  > {userData.phoneNumber}</p>
        {/* <p id="rating" className=" text-gray-500 text-lg text-center mt-4" >{userData.address.address} </p> */}
        <div>
            <button onClick={() => handleRemoveuser(userData._id)} className="bg-teal-400 mt-1  p-3 rounded-xl hover:bg-teal-800  hover:text-white"> Delete User </button>
        </div>
      </div>
    ) )):(
      <div className="text-center text-3xl font-bold text-fuchsia-700"> No User Available </div>

    )}  </div>
        </div>
      
    </>
  );
};

export default Userlist;