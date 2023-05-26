import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Face(props) {
  const { nodes, materials } = useGLTF('/face.glb')

  return (
    <group {...props} dispose={null} >
      <mesh geometry={nodes.FBHead.geometry} material={materials.FBHead_preview_mat} />
    </group>
  )
}

useGLTF.preload('/face.glb')
