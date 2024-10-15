import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, Point } from '@react-three/drei';

function SubtleParticles() {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
      camera={{ position: [0, 0, 100], fov: 75 }}
    >
      <Points limit={5000} threshold={0.1}>
        {[...Array(500)].map((_, i) => (
          <Point
            key={i}
            position={[
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50
            ]}
            color="#ffffff"
            size={Math.random() * 2}
          />
        ))}
      </Points>
    </Canvas>
  );
}

export default SubtleParticles;
