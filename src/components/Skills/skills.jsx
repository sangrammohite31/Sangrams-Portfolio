import gsap from 'gsap'
import React, {useRef, useEffect } from 'react'
const skill = [,{
    "name":"Nodejs"
},{
    "name":"Nodejs"
},{
    "name":"Nodejs"
},{
    "name":"Nodejs"
},{
    "name":"Nodejs"
},]
const languages = [
    'JavaScript', 'Flutter', 'C++', 'ReactJs', 'Android',
 'Chartjs', 'ElectronJs', 'ThreeJs', 'NodeJs',"Docker"
  ];
  
export const Skills = () => {
    const boxesRef = useRef([]);


    useEffect(() => {
        gsap.fromTo(
          boxesRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            yoyo: true,
            repeat: -1,
            ease: "power2.inOut"
          }
        );
      }, []);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' } } className=' justify-center'>
      {languages.map((language, index) => (
        <div
          key={index}
          ref={el => boxesRef.current[index] = el}
          style={{
            width: '120px',
            height: '80px',
            backgroundImage:'linear-gradient(to bottom right, #4e54c8, #8f94fb)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '16px',
            textTransform: 'uppercase'
          }}
        >
          {language}
        </div>
      ))}
    </div>
);
};


