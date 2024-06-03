import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Car = () => {
  const car = useGLTF("./SportsCar/scene.gltf");
  return (
    <primitive object={car.scene} scale={1.3} position={[0, -0.5, 0]} rotation={[-0.1, Math.PI / 1.6, 0]} />

  );
};

const CarCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop="demand"
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 100,
      position: [-5, 2, 6],
    }}
    >
      <ambientLight intensity={5} />
      <directionalLight intensity={10} position={[0, 10, 0]} />
      <Suspense fallback={null}>
        <Preload all />
        <Car />
      </Suspense>
      <OrbitControls 
        autoRotate
        enableZoom={false}
      />
    </Canvas>
  );
};

export default CarCanvas;
