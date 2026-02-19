// ./src/components/organisms/Navbar.tsx
import React, { useState, useEffect } from 'react';

/**
 * Navbar Organism
 * Handles dynamic transparency and glassmorphism on scroll.
 */
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Guard Clause: Only update state if value actually changes (Performance)
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 
        ${isScrolled ? 'py-3' : 'py-6'}`}
    >
      {/* Glassmorphism Layer */}
      <div className={`absolute inset-0 transition-opacity duration-500 -z-10
        ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-full h-full bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <span className="font-display text-xl tracking-tighter font-bold uppercase">
            TeslaWillow
          </span>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-gray-200 hover:text-white transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icon (LinkedIn as seen in image) */}
        <div className="flex items-center">
           <a href="#" className="text-xl hover:scale-110 transition-transform">
              <span className="font-bold">in</span>
           </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;