/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: hungryshark25 (https://sketchfab.com/hungryshark25)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/computer-monitor-7831f14447a34bada16a02ba6375c797
Title: Computer Monitor
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Model1 = (props) => {
  const { nodes, materials } = useGLTF('/computer_monitor.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.311}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Material}
            position={[0, 1.266, 0]}
            scale={[1.64, 1, 0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials['Material.003']}
            position={[0, 1.266, 0]}
            scale={[1.64, 1, 0.016]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/computer_monitor.glb')

export default Model1;