import React from 'react'
import { useState,useEffect } from 'react';
import { TiltCard } from './Tiitbox/TiltCard'
export const Tiltbox = () => {
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
    <div id='projectsection'  className='grid grid-cols-2'>
      {proj.map((i,index)=>{
       const data = i['name']
  return    <div>
      
  <div className="flex w-full place-content-center  px-4 py-12 text-slate-900">
    <TiltCard child={data} />
   
  
  </div>
  </div>
})}
    </div>
   
   
   )
}
