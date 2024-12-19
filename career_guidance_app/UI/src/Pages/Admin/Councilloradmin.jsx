import React,{useState} from 'react'
import AdminL from '../../layouts/AdminL'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Councilloradmin = () => {
    const [CouncilName,setCouncilName]=useState('')
    const [CouncilId,setCouncilId]=useState('')
    const [Description,setDescription]=useState('')
    const [Rating,setRating]=useState('')
    const [Occupation,setOccupation]=useState('')
    const navigate=useNavigate()

    const handleCouncill =async (e)=>{
        e.preventDefault();
        const newuser={CouncilName,CouncilId,Description,Rating,Occupation}
        
        const res= await fetch("http://localhost:8080/addcouncillor",{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newuser)
        })
        console.log(res);        
        if(res.ok){
            alert("Councillor added Sucessfully")
            navigate('/viewcouncil')
        }else{
            alert("Failed to add Councillor")
        }
    }
  return (
   <>
    <div className=' bg-[url(./assets/Images/1.png)] fixed bg-cover w-screen h-screen'>
    <div className='fixed'>  <AdminL>  </AdminL>   </div>
   <div className="ml-64 p-4 mt-12">
        <div className="flex justify-between items-center mb-4">
            
        <div className="grid grid-cols-2 gap-5 text-2xl text-fuchsia-800 text-center">
            <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"> <Link to="/addcouncil">Add Councillor</Link></button>
            <button className="bg-fuchsia-800 text-white hover:bg-fuchsia-900 p-2 rounded-xl shadow shadow-2xl font-medium"> <Link to="/viewcouncil">View Councillor</Link></button>
            </div>
            
        </div>
        <div className="bg-transparent backdrop-blur-md h-auto max-w-md w-full mx-4 rounded-xl  shadow shadow-2xl ml-[500px]  p-8 border border-gray-200">

            <p className="text-3xl font-bold text-center mb-4 text-fuchsia-900">Add Councillors</p>
            <form onSubmit={handleCouncill}>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="username" >Councillors Name:</label>
                    <input type="text" id="username" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={CouncilName} onChange={(e)=>setCouncilName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="id" >Councillors Id:</label>
                    <input type="text" id="id" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required 
                    value={CouncilId} onChange={(e)=>setCouncilId(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600" htmlFor="ocuupation" >Occupation:</label>
                    <input type="text" id="ocuupation" className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required
                    value={Occupation} onChange={(e)=>setOccupation(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="description">Description :</label>
                    <input type="text" id="description"  className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required
                    value={Description} onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label  className=" text-gray-600" htmlFor="">Rating Of the Councillor :</label>
                    <input type="number" min="0" max="5" id="" className="mt-3 bg-gray-100 w-full p-2 rounded-lg"
                    value={Rating} onChange={(e)=>setRating(e.target.value)} />
                </div>                           
                <button type='submit' className="mt-2 bg-fuchsia-600 text-black ml-32 border border-gray-900	hover:bg-fuchsia-700 hover:border border-gray-200 text-white font-bold py-2 px-4 rounded-xl">Add Councillor </button>

                
            </form>
        </div>
    </div>
    </div>
   
   </>
  )
}

export default Councilloradmin
