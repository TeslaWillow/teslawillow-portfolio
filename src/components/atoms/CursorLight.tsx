import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const CursorLight: React.FC = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useEffect(() => {
    // Event listener to track mouse movement and update the mousePos ref with normalized coordinates
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to range [-1, 1]
      mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!lightRef.current) return;

    // state.mouse coordinates are normalized between -1 and 1, so we need to convert them to world coordinates
    const x = (state.pointer.x * viewport.width) / 2;
    const y = (state.pointer.y * viewport.height) / 2;

    // Update the light position to follow the cursor, with a fixed z-axis to create a "spotlight" effect on the 3D scene
    // Suavizamos el movimiento (Lerp) para que se sienta orgánico/líquido
    lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, x, 0.1);
    lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, y, 0.1);
    lightRef.current.position.z = 2; // Un poco más cerca para que brille más
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={100}  // High intensity for a strong spotlight effect
      distance={100}   // How far the light reaches before it fades out
      color="#FFFFFF" // Color of the light
      decay={1}       // How the light intensity decreases over distance (2 is physically accurate)
    />
  );
};
export default CursorLight;