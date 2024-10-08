/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 lambo.glb 
Author: supercarmodels (https://sketchfab.com/supercarmodels)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/2011-bugatti-veyron-164-super-sport-1c0e8599e9ad42189281e1b000305dd6
Title: 2011 Bugatti Veyron 16.4 Super Sport
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('./lambo.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[-6,0,8]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['217Mtl']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Grill1Mtl} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Headlightcover2Mtl} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.R1Mtl} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Reflector1Mtl} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Headlightframe1Mtl} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Union2Mtl} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Window1Mtl} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['11Mtl']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['11Mtl']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['12Mtl']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['12Mtl']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['21Mtl']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['21Mtl']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['21Mtl']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['21Mtl']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Bolt1Mtl} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Bolt1Mtl} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Caliper1Mtl} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Frame1Mtl} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Frame1Mtl} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Frame1Mtl} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Gasfillercap1Mtl} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Headlightcover1Mtl} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Part1Mtl} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.Rotor1Mtl} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Rotor1Mtl} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Rotor1Mtl} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.Part11Mtl} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Rri1Mtl} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Rv1Mtl} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.Sw1Mtl} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.Tires1Mtl} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Wiper21Mtl} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.Wiper21Mtl} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.Wiper21Mtl} />
      </group>
    </group>
  )
}

useGLTF.preload('./lambo.glb')
