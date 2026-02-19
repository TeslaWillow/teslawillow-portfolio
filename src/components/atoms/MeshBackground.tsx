import React from 'react';
import DarkVeil from './DarkVeil';

/**
 * MeshBackground Atom
 */
const MeshBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-brand-dark">
      <DarkVeil 
        speed={2} 
        noiseIntensity={0.025} 
        hueShift={175}
        warpAmount={5}
        />
    </div>
  );
};

export default MeshBackground;