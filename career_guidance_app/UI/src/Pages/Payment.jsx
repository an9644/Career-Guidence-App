import React from 'react'
import Mainlayout from '../layouts/Mainlayout'
import Menticons from '../components/User/Menticons'
import ML2 from '../layouts/ML2'
import { Link } from 'react-router-dom'


const Payment = () => {
  return (
    <>
     <Mainlayout>
      <div className="bg-transparent fixed  backdrop-blur-sm h-screen w-44 ml-28 rounded-xl m-2 ">
      <Menticons />     </div>
    <div className="bg-transparent fixed ml-80  backdrop-blur-sm h-screen w-[1450px] mt-2 rounded-xl">
      <ML2>
      <div class="relative">
            
            <table class="w-full table-auto mb-4 mx-4">
                <tr class=" text-2xl text-purple-800 " >
                    <th class="p-2">Our Plans</th>
                    <th>Know Your Self </th>
                    <th>Career Path Pro  </th>
                    <th> job Path Pro  </th>
                </tr>
                <tr class="mb-4">
                    <td class="p-2"></td>   
                    <td class="p-2 text-center  border-b border-gray-300">₹ 4,999 &nbsp;<button class="bg-fuchsia-700 rounded-xl p-2 text-white"><Link to="/booksession">Enroll Now</Link></button></td>
                    <td class="p-2 text-center  border-b border-gray-300">₹ 6,999 &nbsp;<button class="bg-fuchsia-700 rounded-xl p-2 text-white"><Link to="/booksession">Enroll Now</Link></button></td>
                    <td class="p-2 text-center  border-b border-gray-300">₹ 22,000 &nbsp;<button class="bg-fuchsia-700 rounded-xl p-2 text-white"><Link to="/booksession">Enroll Now</Link></button></td>
                </tr>
                <tr class="mb-4">
                    <td class="p-2 font-bold text-gray-500 border-b border-gray-300" > <p class="font-bold text-purple-800">Career Exploration</p> <p class="text-gray-500"> Access well-researched content on 550+ careers </p> </td>
                    <td class="p-2 text-center border-b border-gray-300"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path class="w-6 h-6" fill="#BA68C8" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></td>
                    <td class="p-2 text-center border-b border-gray-300"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">  <path fill="#BA68C8" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></td>
                    <td class="p-2 text-center border-b border-gray-300"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#BA68C8" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></td>
                </tr>
                <tr class=" text-left ">
                    <td class="p-2 font-bold text-gray-500 border-b border-gray-300"> <p class="font-bold text-purple-800">Career Counseling <br/> </p><p class="text-gray-500"> One-on-One Counseling session to help in understand yourself and achieve the outcome <br/>as per the opted program.</p>        </td>
                    <td class="p-2 text-center border-b border-gray-300">1 Session</td>
                    <td class="p-2 text-center border-b border-gray-300">2 Session</td>
                    <td class="p-2 text-center border-b border-gray-300">5 Session</td>
                </tr>
                <tr class="mb-4 text-left">
                    <td class="p-2 font-bold text-gray-500 border-b border-gray-300"> <p class="font-bold text-purple-800">Live Career Class</p>
                         Weekly live group class by top Industry professionals </td>
                    <td class="p-2 text-center border-b border-gray-300"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#BA68C8" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></td>
                    <td class="p-2 text-center border-b border-gray-300"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#BA68C8" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></td>
                    <td class="p-2 text-center border-b border-gray-300"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="#BA68C8" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></td>
                </tr>
                <tr class="mb-4 text-left">
                    <td class="p-2 font-bold text-purple-800 border-b border-gray-300" >True Detail about Career  <p class="text-gray-500"> all the deatils about career guidence are true </p>   </td>
                    <td class="p-2 text-center border-b border-gray-300"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">  <path class="w-6 h-6" fill="#BA68C8" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></td>
                    <td class="p-2 text-center"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="#BA68C8" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></td>
                    <td class="p-2 text-center"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="#BA68C8" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></td>
                    
                </tr>
            </table>
</div>  
        </ML2>
    </div>
    </Mainlayout>
    </>
  )
}

export default Payment