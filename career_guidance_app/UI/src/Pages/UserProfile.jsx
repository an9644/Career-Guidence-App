import React,{useState,useEffect} from 'react'
import Mainlayout from '../layouts/Mainlayout'
import Settingicons from '../components/User/Settingicons'
import { Link } from 'react-router-dom'

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [userName, setUserName] = useState(''); // Add a state variable to store the username

    useEffect(() => {
      const loggedinUser = localStorage.getItem('username');
      if (loggedinUser) {
        setUserName(loggedinUser);
      }
    }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (userName) { // Check if userName is not empty
          const response = await fetch(`http://localhost:8080/getuser?userName=${userName}`, {
            method: 'GET',
            credentials: 'include',
            headers: { "Content-Type": "application/json" }
          });
        if(!response){
            alert("Failed to fetch data")
        }
        const userDetails = await response.json();
        if (Array.isArray(userDetails) ){
            setUserDetails(userDetails)
            console.log(userDetails);   
          }   }         
         } catch (error) {
        console.error(error);
      }
    };
    fetchUserDetails();
  }, [userName]);// Add userName as a dependency to the useEffect hook

  return (
    <>
     <Mainlayout>
    <div className="bg-transparent fixed  backdrop-blur-sm h-screen w-44 ml-28 rounded-xl m-2 ">
    <Settingicons />     </div>
    <div className="bg-transparent fixed ml-80  backdrop-blur-sm h-screen w-[1450px] mt-2 rounded-xl">
    {userDetails && userDetails.length > 0 && (
            <div className="container mx-auto p-4 mt-4 ml-56">
              <div className='w-[800px] h-auto bg-teal-200 p-4 rounded-xl shadow-lg shadow-fuchsia-400 hover:shadow-fuchsia-500'>
            <div className='text-2xl font-bold text-fuchsia-700  '>User Profile</div>
            <table className='w-[320px] ml-12'>
            <tbody className=''>
               <tr className=''>
                <td className='text-fuchsia-900' ><b>UserName:</b></td> 
                <td >{userDetails[0].userName} </td>
                </tr> <tr className=''>
                <td className='text-fuchsia-900'><b>Name:</b></td> 
                <td className=''>{userDetails[0].name} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>Email:</b></td> 
                <td className=''>{userDetails[0].email} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>Phone Number:</b></td> 
                <td className=''>{userDetails[0].phoneNumber} </td>
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
                <td >{userDetails[0].address.address} </td>
                </tr> <tr className=''>
                <td className='text-fuchsia-900'><b>City:</b></td> 
                <td className=''>{userDetails[0].address.city} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>State:</b></td> 
                <td className=''>{userDetails[0].address.state} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>Pincode:</b></td> 
                <td className=''>{userDetails[0].address.pincode} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>Country:</b></td> 
                <td className=''>{userDetails[0].address.country} </td>
                </tr>
             </tbody>
            </table>

          </div>
          <div className='mt-4 w-[800px] h-auto bg-teal-200 p-4 rounded-xl shadow-lg shadow-fuchsia-400 hover:shadow-fuchsia-500'>
            <div className='text-2xl font-bold text-fuchsia-700  '>Education </div>
            <table className='w-72 ml-12'>
            <tbody className=''>
               <tr className=''>
                <td className='text-fuchsia-900' ><b>Degree:</b></td> 
                <td >{userDetails[0].education.degree} </td>
                </tr> <tr className=''>
                <td className='text-fuchsia-900'><b>Field of Study:</b></td> 
                <td className=''>{userDetails[0].education.fieldOfStudy} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>University:</b></td> 
                <td className=''>{userDetails[0].education.university} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>Graduation Year:</b></td> 
                <td className=''>{userDetails[0].education.graduationYear} </td>
                </tr>
             </tbody>
            </table>
          </div>
          <div className='mt-4 w-[800px] h-auto bg-teal-200 p-4 rounded-xl shadow-lg shadow-fuchsia-400 hover:shadow-fuchsia-500'>
            <div className='text-2xl font-bold text-fuchsia-700  '>Qualification</div>
            <table className='w-[550px] ml-12'>
            <tbody className=''>
               <tr className=''>
                <td className='text-fuchsia-900' ><b>Certification:</b></td> 
                <td >{userDetails[0].qualifications.certification} </td>
                </tr> <tr className=''>
                <td className='text-fuchsia-900'><b>Skills:</b></td> 
                <td className=''>{userDetails[0].qualifications.skills} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>Language:</b></td> 
                <td className=''>{userDetails[0].qualifications.language} </td>
                </tr><tr className=''>
                <td className='text-fuchsia-900'><b>Others:</b></td> 
                <td className=''>{userDetails[0].qualifications.others} </td>
                </tr>
             </tbody>
            </table>
          </div>
          <Link to='/settings' className=' rounded-xl  ml-80 mt-72 p-4 bg-fuchsia-600 text-lg  text-black hover:bg-fuchsia-900 text-white shadow-xl '>Edit Profile</Link>
             
            </div>
          )}
          
    </div>
    </Mainlayout>
    </>
  )
}

export default UserProfile