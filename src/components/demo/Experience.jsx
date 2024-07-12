import { OrbitControls } from "@react-three/drei";

import { useControls } from "leva";
import { angleToRadians } from "../../angle";
import { useRef } from "react";
import { Avatarr } from "../../Models/Avatar copy";

export const Experience = () => {
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
      <OrbitControls  ref={orbitControlsRef} />
<group position={[0,0,0]} rotateX={angleToRadians(60)}>
      <Avatarr animation={animation}/>
      </group>
   <ambientLight intensity={2}></ambientLight>
    </>
  );
};
