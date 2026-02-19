import React from 'react';
import * as LucideIcons from 'lucide-react';

// Name of icons (Intellisense)
export type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: IconName;
  color?: string;
  size?: number | string;
  className?: string;
}

const NAME_OF_PACKAGE = "lucide-react";

/**
 * Icon Atom
 * Wrapper for Lucide icons to ensure consistency across the portfolio.
 */
const Icon: React.FC<IconProps> = ({ 
  name, 
  color = 'currentColor', 
  size = 20, 
  className = '' 
}) => {
  // Guard Clause: Check if icon exists
  const LucideIcon = LucideIcons[name] as React.ElementType;
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" does not exist in ${NAME_OF_PACKAGE}`);
    return null;
  }

  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon;