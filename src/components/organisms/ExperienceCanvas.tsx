import { Canvas } from '@react-three/fiber';
import { CursorLight, FloatingGeometry } from '../atoms';
import experienceData from '../../../public/data/experience.json';
import { Environment } from '@react-three/drei/core/Environment';
import { ContactShadows } from '@react-three/drei/core/ContactShadows';

type Shapes = 'torus' | 'box' | 'pyramid' | 'icosahedron' | 'knot';

const ExperienceCanvas: React.FC = () => {
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="absolute pointer-events-none inset-0 z-0 w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 50 }}
        dpr={[1,2]}
        eventSource={document.getElementById('root') || undefined}
      >
        {/* AMBIENT LIGHTS */}
        <ambientLight intensity={3.5} />

        {/* CURSOR-BASED LIGHT: A spotlight that follows the cursor for dynamic interaction */}
        <CursorLight />

        {/* DIRECTIONAL LIGHTS */}
        {/* <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" /> */}
    
        {/* ENVIRONMENT MAP: City preset for subtle reflections and ambient lighting */}
        <Environment preset="city" />
        
        {experienceData.map((exp, index) => (
          <FloatingGeometry 
            key={exp.id}
            type={exp.geometry as Shapes}
            // Alternate positions: left for even, right for odd, and staggered vertically
            position={[
              isMobile ? 0.5 : (index % 2 === 0 ? 10 : -10), 
              -index * 6.5 + 5, 
              isMobile ? -25 : -10 - index * 5
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