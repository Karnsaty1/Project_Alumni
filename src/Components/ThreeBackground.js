import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Pulsating sphere component
function PulsatingSphere() {
  const sphereRef = useRef();
  const scale = useRef(1);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const scaleValue = 1 + 0.5 * Math.sin(elapsedTime * 2);
    sphereRef.current.scale.set(scaleValue, scaleValue, scaleValue);
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="coral" emissive="coral" emissiveIntensity={0.3} />
    </mesh>
  );
}

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 1000 }, () => ({
    position: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5],
    color: new THREE.Color(Math.random() * 0xffffff),
  }));

  return (
    <>
      {particles.map((particle, index) => (
        <mesh
          key={index}
          position={particle.position}
          >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color={particle.color} />
        </mesh>
      ))}
    </>
  );
}

function ThreeBackground() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
      >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <PulsatingSphere />
      <FloatingParticles />
      <Stars />
      <OrbitControls />
    </Canvas>
  );
}

export default ThreeBackground;
