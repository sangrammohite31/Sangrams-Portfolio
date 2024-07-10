import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import './Appp.css'
function Appp() {
  return (
    <div className="sher">
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
    </div>
  );
}

export default Appp;
