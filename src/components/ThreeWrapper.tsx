'use client';

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Face } from '../components/Face.jsx'
import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";

const ThreeWrapper = () => {
  return (
    <Canvas color="#ddd">
      <ambientLight />
      <Suspense fallback={null}>
        <PresentationControls
          speed={1.5}
          global
          zoom={0.8}
          polar={[-0.1, Math.PI / 1.3 / 4]}
          azimuth={[-Math.PI / 5, Math.PI / 3]}
          cursor
        >
          <Stage environment="city" intensity={0.5}>
            <Face />
          </Stage>
          <mesh position={[0, 0, -1]}>
            <planeGeometry args={[170, 170,]} />
            <CustomReflection />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[170, 170,]} />
            <CustomReflection />
          </mesh>
        </PresentationControls>
      </Suspense>
    </Canvas>
  )
}

const CustomReflection = () => {
  return (
    <MeshReflectorMaterial
      blur={[300, 100]} // Blur ground reflections (width, height), 0 skips blur
      mixBlur={1} // How much blur mixes with surface roughness (default = 1)
      mixStrength={40} // Strength of the reflections
      mixContrast={1} // Contrast of the reflections
      resolution={2048} // Off-buffer resolution, lower=faster, higher=better quality, slower
      mirror={1} // Mirror environment, 0 = texture colors, 1 = pick up env colors
      depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
      minDepthThreshold={0.4} // Lower edge for the depthTexture interpolation (default = 0)
      maxDepthThreshold={1.4} // Upper edge for the depthTexture interpolation (default = 0)
      depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
      color={"#101010"}
      distortion={1} // Amount of distortion based on the distortionMap texture
      metalness={0.5}
      reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
    />

  )
}

export default ThreeWrapper;
