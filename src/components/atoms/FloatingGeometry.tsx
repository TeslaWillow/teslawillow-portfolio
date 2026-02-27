import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

import experienceData from '../../../public/data/experience.json';

interface Props {
  type: 'torus' | 'box' | 'pyramid';
  position: [number, number, number];
  index: number; // Unique Animations
}

const FloatingGeometry: React.FC<Props> = ({ type, position, index }: Props) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometryColor = experienceData[index]?.geometryColor || "#DA70D6";

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
        {type === 'torus' && (
            /*  args[0] = Radius (distance from center to middle of tube)
                args[1] = Tube Radius (thickness of the tube)
                args[2] = Radial Segments (number of segments around the radius)
                args[3] = Tubular Segments (number of segments along the tube)
            */
          <torusGeometry args={[1.5, 0.4, 16, 100]} />
        )}
        {type === 'box' && (
           /*
                args[0] = Width (2.5)
                args[1] = Height (2.5)
                args[2] = Depth (2.5)
           */
          <boxGeometry args={[2.5, 2.5, 2.5]} />
        )}
        {type === 'pyramid' && (
          /* args[0] = Superior Radius (0 for pointy top)
             args[1] = Inferior Radius (base size)
             args[2] = Height
             args[3] = Radial Segments (4 for pyramid)
             args[4] = Height Segments (1 is enough for a pyramid)
          */
          <cylinderGeometry args={[0, 2.5, 4, 4, 1]} /> 
        )}

        {/* Dark Veil: glassmorphism */}
        <MeshTransmissionMaterial 
          /* Base color */
          color={geometryColor}
          
          /* Refraction */
          ior={1.4} 
          
          /* Roughness: how rough the surface is. 0 is perfectly smooth, >0 is rougher. */
          roughness={0.05}
          
          /* Light transmission */
          transmission={0.95} 
          
          chromaticAberration={0.08} 
          
          thickness={1} 
          
          wireframe={false} 
          
          opacity={ geometryColor === "#DA70D6" ? 0.9 : 1}
          transparent={ geometryColor === "#DA70D6" }

          emissive="#FFFFFF"
          emissiveIntensity={0.001}
        />
      </mesh>
    </Float>
  );
};
export default FloatingGeometry;