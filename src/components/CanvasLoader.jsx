import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const LoaderSphere = () => {
  return (
    <mesh>
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="#00ffff" wireframe />
      </Sphere>
    </mesh>
  );
};

const CanvasLoader = () => {
  return (
    <div style={{ width: '100%', height: '100px' }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight />
        <directionalLight position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <LoaderSphere />
      </Canvas>
    </div>
  );
};

export default CanvasLoader;
