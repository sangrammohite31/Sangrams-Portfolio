import React from 'react'

import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadians } from '../angle';
import * as THREE from "three";
import { Model } from './Lambo';

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

  return (
   <> 
   <PerspectiveCamera makeDefault position={[10, 1,-10 ]} rotateX={angleToRadians(50)}/>
   <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(50)} maxPolarAngle={angleToRadians(80) } maxZoom={200} />
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

<spotLight args={["#ffffff", 400, 20, angleToRadians(90), 0.4]} position={[4, -10, 0]} castShadow />

   <Model/>
   {/* <ambientLight ></ambientLight> */}
   <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                </mesh>
            </Environment>
  
      
   </>
  )
}
