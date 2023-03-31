
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/buger.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.37, 0]} scale={[0.95, 1.01, 0.96]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.bred}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials.sumsum}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bred_down001.geometry}
        material={materials.bred}
        position={[0, 0.45, 0]}
        scale={[1.26, 0.22, 1.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.meat001.geometry}
        material={materials.meat}
        position={[0, 0.95, 0]}
        scale={[1.05, 0.28, 1.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tomato004.geometry}
        material={materials.tomato}
        position={[0.47, 1.15, 0.76]}
        rotation={[0.05, -0.57, -0.02]}
        scale={[0.58, 0.11, 0.58]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.green_002.geometry}
        material={materials.green}
        position={[0, -0.19, 0]}
        rotation={[-Math.PI, 0.19, -Math.PI]}
        scale={1.43}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.chees}
        position={[-0.03, 1.43, 0.01]}
        scale={1.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tomato005.geometry}
        material={materials.tomato}
        position={[-0.69, 1.21, 0.22]}
        rotation={[0.05, 0.03, 0.11]}
        scale={[0.53, 0.1, 0.53]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tomato006.geometry}
        material={materials.tomato}
        position={[-0.58, 1.19, -0.66]}
        rotation={[-0.08, 0.01, 0.07]}
        scale={[0.53, 0.1, 0.53]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tomato007.geometry}
        material={materials.tomato}
        position={[0.66, 1.2, -0.58]}
        rotation={[-0.12, 0, -0.04]}
        scale={[0.53, 0.1, 0.53]}
      />
    </group>
  );
}

useGLTF.preload("/buger.glb");