'use client';

import { Canvas } from "@react-three/fiber";
import { Face } from '../components/Face.jsx'
import { Float, PresentationControls, Stage } from "@react-three/drei";

const ThreeWrapper = () => {
  return (
    <Canvas camera={{
      position: [0, 0, 8],
      fov: 60,
    }}>
      <ambientLight />
      <FaceComponent />
    </Canvas>
  )
}

const FaceComponent = () => {
  const maxLeft = Math.PI / 3;
  const maxRight = -Math.PI / 5;

  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.8}
      polar={[-0.1, Math.PI / 1.3 / 4]}
      azimuth={[maxRight, maxLeft]}
      cursor
    >
      <Stage environment="city" intensity={0.5}>
        <Float
          speed={2}
          floatingRange={[0, 0]}
         >
          <Face />
        </Float>
      </Stage>
    </PresentationControls>
  )
}

export default ThreeWrapper;
