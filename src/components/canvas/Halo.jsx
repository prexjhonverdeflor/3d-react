import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, Html, useProgress, OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        {Math.round(progress)}% loaded
      </div>
    </Html>
  );
};

const Halo = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/halo/scene.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animation = actions[Object.keys(actions)[0]];
    animation.play();
  }, [actions]);

  // Ensure the scene receives and casts shadows, and add metalness with green color
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.metalness = 1.0; // Adding metalness
        child.material.color.set('#84926a'); // Setting the color to green
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={4.9}
      position={[0, -13.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const HaloCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [1, 2, 9], fov: 30, near: 0.1, far: 100 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        intensity={4}
        position={[10, 20, 10]}
        color="yellow"
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight intensity={0.5} position={[-10, -10, -10]} color="#ffd700" />
      <Suspense fallback={<Loader />}>
        <Halo />
        <Environment preset="sunset" />
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -13.5, 0]}>
          <planeGeometry args={[500, 500]} />
          <shadowMaterial opacity={0.5} />
        </mesh>
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default HaloCanvas;
