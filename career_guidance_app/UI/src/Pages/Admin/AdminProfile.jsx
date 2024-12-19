import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import AdminL from '../../layouts/AdminL';

const Updateadmin = () => {
    const [adminDetails, setAdminDetails] = useState([]);
    const [userName, setUserName] = useState(''); // Add a state variable to store the username

    useEffect(() => {
      const loggedinUser = localStorage.getItem('username');
      if (loggedinUser) {
        setUserName(loggedinUser);
      }
    }, []);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        if (userName) { // Check if userName is not empty
          const response = await fetch(`http://localhost:8080/getadmin?userName=${userName}`, {
            method: 'GET',
            credentials: 'include',
            headers: { "Content-Type": "application/json" }
          });
        if(!response){
            alert("Failed to fetch data")
        }
        const adminDetails = await response.json();
        if (Array.isArray(adminDetails) ){
            setAdminDetails(adminDetails)
            console.log(adminDetails);   
          }   }         
         } catch (error) {
        console.error(error);
      }
    };
    fetchAdminDetails();
  }, [userName]);// Add userName as a dependency to the useEffect hook
  return (
    <>

<div className="bg-[url(./assets/Images/1.png)] fixed bg-cover w-screen h-screen">
<AdminL></AdminL>
{adminDetails && adminDetails.length > 0 && (
    <div className="container mx-auto p-4 mt-4 ml-80">
      <div className='w-[800px] h-auto bg-teal-200 p-4 rounded-xl shadow-lg shadow-fuchsia-400 hover:shadow-fuchsia-500'>
    <div className='text-2xl font-bold text-fuchsia-700  '>Admin Profile</div>
    <table className='w-[320px] ml-12'>
    <tbody>
       <tr>
        <td className='text-fuchsia-900'><b>UserName:</b></td> 
        <td>{adminDetails[0].userName} </td>
        </tr> <tr className=''>
        <td className='text-fuchsia-900'><b>Name:</b></td> 
        <td className=''>{adminDetails[0].name} </td>
        </tr><tr className=''>
        <td className='text-fuchsia-900'><b>Email:</b></td> 
        <td className=''>{adminDetails[0].email} </td>
        </tr><tr className=''>
        <td className='text-fuchsia-900'><b>Phone Number:</b></td> 
        <td className=''>{adminDetails[0].phoneNumber} </td>
        </tr>
     </tbody>
    </table>
  </div>
  <div className='mt-4 w-[800px] h-auto bg-teal-200 p-4 rounded-xl shadow-lg shadow-fuchsia-400 hover:shadow-fuchsia-500'>
            <div className='text-2xl font-bold text-fuchsia-700  '>Personal Details </div>

            <table className='w-[670px] ml-12'>
            <tbody className=''>
               <tr className=''>
                <td className='text-fuchsia-900' ><b>Address:</b></td> 
                <td >{adminDetails[0].address.address} </td>
                </tr> <tr className=''>
                <td className='text-fuchsia-900'><b>City:</b></td> 
                <td className=''>{adminDetails[0].address.city} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>State:</b></td> 
                <td className=''>{adminDetails[0].address.state} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>Pincode:</b></td> 
                <td className=''>{adminDetails[0].address.pincode} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>Country:</b></td> 
                <td className=''>{adminDetails[0].address.country} </td>
                </tr>
             </tbody>
            </table>

          </div>
    
          <div className='mt-[100px]'>
          <Link to='/adminprofile' className=' rounded-xl  ml-96  p-4 bg-fuchsia-600 text-lg  text-black hover:bg-fuchsia-900 text-white shadow-xl '>Edit Profile</Link>
          </div>
             
            </div>
          )}
    </div>
    </>
  )
}

export default Updateadmin