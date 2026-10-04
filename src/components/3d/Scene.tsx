'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Icosahedron, Torus } from '@react-three/drei';
import * as THREE from 'three';

function AbstractGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.07) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main hero shape — large glossy purple sphere */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2.5}>
        <Sphere args={[2, 128, 128]} position={[3, 0, -3]}>
          <MeshDistortMaterial
            color="#7c3aed"
            clearcoat={1}
            clearcoatRoughness={0.05}
            metalness={0.3}
            roughness={0.05}
            distort={0.25}
            speed={1.5}
          />
        </Sphere>
      </Float>

      {/* Magenta/pink sphere — medium */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={4}>
        <Sphere args={[0.85, 64, 64]} position={[-3.5, 1.5, -2]}>
          <MeshDistortMaterial
            color="#c026d3"
            clearcoat={1}
            clearcoatRoughness={0.08}
            metalness={0.4}
            roughness={0.08}
            distort={0.35}
            speed={2.5}
          />
        </Sphere>
      </Float>

      {/* Pink accent sphere — small */}
      <Float speed={3} rotationIntensity={2} floatIntensity={5}>
        <Sphere args={[0.45, 32, 32]} position={[-1.5, -2.5, 0.5]}>
          <MeshDistortMaterial
            color="#ec4899"
            clearcoat={1}
            metalness={0.5}
            roughness={0.1}
            distort={0.4}
            speed={3}
          />
        </Sphere>
      </Float>

      {/* Torus ring — purple wireframe feel */}
      <Float speed={1.2} rotationIntensity={2.5} floatIntensity={1.5}>
        <Torus args={[0.7, 0.12, 16, 64]} position={[1.5, 2.5, -1]}>
          <MeshDistortMaterial
            color="#a855f7"
            clearcoat={1}
            metalness={0.6}
            roughness={0.1}
            distort={0.1}
            speed={1}
          />
        </Torus>
      </Float>

      {/* Glowing magenta orb */}
      <Float speed={4} rotationIntensity={0} floatIntensity={6}>
        <Sphere args={[0.15, 16, 16]} position={[0, -3, 1.5]}>
          <meshPhysicalMaterial
            color="#f472b6"
            emissive="#ec4899"
            emissiveIntensity={4}
            toneMapped={false}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full pointer-events-none"
      style={{ opacity: 0.9, mixBlendMode: 'screen' }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: 'high-performance', antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.5} color="#3b0764" />
        <directionalLight position={[5, 8, 5]} intensity={3} color="#a855f7" />
        <directionalLight position={[-8, -5, -4]} intensity={2} color="#ec4899" />
        <pointLight position={[0, 2, 3]} intensity={2} color="#c026d3" distance={15} />
        <AbstractGeometry />
      </Canvas>
    </div>
  );
}
