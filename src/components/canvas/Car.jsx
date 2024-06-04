import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import * as THREE from 'three';

const Car = () => {
  const { scene, materials } = useGLTF("./miata/scene.gltf");

  // Ensure that the material is correct
  if (materials) {
    Object.values(materials).forEach((material) => {
      material.metalness = 0.5;  // Adjust metalness if needed
      material.roughness = 1;  // Adjust roughness if needed
    });
  }

  // Enable shadows for the model
  scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  return <primitive object={scene} scale={1.3} position={[0, -0.5, 0]} rotation={[0, Math.PI / 1, 0]} />;
};

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

const CarCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        //for larger or smaller
        fov: 40,
        near: 0.1,
        far: 100,
        position: [-5, 2, 6],
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        intensity={1}
        position={[10, 10, 10]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Suspense fallback={<Loader />}>
        <Preload all />
        <Car />
        <Environment preset="sunset" /> {/* Use a preset environment */}
      </Suspense>
      <OrbitControls autoRotate enableZoom={false} />

      {/* Add a ground plane to receive shadows */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[500, 500]} />
        <shadowMaterial opacity={0.5} />
      </mesh>
    </Canvas>
  );
};

export default CarCanvas;
