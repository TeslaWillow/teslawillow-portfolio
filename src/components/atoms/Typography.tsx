import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  className?: string;
}

/**
 * Atomic Typography component
 * Centralizes the font styles for the entire website, ensuring consistency and ease of maintenance.
 * Variants include headings (h1-h6), body text, and captions.
 * Utilizes Tailwind CSS for styling, with responsive adjustments for different screen sizes.
 */
const Typography = ({ 
  children, 
  variant = 'body', 
  className = '' 
}: TypographyProps) => {
  
  // Guard Clause for safety
  if (!children) return null;

  const baseStyles = {
    h1: 'text-6xl md:text-8xl font-display tracking-tight leading-tight',
    h2: 'text-3xl md:text-5xl font-display',
    h3: 'text-2xl md:text-4xl font-display',
    h4: 'text-xl md:text-3xl font-display',
    h5: 'text-lg md:text-2xl font-display',
    h6: 'text-base md:text-xl font-display',
    body: 'text-lg md:text-xl font-light text-gray-300 leading-relaxed',
    caption: 'text-sm uppercase tracking-widest text-gray-500'
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component className={`${baseStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;