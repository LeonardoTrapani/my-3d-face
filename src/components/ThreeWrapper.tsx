'use client';

import { Canvas } from "@react-three/fiber";

const ThreeWrapper = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </Canvas>
  )
}

export default ThreeWrapper;
