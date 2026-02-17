import React from 'react';

/**
 * MeshBackground Atom
 */
const MeshBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-brand-dark">
      {/* Circle 1: Top Left - Purple */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] 
                   bg-brand-purple/20 rounded-full blur-[120px] 
                   animate-mesh opacity-60" 
      />

      {/* Circle 2: Bottom Right - Indigo/Blue */}
      <div 
        className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] 
                   bg-brand-indigo/30 rounded-full blur-[150px] 
                   animate-mesh [animation-delay:2s]" 
      />

      {/* Circle 3: Center - Pinkish accent */}
      <div 
        className="absolute top-1/4 left-1/3 w-[40vw] h-[40vw] 
                   bg-brand-pink/10 rounded-full blur-[100px] 
                   animate-mesh [animation-delay:4s]" 
      />

      {/* Noise Texture Overlay: Da el look granulado de la imagen de Naomi Ncube */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none 
                   bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" 
      />
      
      {/* Scanline/Vignette effect for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-brand-dark/50" />
    </div>
  );
};

export default MeshBackground;