import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Html, OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";

const Statue = () => {
  const group = useRef();
  const { scene } = useGLTF("/Statue/scene.gltf");

  // Ensure the scene receives and casts shadows
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group ref={group} position={[0, 0, 0]}>
      <primitive object={scene} scale={1.04} position={[0, 13.5, 0]} rotation={[0, 2.5, 0]} />
    </group>
  );
};

const StatueCanvas = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 40], fov: 50, near: 0.1, far: 100 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight
        castShadow
        intensity={4}
        position={[10, 20, 10]}
      />
      <pointLight intensity={0.5} position={[-10, -10, -10]} color="#ffd700" />
      <Suspense fallback={
      <Html>Loading...</Html>
      }>
        <Statue />
        <Environment preset="sunset" />
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -13.5, 0]}>
          <planeGeometry args={[500, 500]} />
          <shadowMaterial opacity={0.5} />
        </mesh>
      </Suspense>
      <OrbitControls autoRotate autoRotateSpeed={5} enableZoom={false} rotateSpeed={0.2} />
    </Canvas>
  );
};

export default StatueCanvas;
