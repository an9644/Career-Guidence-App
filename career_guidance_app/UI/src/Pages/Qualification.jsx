import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar1 from '../components/User/Navbar1'
import Settingicons from '../components/User/Settingicons'

const Qualification = () => {
  const [Certification,setCertification]=useState('')
  const [Skills,setSkills]=useState('')
  const [Language,setLanguage]=useState('')
  const [Other,setOther]=useState('')
  const navigate=useNavigate()

  const handlequalification =async (e)=>{
      e.preventDefault();
      const newuser={
        Qualification:{Certification,Skills,Language,Other}}
      
      const res= await fetch("http://localhost:8080/userqualification",{
          method:'PATCH',
          headers: {"Content-Type":"application/json"},
          body:JSON.stringify(newuser),
          credentials:'include'
      })
      console.log(res);        
      if(res.ok){
          alert("Qualification addeedd Sucessfully")
      }else{
          alert("Failed to add qualification")
          navigate('/qualification')
      }
  }
  return (
    <>
  <div className=' bg-[url(./assets/Images/1.png)] fixed bg-cover w-screen h-screen'>
  <div className="bg-transparent fixed backdrop-blur-lg h-screen w-32 rounded-xl m-2 flex flex-col">
      <Navbar1 /> </div>
      <div className="bg-transparent fixed backdrop-blur-sm h-screen w-56 ml-36 rounded-xl m-2 ">
        <Settingicons /> </div>      
            <div className='ml-96'>
          <h3 className="text-4xl mt-8 text-fuchsia-800 font-bold mb-2 mt-4">Qualifications</h3>
            <form onSubmit={handlequalification}>
            <div className="grid grid-cols-2 gap-4">
                  <div className="mt-4">
                      <label htmlFor="certification" className="block text-fuchsia-900 text-2xl font-medium ">Certifications</label>
                      <input type="text" id="certification" name="certification" className="bg-gray-100 mt-2 w-[700px] border-2 p-2 rounded-xl" required
                      value={Certification} onChange={(e)=>setCertification(e.target.value)}/>
                  </div>
                  <br/>
                  <div className="mt-4">
                      <label htmlFor="skills" className="block  text-fuchsia-900 text-2xl font-medium ">Skills</label>
                      <input type="text" id="skills" name="skills" className="bg-gray-100 mt-2 w-[700px] border-2 p-2 rounded-xl" required 
                      value={Skills} onChange={(e)=>setSkills(e.target.value)}/>
                  </div>
              </div>
              <div className="mt-4">
                <label htmlFor="language" className="block text-fuchsia-900 text-2xl font-medium ">Language</label>
                <input type="text" id="language" name="language"  className="bg-gray-100 mt-2 w-[700px] border-2 p-2 rounded-xl" required 
                value={Language} onChange={(e)=>setLanguage(e.target.value)}/>
            </div>
            
            <div className="mt-4">
                <label htmlFor="other_qual" className="block text-fuchsia-900 text-2xl font-medium ">Other Qualifications</label>
                <textarea id="other_qual" name="other_qual" className="bg-gray-100 mt-2 w-[700px] h-56 border-2 p-2 rounded-xl" required 
                value={Other} onChange={(e)=>setOther(e.target.value)}></textarea>
            </div>
              
              <div className="flex justify-cente ml-64 mt-6">
                  <button type="submit" className="inline-flex items-center px-4 py-2  text-lg font-medium rounded-xl shadow-xl text-black hover:text-white bg-fuchsia-500 hover:bg-fuchsia-800 ">Submit</button>
              </div>
            </form>
              </div>  
              </div>
  
    </>
  )
}

export default Qualification