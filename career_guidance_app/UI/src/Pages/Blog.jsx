import React from 'react'
import Mainlayout from '../layouts/Mainlayout'
import ML2 from '../layouts/ML2'
import Podicons from '../components/User/Podicons'
import jpeg4 from '../assets/Images/4.jpeg'

const Blog = () => {
  return (
    <>
    <Mainlayout>
    <div className="bg-transparent fixed  backdrop-blur-sm h-screen w-44 ml-28 rounded-xl m-2 ">
    <Podicons />     </div>
    <div className="bg-transparent fixed ml-80  backdrop-blur-sm h-screen w-[1450px] mt-2 rounded-xl">
    <ML2>
    <div class="flex justify-center mt-12 grid grid-cols-4 ml-1 gap-7 ">
                <div>
                     <iframe class="basis-1/4 h-56 w-[320px] rounded-xl" src="https://www.youtube.com/embed/4WZAPbv51-c" frameborder="0"></iframe>
                     <div class="flex gap-5 mt-2"><img class="rounded-xl border border-7 mt-4" src={jpeg4}   width="50" height="50" />
                         <p class="text-fuchsia-800"><b>Lorems</b><br />Channel <br />100k 10 hours ago</p></div>
                </div> 
                <div>
                    <iframe class="basis-1/4 h-56 w-[320px] rounded-xl" src="https://www.youtube.com/embed/WR1ydijTx5E" frameborder="0"></iframe>
                    <div class="flex gap-5 mt-2"><img class="rounded-xl border border-7 mt-4" src={jpeg4}    width="50" height="50" />
                        <p class="text-fuchsia-800"><b>Lorems</b><br/>Channel <br/>120k 3 hours ago</p> </div>
                </div> 
                <div>
                    <iframe class="basis-1/4 h-56 w-[320px] rounded-xl" src="https://www.youtube.com/embed/umepbfKp5rI" frameborder="0"></iframe>
                    <div class="flex gap-5 mt-2"><img class="rounded-xl border border-7 mt-4" src={jpeg4}   width="50" height="50" />
                        <p class="text-fuchsia-800"><b>Lorems</b><br/>Channel <br/>270k 23 hours ago</p> </div>
                </div> 
                <div>
                    <iframe class="basis-1/4 h-56 w-[320px] rounded-xl" src="https://www.youtube.com/embed/4WZAPbv51-c" frameborder="0"></iframe>
                    <div class="flex gap-5 mt-2"><img class="rounded-xl border border-7 mt-4" src={jpeg4}    width="50" height="50" />
                        <p class="text-fuchsia-800"><b>Lorems</b><br/>Channel <br/>100k 10 hours ago</p></div>
                 </div>
                 <div>
                    <iframe class="basis-1/4 h-56 w-[320px] rounded-xl" src="https://www.youtube.com/embed/kjBvQWHk_KI" frameborder="0"></iframe>
                    <div class="flex gap-5 mt-2"><img class="rounded-xl border border-7 mt-4" src={jpeg4}    width="50" height="50" />
                        <p class="text-fuchsia-800"><b>Lorems</b><br/>Channel <br/>100k 10 hours ago</p> </div>
                 </div> 
                 <div>
                    <iframe class="basis-1/4 h-56 w-[320px] rounded-xl" src="https://www.youtube.com/embed/WR1ydijTx5E" frameborder="0"></iframe>
                    <div class="flex gap-5 mt-2"><img class="rounded-xl border border-7 mt-4" src={jpeg4}    width="50" height="50" />
                        <p class="text-fuchsia-800"><b>Lorems</b><br/>Channel <br/>270k 23 hours ago</p> </div>
                 </div> 
                 <div>
                    <iframe class="basis-1/4 h-56 w-[320px] rounded-xl" src="https://www.youtube.com/embed/4WZAPbv51-c" frameborder="0"></iframe>
                    <div class="flex gap-5 mt-2"><img class="rounded-xl border border-7 mt-4" src={jpeg4}    width="50" height="50" />
                        <p class="text-fuchsia-800"><b>Lorems</b><br/>Channel <br/>100k 10 hours ago</p> </div>
                 </div> 
                 <div>
                    <iframe class="basis-1/4 h-56 w-[320px] rounded-xl" src="https://www.youtube.com/embed/WR1ydijTx5E" frameborder="0"></iframe>
                    <div class="flex gap-5 mt-2"><img class="rounded-xl border border-7 mt-4" src={jpeg4}   width="50" height="50" />
                        <p class="text-fuchsia-800"><b>Lorems</b><br/>Channel <br/>270k 23 hours ago</p> </div>
                 </div>     
                 </div>             
    </ML2>
    </div>
    </Mainlayout>
</>
  )
}

export default Blog