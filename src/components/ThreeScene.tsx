import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const FloatingGeometry = ({ position, geometry }: { position: [number, number, number], geometry: 'sphere' | 'box' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
        {geometry === 'box' && <boxGeometry args={[0.8, 0.8, 0.8]} />}
        {geometry === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
        <meshStandardMaterial 
          color="#9333ea" 
          emissive="#4c1d95" 
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

export const ThreeScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c084fc" />
        
        <FloatingGeometry position={[-2, 1, 0]} geometry="sphere" />
        <FloatingGeometry position={[2, -1, 0]} geometry="box" />
        <FloatingGeometry position={[0, 2, -1]} geometry="torus" />
        <FloatingGeometry position={[-1, -2, 1]} geometry="sphere" />
        <FloatingGeometry position={[1.5, 0.5, -2]} geometry="box" />
      </Canvas>
    </div>
  );
};