import { useRef,React }from 'react'
import { useMotionTemplate,useMotionValue,useSpring,useTransform,motion } from 'framer-motion'
import {FaMousePointer} from "react-icons/fa"
import { useState,useEffect } from 'react';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const TiltCard = ({child}) => {
    const data =child;
    console.log(data+"knsjd")
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataf,setdata]=useState([]);
  const [proj,setproj]=useState([]);
useEffect(()=>{
fetch('https://portfolio-backend-icf6.onrender.com/project/get').then((res)=>{
  if(!res.ok){
      console.log("fucked up ");
  }
  return res.json();
}).then((data)=>{
  console.log(data);
  setproj(data);
 
})

},[])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[500px] w-[800px] rounded-xl bg-gradient-to-br from-blue-400 to-white"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-1 grid place-content-center rounded-xl bg-black shadow-lg "
      >

        <img className='flex w-20 h-20 rounded-full' src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg'></img>
        <p className='text-white'>{data}</p>
      
        
      </div>
    </motion.div>
  );
}
