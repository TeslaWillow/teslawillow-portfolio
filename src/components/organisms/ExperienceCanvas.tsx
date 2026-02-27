import { Canvas } from '@react-three/fiber';
import { FloatingGeometry } from '../atoms';
import experienceData from '../../../public/data/experience.json';

const ExperienceCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 50 }}
        dpr={[1,2]}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        
        {experienceData.map((exp, index) => (
          <FloatingGeometry 
            key={exp.id}
            type={exp.geometry as 'torus' | 'box'}
            // Alternate positions: left for even, right for odd, and staggered vertically
            position={[
              index % 2 === 0 ? 6 : -6, 
              -index * 9 + 5, // Staggered vertical position
              -10 - index * 5 // Staggered depth for parallax effect
            ]}
          />
        ))}
      </Canvas>
    </div>
  );
};
export default ExperienceCanvas;