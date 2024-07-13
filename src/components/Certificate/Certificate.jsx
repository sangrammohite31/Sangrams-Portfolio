import React, { useEffect, useState } from 'react'

export const Certificate = () => {
const [dataf,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://portfolio-backend-icf6.onrender.com/api/get').then((res)=>{
            if(!res.ok){
                console.log("rfucked up ");
            }
            return res.json();
        }).then((data)=>{
            console.log(dataf);
            setdata(data);
           
        })
    }
,[])
  return (
    <div>
      <div className='text-white text-center text-[40px] font-bold'>Certifications</div>
    <div className="grid lg:grid-cols-3  gap-10 p-4">
     
{dataf.map((item,index)=>(
  
  <div  id='header-section' className=" text-white font-bold bg-gray-900 rounded-md  border-red duration-500 hover:scale-105 hover:rounded-lg hover:text-black hover:bg-orange-50 cursor-pointer  " key={item.id}>
  <img  className=" w-[100%] h-[300px]  rounded-md" src={item.url}/>


  
 
</div>

))}
</div>
    </div>
  )
}
