import { Canvas } from '@react-three/fiber';
import { FloatingGeometry } from '../atoms';
import experienceData from '../../../public/data/experience.json';
import { Environment } from '@react-three/drei/core/Environment';
import { ContactShadows } from '@react-three/drei/core/ContactShadows';

const ExperienceCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 50 }}
        dpr={[1,2]}
      >
        {/* AMBIENT LIGHTS */}
        <ambientLight intensity={5} />

        {/* DIRECTIONAL LIGHTS */}
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
    
        {/* ENVIRONMENT MAP: City preset for subtle reflections and ambient lighting */}
        <Environment preset="city" />
        
        {experienceData.map((exp, index) => (
          <FloatingGeometry 
            key={exp.id}
            type={exp.geometry as 'torus' | 'box'}
            // Alternate positions: left for even, right for odd, and staggered vertically
            position={[
              index % 2 === 0 ? 6 : -6, 
              -index * 5.5 + 5, // Staggered vertical position
              -10 - index * 5 // Staggered depth for parallax effect
            ]}
            index={index}
          />
        ))}

        <ContactShadows position={[0, -20, 0]} opacity={0.4} scale={40} blur={2} far={40} />
      </Canvas>
    </div>
  );
};
export default ExperienceCanvas;