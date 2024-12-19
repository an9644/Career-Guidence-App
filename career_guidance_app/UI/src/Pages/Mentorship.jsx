import React, {useState,useEffect} from 'react'
import Mainlayout from '../layouts/Mainlayout'
import Menticons from '../components/User/Menticons'
import ML2 from '../layouts/ML2'
import bg3 from '../assets/Images/bg3.jpeg'
import jpeg3 from '../assets/Images/3.jpeg'
import { Link } from 'react-router-dom'

const Mentorship = () => {
  const [Councillors,setCouncillors]=useState([])

  useEffect(()=>{
    const fetchCouncillors = async () => {
      try {
        const response= await fetch('http://localhost:8080/getallcouncillors',{
          method:'GET',
          credentials:'include',
          headers:{"Content-Type":'application/json'},
        })
        if(!response){
          alert('Failed to fetch data')
        }
        const Councillors=await response.json()
        if (Array.isArray(Councillors) ){
          setCouncillors(Councillors)
          console.log(Councillors);   
        }

      } catch (error) {
        console.error(error);        
      }
    }
    fetchCouncillors();
  },[])
  return (
    <>
    <Mainlayout>
      <div className="bg-transparent fixed  backdrop-blur-sm h-screen w-44 ml-28 rounded-xl m-2 ">
      <Menticons />     </div>
    <div className="bg-transparent fixed ml-80  backdrop-blur-sm h-screen w-[1450px] mt-2 rounded-xl">
      <ML2>
        <div className="relative mt-3 ">
            <img src={bg3} alt="img" className="w-screen h-64 rounded-xl  object-cover " />            
        </div>
        <div className="ml-7">
        <p className=" text-fuchsia-700 text-4xl font-bold py-2  text-black ">Are You Confused  About Your Future??</p>
            <p className="text-fuchsia-700 text-xl py-2  text-black">Book your live interaction session with out experts..........</p>
            <button className="bg-fuchsia-200 text-fuchsia-700 hover:bg-fuchsia-700 hover:text-white font-bold py-2 px-8  rounded"><Link to="/booksession">Book my session</Link></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Councillors.length>0?(
              
              Councillors.map((Councillor)=>{
                return(
                  <div className="bg-teal-200 max-w-md h-fit ml-9 my-4 rounded-xl p-5"
                    key={Councillor._id} >
                        <img src={jpeg3} className="rounded-xl w-80 h-64 mx-auto object-cover" />
                        <p id="profname" className="text-xl text-fuchsia-900 font-bold text-center mt-2">{Councillor.councilName}</p>
                        <p id="professional" className=" text-fuchsia-900 text-lg ml-[130px]"> {Councillor.occupation} </p>
                        <p id="description" className=" text-gray-500 text-lg text-center mt-1"> {Councillor.description}  </p>
                        <p id="rating" className=" text-gray-500 text-lg text-center mt-1"> {Councillor.rating}  </p>
                    <div><button className="bg-teal-400 mt-1 ml-36 p-3 rounded-xl hover:bg-teal-800  hover:text-white"><Link to='/booksession'>Entroll Now</Link> </button></div>
               </div>
                )
                })):(
                  <div className="text-center text-3xl font-bold text-fuchsia-700"> No Councillor Available </div>
                )
              }
        </div>
        </ML2>
    </div>
    </Mainlayout>
   
    </>
  )
}

export default Mentorship