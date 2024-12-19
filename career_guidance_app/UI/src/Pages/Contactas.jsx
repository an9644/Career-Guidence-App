import React,{useState} from 'react'
import Mainlayout from '../layouts/Mainlayout'
import ML2 from '../layouts/ML2'
import Settingicons from '../components/User/Settingicons'
import { useNavigate } from 'react-router-dom'

const Contactas = () => {
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Message,setMessage]=useState('')
    const navigate =useNavigate()

    const submitForm=async (e)=>{
        e.preventDefault()
    
        const contact ={
          Name, Email, Message,
        }
        try {
          const res= await fetch('http://localhost:8080/contactus',{
            method:'POST',
            headers:{'Content-Type': 'application/json'} ,
            body:JSON.stringify(contact),
            credentials:'include'
          })
          if(res.ok){
            navigate('/home')            
          }else{
            console.log(' Data Adding  failed')
            navigate('/contactus')
          }
        } catch (error) {
          console.log('Error : faild');
          
        }
      }

  return (
    <>
    <Mainlayout>
    <div className="bg-transparent fixed  backdrop-blur-sm h-screen w-44 ml-28 rounded-xl m-2 ">
    <Settingicons />     </div>
    <div className="bg-transparent fixed ml-80  backdrop-blur-sm h-screen w-[1450px] mt-2 rounded-xl">
            <ML2>
    <div className="container mx-auto p-4 pt-6 mt-10 bg-transparent backdrop-blur-sm rounded shadow-md">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={submitForm}>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block  text-2xl font-medium text-fuchsia-900">Name</label>
                    <input type="text" id="name" name="name" className="bg-gray-100 mt-2 w-[700px] border-2 p-2 rounded-xl" required
                    value={Name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <br/>
                <div>
                    <label htmlFor="email" className="block  text-2xl font-medium text-fuchsia-900">Email</label>
                    <input type="email" id="email" name="email" className="bg-gray-100 mt-2 w-[700px] border-2 p-2 rounded-xl" required 
                    value={Email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                
                <div className="col-span-2">
                    <label htmlFor="message" className="block  text-2xl font-medium text-fuchsia-900">Message</label>
                    <textarea id="message" name="message" className="bg-gray-100 mt-2 w-[700px] border-2 p-2 rounded-xl" required
                    value={Message} onChange={(e)=>setMessage(e.target.value)}
                    ></textarea>
                </div>
            </div>
            
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-black hover:text-white bg-fuchsia-500 hover:bg-fuchsia-900  mt-4">Send Message</button>
        </form>
    </div>
    </ML2>
    </div>
    </Mainlayout>
    
    </>
  )
}

export default Contactas