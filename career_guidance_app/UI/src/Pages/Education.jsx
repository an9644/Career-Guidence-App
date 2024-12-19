import React,{useState} from 'react'
import Mainlayout from '../layouts/Mainlayout'
import ML2 from '../layouts/ML2'
import Settingicons from '../components/User/Settingicons'
import { useNavigate } from 'react-router-dom'

const Education = () => {
    const [Degree,setDegree]=useState('')
    const [FieldStudy,setFieldStudy]=useState('')
    const [University,setUniversity]=useState('')
    const [GraduationYear,setGraduationYear]=useState('')
  
    const navigate =useNavigate()

    const submitForm=async (e)=>{
        e.preventDefault()
    
        const education ={
           Education:{ Degree, FieldStudy,University,GraduationYear}
        }
        try {
          const res= await fetch('http://localhost:8080/useredu',{
            method:'PATCH',
            headers:{'Content-Type': 'application/json'} ,
            body:JSON.stringify(education),
            credentials:'include'
          })
          if(res.ok){
            alert("data added successfully")            
          }else{
            console.log(' Data Adding  failed')
            navigate('/education')
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
            <ML2> <form onSubmit={submitForm}>
            <div className="ml-64">
              <p className="text-4xl text-fuchsia-800 font-bold mb-2 mt-4">Education</p>
              <div className="grid grid-cols-2 gap-4">
                  <div className="mt-7">
                      <label htmlFor="degree" className="block text-fuchsia-900 text-2xl font-medium ">Degree</label>
                      <select id="degree" name="degree" className="bg-gray-100 mt-2 w-[700px] border-2 p-2 rounded-xl" required
                      value={Degree} onChange={(e)=>setDegree(e.target.value)}>
                          <option value="">Select Degree</option>
                          <option value="HighSchool">HighSchool</option>
                          <option value="Diploma">Diploma</option>
                          <option value="Bachelor's">Bachelor's </option>
                          <option value="Master's">Master's </option>
                          <option value="Ph.D">Ph.D.</option>
                      </select>
                  </div>
                  <br/>
                  <div>
                      <label htmlFor="field_study" className="block  text-2xl font-medium text-fuchsia-900">Field of Study</label>
                      <input type="text" id="field_study" name="field_study" className="bg-gray-100 mt-2 w-[700px] border-2 p-2 rounded-xl" required 
                      value={FieldStudy} onChange={(e)=>setFieldStudy(e.target.value)}  />
                  </div>
                  <br />
                  <div>
                      <label htmlFor="university" className="block  text-2xl font-medium text-fuchsia-900">University</label>
                      <input type="text" id="university" name="university" className="bg-gray-100 mt-2 w-[700px] border-2 p-2 rounded-xl" required
                      value={University} onChange={(e)=>setUniversity(e.target.value)} />
                  </div>
                  <br />
                  <div>
                      <label htmlFor="grad_year" className="block  text-2xl font-medium text-fuchsia-900">Graduation Year</label>
                      <input type="number" id="grad_year" name="grad_year" className="bg-gray-100 mt-2 w-[700px] border-2 p-2 rounded-xl" required 
                      value={GraduationYear} onChange={(e)=>setGraduationYear(e.target.value)} />
                  </div>
              </div>
                           
              <div className="flex justify-cente mt-6">
                  <button type="submit" className="inline-flex items-center px-4 py-2  text-lg font-medium rounded-xl shadow-xl text-black hover:text-white bg-fuchsia-500 hover:bg-fuchsia-800 ">Submit</button>
              </div>
              </div>
              </form>
            </ML2>
       </div>
    </Mainlayout>
        </>
  )
}

export default Education