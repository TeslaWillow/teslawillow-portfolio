import React from 'react';
import MeshBackground from '../atoms/MeshBackground';
import Navbar from '../organisms/Navbar';

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
      <Navbar />

      <main className="relative z-10 pt-32 px-6 md:px-12">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;