import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CyberCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Mesh>(null!);
  const secondRingRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.25;
      meshRef.current.rotation.y = t * 0.35;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -t * 0.2;
      outerRingRef.current.rotation.x = Math.sin(t * 0.4) * 0.3;
    }
    if (secondRingRef.current) {
      secondRingRef.current.rotation.y = t * 0.25;
      secondRingRef.current.rotation.z = Math.cos(t * 0.3) * 0.4;
    }
  });

  return (
    <group>
      {/* Central Distorted Security Shield Core */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <Sphere ref={meshRef} args={[1.3, 64, 64]}>
          <MeshDistortMaterial
            color="#06b6d4"
            attach="material"
            distort={0.4}
            speed={2.2}
            roughness={0.15}
            metalness={0.8}
            wireframe={true}
          />
        </Sphere>
      </Float>

      {/* Inner Glowing Core */}
      <Sphere args={[0.7, 32, 32]}>
        <meshStandardMaterial
          color="#10b981"
          emissive="#059669"
          emissiveIntensity={1.8}
          roughness={0.3}
          metalness={0.2}
        />
      </Sphere>

      {/* Outer Gyro Ring 1 (Cyan) */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.0, 0.02, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" wireframe />
      </mesh>

      {/* Outer Gyro Ring 2 (Emerald) */}
      <mesh ref={secondRingRef}>
        <torusGeometry args={[2.3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#10b981" wireframe />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 300;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 12;
      pos[i + 1] = (Math.random() - 0.5) * 12;
      pos[i + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#38bdf8"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

export const CyberCanvas: React.FC = () => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[6, 6, 4]} intensity={2.2} color="#06b6d4" />
        <pointLight position={[-5, -4, -3]} intensity={1.5} color="#10b981" />
        <CyberCore />
        <ParticleField />
      </Canvas>
      <div className="absolute bottom-2 right-4 text-[11px] font-mono text-cyan-400/50 flex items-center gap-1.5 pointer-events-none select-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        3D Core Active • Three.js WebGL
      </div>
    </div>
  );
};
