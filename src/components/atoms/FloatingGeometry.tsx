import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Props {
  type: 'torus' | 'box';
  position: [number, number, number];
}

const FloatingGeometry: React.FC<Props> = ({ type, position }: Props) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Animación constante de rotación (KISS)
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    const scrollY = window.scrollY || window.pageYOffset;
    const scrollFactor = scrollY * 0.001; // Ajusta este factor para controlar la sensibilidad al scroll

    meshRef.current.rotation.y = t * 0.3 + scrollFactor;
    meshRef.current.rotation.z = t * 0.2 + scrollFactor * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {type === 'torus' ? (
          <torusGeometry args={[1.5, 0.4, 16, 50]} />
        ) : (
          <boxGeometry args={[2.5, 2.5, 2.5, 7, 7, 7]}  />
        )}

        {/* Dark Veil: glassmorphism */}
        <MeshDistortMaterial 
          color="#DA70D6" 
          speed={2} 
          distort={0.3}
          wireframe 
          opacity={0.2}
          transparent
        />
      </mesh>
    </Float>
  );
};
export default FloatingGeometry;