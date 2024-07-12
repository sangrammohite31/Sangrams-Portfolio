import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import { Cursor, Typewriter } from 'react-simple-typewriter'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import { useState,useEffect } from 'react';
import { label } from 'three/examples/jsm/nodes/Nodes.js';
import './project.css'
export const Project = () => {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataf,setdata]=useState([]);
    const [proj,setproj]=useState([]);
useEffect(()=>{
  fetch('http://localhost:3000/project/get').then((res)=>{
    if(!res.ok){
        console.log("rfucked up ");
    }
    return res.json();
}).then((data)=>{
    console.log(data);
    setproj(data);
   
})

},[])
 
    useEffect(()=>{
        fetch('http://localhost:3000/api/get').then((res)=>{
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
    useEffect(() => {
      // Replace 'username' with your GitHub username
      const username = 'sangrammohite31';
      const url = `https://api.github.com/users/${username}/repos`;
  
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
         
          return response.json();
        })
        .then((data) => {
            console.log(data);
          setRepos(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [fetch]);

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    const data = {
        labels: ['Github Total Repo',"Certificate","Skills"],
        datasets: [
          {
            label: '',
            data: [repos.length,dataf.length,13],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
       
        ],
      };
    // const {text} = useTypewriter({
    //     words:["Devops Engineer ","Cloud Engineer","Frontend Web Developer","Flutter Developer"],
    //     loop:{}    
    // })
  return (
    <div className=' bg-black w-[100%] h-[100vh]  '>
      
       <h1 className='text-[20px] text-white'> My Major Devops Skills</h1>
         <h1 className='text-[100px] text-white font-bold'>
        <Typewriter
          words={["Jenkins ","Grafana","Docker","SonarQube","Trivy"]}
          loop={0} // Number of loops before stopping, set to 0 for infinite
          cursor
          cursorStyle='_'
          typeSpeed={7} // Typing speed in milliseconds
          deleteSpeed={50} // Deleting speed in milliseconds
          delaySpeed={1000} // Delay between typing and deleting



        />
      </h1>

      <div className=' shadow-orange-100 w-[800px] h-[800px] flex flex-1 '>
      <Bar data={data}/>;
      <div className='flex flex-col'>
      <div className='flex flex-row'>
     {/* <h1 className='text-white'>Hosted</h1>
     <h1 className='text-white ml-12 '>Frontend Projects</h1>
     <h1 className='text-white ml-12 '>Links</h1> */}
     </div >
{proj.map((i,index)=>{
  return    <div key={index} href className="justify-center items-center flex flex-col text-white font-bold bg-[gray-900 ]rounded-md  border-red duration-500 hover:scale-105 hover:rounded-lg hover:text-black hover-gradient cursor-pointer  ">
  <div className = "w-[80vh] h-[30px] rounded-lg   gap-10 ">
    <center>
  <a href={i['githublink']} target='/blank' className='text-white' >{i['name']}</a></center></div>
  
  
  </div>
})}

<button  href className="justify-center items-center flex flex-col text-white font-bold bg-[gray-900 ]rounded-md  border-red duration-500 hover:scale-105 hover:rounded-lg hover:text-black hover-gradient cursor-pointer  ">
<div className = "w-[80vh] h-[30px] rounded-lg   gap-10 ">
  <center>
<a href='https://nikeclone-sangrams-projects-00821dfe.vercel.app/' target='/blank' >SribbleClone(Flutter)</a></center></div>


</button>

</div>
      </div>
      
         
    </div>
  )
}
