'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';

function SpinningBox() {
  const ref = useRef<Mesh>(null!);
  return (
    <mesh
      ref={ref}
      onPointerMove={() => {
        if (ref.current) ref.current.rotation.y += 0.01;
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-[400px] rounded-2xl border">
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} />
        <SpinningBox />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
