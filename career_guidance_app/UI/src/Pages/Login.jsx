import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
// import bg5 from './assets/Images/bg5.jpeg';

const Login = () => {
    const [UserName,setUsername]=useState('')
    const [Password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleLogin =async (e)=>{
        e.preventDefault();
        
        const newuser={UserName,Password}
        console.log(UserName,Password);
        
        const res= await fetch("http://localhost:8080/login",{
            method:'POST',
            credentials:'include',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newuser),
        })
        console.log(res);
        if(res.ok){
            const data=await res.json();
            const userType =data;
            localStorage.setItem('username', UserName);

            if(userType=='admin'){
                alert("admin Login Successfull")
                navigate("/dashboard")
            }else{
                navigate('/home')
            }
            
            localStorage.setItem("userType",userType)
            // alert("Login Sucessfull")
            navigate('/home')
          } else{
          alert("Invalid Credential")
          navigate('/')
          }      
    }
  
  return (
    <>
    <div className="h-screen bg-cover bg-center bg-[url('./assets/Images/bg5.jpeg')] " >
    <div className="flex justify-center items-center h-full">
        <div className="bg-transparent backdrop-blur-md h-auto max-w-md w-full mx-4 rounded-xl  shadow shadow-2xl  p-8 border border-gray-200">
            <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="username" >Username:</label>
                    <input type="text" id="username"  className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required
                    value={UserName} onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className=" text-gray-600" htmlFor="password">Password:</label>
                    <input type="password" id="password"  className="mt-3 bg-gray-100 w-full p-2 rounded-lg" required
                    value={Password} onChange={(e)=>setPassword(e.target.value)} />
                </div>               
                <input type="submit" value="Submit" className="mt-2 bg-gray-400 text-black ml-36 border border-gray-900	hover:bg-gray-700 hover:border border-gray-200 text-white font-bold py-2 px-4 rounded" />
                <p className="mt-12 text-gray-600"><a href="">Forgot Password?</a>            </p>
                <p className="mt-4 text-gray-600">Don't have an Account? &nbsp;<Link className="text-gray-500" to="/signup"> Sign Up</Link></p>
            </form>
        </div>
    </div>
</div>
    
    </>
  )
}

export default Login