import React from 'react'
import video from '../assets/your-video-file.mp4'
import { useNavigate } from 'react-router-dom';
function Main() {
    const navigate = useNavigate();
    const handleonend=(e)=>{
        e.preventDefault();
        navigate('/next');
        
    }
  return (
    <div className='main lg:w-full object-cover h-full'>
        <video className='w-full h-full object-cover' autoPlay src={video} muted onEnded={handleonend}/>
        
    </div>
  )
}

export default Main