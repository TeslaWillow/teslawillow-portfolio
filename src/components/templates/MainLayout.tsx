import React from 'react';
import { MeshBackground, ScrollProgress } from '../atoms';
import { Footer, Navbar } from '../organisms';

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
      
      {/* Background Layer */}
      <MeshBackground />
      
      {/* UI Layers */}
      <ScrollProgress />
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-32 px-6 md:px-12">
        {children}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default MainLayout;