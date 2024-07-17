import { Canvas } from '@react-three/fiber'
import React, { Suspense ,useEffect, useRef} from 'react'
import { Three } from '../Models'
import './Nextpage.css'

import { gsap } from 'gsap';
import { Project } from './Projects/Project';
import { Certificate } from './Certificate/Certificate';
import { Threee } from '../Models/indexx';
import ParallaxComponent from './Certificate/Parallwx';
import { Typewriter } from 'react-simple-typewriter';
import { Skills } from './Skills/skills';
import { Contact } from './Contact/contact';

function Nextpage() {
  const handleButtonClick = () => {
    document.getElementById('header-section').scrollIntoView({ behavior: 'smooth' });
  };
  const nameRef = useRef(null);
 var x = [1,8, -4]
const changeref = ()=>{
  console.log(x);
  x = [0,0,0]
}
  useEffect(() => {
    const element = nameRef.current;
    
    gsap.to(element, {
      opacity: 1,
      duration: 2,
      delay: 3,
      ease: "power3.out"
    });
  }, []);
  return (
    <div className='w-full h-full bg-black'>
 <nav className="bg-black shadow bg-black w-100 px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
	
		<div className="text-indigo-500 md:order-1">

    
		</div>
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">
               
				<li className="md:px-4 md:py-2 text-indigo-500"><button >Dashboard</button></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Project</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><button onClick={handleButtonClick}>Certification</button></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">About</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
			</ul>
		</div>
		<div className="order-2 md:order-3">
			<button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 bg-black rounded-xl flex items-center gap-2">

             
                <span><a href='https://drive.google.com/file/d/1a4pwfZewDGW0sa2Bq2puh9pmGnA1poHN/view?usp=drive_link'>Resume</a></span>
            </button>
		</div>
	</div>
</nav>
     
         {/* <h1 className='text-[100px] text-white font-bold'>
        <Typewriter
          words={["Devops Engineer ","Cloud Engineer","Web Developer","Flutter Developer"]}
          loop={5} // Number of loops before stopping, set to 0 for infinite
          cursor
          cursorStyle='_'
          typeSpeed={7} // Typing speed in milliseconds
          deleteSpeed={50} // Deleting speed in milliseconds
          delaySpeed={1000} // Delay between typing and deleting



        /> */}
      {/* </h1> */}

<div className='power w-full h-full bg-black'>
<Canvas>
        <Suspense fallback={null}>
            <Three/>
        </Suspense>
    </Canvas>    
  
    </div>
   
    <center><h2 className="  text-white opacity-0 text-[200px] font-bold" ref={nameRef}>I Am Sangram</h2></center>
    
    <Project/>
    <Skills/>
    <Certificate/>
    <Contact/>
   


 </div>
  )
}

export default Nextpage