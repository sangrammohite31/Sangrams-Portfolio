import React from 'react'

import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadians } from '../angle';
import * as THREE from "three";
import { Model } from './Lambo';
import { Experience } from '../components/demo/Experience';




import { Avatarr } from './Avatar copy';




export const Threee = (data) => {
  
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
            orbitControlsRef.current.setAzimuthalAngle(x * angleToRadians(60));
            
            orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
            console.log(orbitControlsRef.position)
            orbitControlsRef.current.update();
        }
    })
 
  return (
   <> 
  
   
  <PerspectiveCamera  position={[-1,0,0]}></PerspectiveCamera>
   <ambientLight intensity={3}></ambientLight>
   <spotLight position={[0,0,0] }></spotLight>
   <group position={[0,1.2,0]} rotation={[-Math.PI/3,0,-2]}>
   <Avatarr/>
  
   </group>
   
   </>
  )
}
