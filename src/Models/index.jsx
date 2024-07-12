import React from 'react'

import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadians } from '../angle';
import * as THREE from "three";
import { Model } from './Lambo';
import { Avatarr } from './Avatar copy';
import { Modelll } from '../modelsecond/66910f643369b0756bae741a';
import { Mode } from '../modelsecond/669118a83369b0756bae9339';
import { Star } from '../modelsecond/Model';


export const Three = () => {
  
  const cameraRef = useRef();
  useEffect(() => {
      if (cameraRef.current) {
        cameraRef.current.position.set(0, 4, 10); // Set camera position
        cameraRef.current.lookAt(new THREE.Vector3(-5,-10,6 )); // Set camera to look at the origin
      }
    }, []);
    const orbitControlsRef = useRef(null);
    useFrame((state) => {
        if (!!orbitControlsRef.current) {
            const { x, y } = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(30));
            orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
            
            orbitControlsRef.current.update();
        }
    })
    const textureLoader = new THREE.TextureLoader();
    const wallTexture = textureLoader.load('/alldev.jpg' ); // Adjust the path if necessary
    const iamgepng = textureLoader.load('/appdevelop.jpg' ); // Adjust the path if necessary
  
  return (
   <> 

   <PerspectiveCamera makeDefault position={[10, 1,-10 ]} rotateX={angleToRadians(50)}/>
   <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(50)} maxPolarAngle={angleToRadians(80) }enableZoom={false}/>
   <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                <planeGeometry args={[60, 60]} />
                <meshStandardMaterial color="#1ea3d8" />
            </mesh>
   {/* <mesh rotateOnAxis={[-(angleToRadians(90)),0,0]} receiveShadow >
    <planeGeometry args={[60,60]}/>
    <meshStandardMaterial color={"#1ea3d8"}/>
   </mesh> */}
    <spotLight args={["#ffffff", 40, 20, angleToRadians(45), 0.4]} position={[1,8, -4]} castShadow />

<spotLight args={["#ffffff", 40, 20, angleToRadians(40), 0.9]} position={[10, 5, -4]} castShadow />
<spotLight args={["#ffffff", 400, 20, angleToRadians(90), 0.9]} position={[-14.5, 5, 5]} castShadow />
<spotLight args={["#ffffff", 400, 20, angleToRadians(90), 0.4]} position={[4, -10, 0]} castShadow />
<spotLight args={["#ffffff", 400, 20, angleToRadians(90), 0.4]} position={[5, 0, 5]} castShadow />
<mesh position={[-15,3,0]} rotation={[0,Math.PI/3,0]} scale={0.5}>
        <planeGeometry args={[10, 10] } />
        <meshStandardMaterial map={wallTexture} />

      
      </mesh>
      <Star/>
      <mesh position={[-5.4,-0.5,-1]} scale={3} receiveShadow >
          <boxGeometry ></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>
        <mesh position={[-6.3,1.75,2]} scale={[3,0.1,3]} receiveShadow >
          <boxGeometry ></boxGeometry>
          <meshPhongMaterial color='#650000'></meshPhongMaterial>
        </mesh>
        {/* laptop  */}
         <mesh position={[-6,1.9,2]} scale={[1.6,0.1,1.4]} receiveShadow >
          <boxGeometry ></boxGeometry>
          <meshPhongMaterial color='#D0D2D6'></meshPhongMaterial>
        </mesh>
        <mesh position={[-6,2.3,2.7]} scale={[1.6,1,0.1]} rotation={[Math.PI/10,0,0]} receiveShadow >
          <boxGeometry ></boxGeometry>
          <meshPhongMaterial color='#D0D2D6'></meshPhongMaterial>
        </mesh>
        <mesh position={[-4.8,0.7,2]} scale={[0.1,2,3]} receiveShadow >
          <boxGeometry ></boxGeometry>
          <meshPhongMaterial color='#650000'></meshPhongMaterial>
        </mesh>
        <mesh position={[-7.8,0.7,2]} scale={[0.1,2,3]} receiveShadow >
          <boxGeometry ></boxGeometry>
          <meshPhongMaterial color='#650000'></meshPhongMaterial>
        </mesh>
        <mesh position={[-4.5,-1,-1]} scale={3} receiveShadow >
          <boxGeometry ></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>
        <mesh position={[-8,0.4,-1]} scale={3} receiveShadow >
          <boxGeometry ></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>
      <mesh position={[10,3,0]} rotation={[0,-Math.PI/3,0]} scale={0.5}>
        <planeGeometry args={[10, 10] } />
        <meshStandardMaterial map={iamgepng} />
      </mesh>
<Modelll castShadow/>
   {/* <Model/> */}
   <Avatarr castShadow/>
   <Mode/>

  
   <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                </mesh>
            </Environment>
  
      
   </>
  )
}