import React from 'react';
import MeshBackground from '../atoms/MeshBackground';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * MainLayout Template
 * Acts as the skeleton of the application.
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Guard Clause: No point in rendering an empty layout
  if (!children) return null;

  return (
    <div className="relative min-h-screen">
      <MeshBackground />
      
      {/* Navigation (Next Organism to build) */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center">
         {/* Placeholder for Navbar Organism */}
         <div className="font-display text-xl font-bold tracking-tighter">TeslaWillow</div>
         <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
            <span className="hover:text-white cursor-pointer transition-colors">About</span>
            <span className="hover:text-white cursor-pointer transition-colors">Projects</span>
         </div>
      </nav>

      <main className="relative z-10 pt-32 px-6 md:px-12">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;