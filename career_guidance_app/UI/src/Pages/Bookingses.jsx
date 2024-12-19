import React, { useState } from 'react'
import Mainlayout from '../layouts/Mainlayout'
import ML2 from '../layouts/ML2'
import Menticons from '../components/User/Menticons'
import { useNavigate } from 'react-router-dom'

const Bookingses = () => {
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Phn,setPhn]=useState('')
    const [Mplan,setMplan]=useState('')
    const [Payment,setPayment]=useState('')
    const [Description,setDescription]=useState('')
    const navigate =useNavigate()

    const submitForm=async (e)=>{
        e.preventDefault()
    
        const newBooking ={
          Name, Email, Phn, Mplan, Payment, Description }
        try {
          const res= await fetch('http://localhost:8080/booksession',{
            method:'POST',
            headers:{'Content-Type': 'application/json'} ,
            body:JSON.stringify(newBooking),
            credentials:'include'
          })
          if(res.ok){
            alert("User Details Added Successfully")
            navigate('/bksuccess')            
          }else{
            console.log(' Booking failed')
            navigate('/')
          }
        } catch (error) {
          console.log('Error Booking faild');
          
        }
      }

  return (
    <>
    <Mainlayout>
    <div className="bg-transparent  backdrop-blur-sm fixed  h-screen w-44 ml-32 rounded-xl m-2 ">
    <Menticons />     </div>
    <div className="bg-transparent backdrop-blur-sm fixed ml-80   h-screen w-[1450px] m-2 rounded-xl">
        <ML2>
        <div className="relative  ">       
            <div className="bg-transparent backdrop-blur-xl flex justify-center items-center h-auto mt-12">
                <div className=" h-auto max-w-xl w-screen mx-4 rounded-xl  shadow-teal-800 shadow-2xl  p-8 border border-gray-200">
        
                    <h1 className="text-3xl font-bold text-center mb-4 text-fuchsia-600">Booking Live Sessions</h1>
                    <form onSubmit={submitForm} >
                        <div className="mb-4">
                            <label className=" text-gray-600" htmlFor="username" > Name:</label>
                            <input type="text" id="username" placeholder="Enetr your name...." className="mt-3 bg-gray-100 w-full p-2 border border-purple-500 rounded-lg"
                             required  value={Name} onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label className=" text-gray-600" htmlFor="email" >Email:</label>
                            <input type="email" id="email" placeholder="enter your email..." className="mt-3 bg-gray-100  border border-purple-500 w-full p-2 rounded-lg" 
                            required value={Email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label className=" text-gray-600" htmlFor="contno" > Contact No:</label>
                            <input type="number"  id="contno" placeholder="Enetr your Contact no...." className="mt-3 bg-gray-100 w-full p-2 border border-purple-500 rounded-lg" required 
                            value={Phn} onChange={(e)=>setPhn(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label className=" text-gray-600" htmlFor="username" > Mentorship Plan:</label>
                            <select className="mt-3 bg-gray-100  border border-purple-500 w-full p-2 rounded-lg" id="plans" 
                            required  value={Mplan} onChange={(e)=>setMplan(e.target.value)} >
                                <option className=" text-gray-600" value="">Select your Mentorship plan</option>
                                <option value="₹4,999">₹4,999</option>
                                <option value="₹6,999">₹6,999</option>
                                <option value="₹22,000">₹22,000</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className=" text-gray-600" htmlFor="username" > Payment :</label>
                            <select className="mt-3 bg-gray-100  border border-purple-500 w-full p-2 rounded-lg"  id="plans" required 
                            value={Payment} onChange={(e)=>setPayment(e.target.value)} >                             
                              <option className=" text-gray-600" value="">Select your Payment Method</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Googlepay">Googlepay</option>
                                <option value="Paytm">Paytm</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className=" text-gray-600" htmlFor="description" > Description:</label>
                            <textarea className="w-[510px] h-32  border border-purple-500 p-2 rounded-xl"  id="description" placeholder="Enter a short description about you..."
                            value={Description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type='submit' className="bg-white text-xl font-bold border border-2 border-purple-500 p-2 rounded-xl text-fuchsia-600 hover:bg-fuchsia-700 hover:text-white hover:shadow shadow-2xl ">Submit</button>
                        </div>              
                    </form>
                </div>
            </div></div>      
        </ML2>
         </div>
    </Mainlayout>
    </>
  )
}

export default Bookingses