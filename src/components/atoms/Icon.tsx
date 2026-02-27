import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// File-level constant for better maintainability and to avoid magic strings
export type IconName = keyof typeof LucideIcons;

interface IconProps extends LucideProps {
  name: IconName;
  className?: string;
}

const NAME_OF_PACKAGE = "lucide-react";

/**
 * Icon Atom
 * A simple wrapper around the lucide-react library to allow dynamic icon rendering by name.
 */
const Icon: React.FC<IconProps> = ({ 
  name, 
  color = 'currentColor', 
  size = 20, 
  className = '',
  ...props 
}) => {
  // Guard Clause: Check if the icon name exists in the package to prevent runtime errors
  const IconComponent = LucideIcons[name] as React.ComponentType<LucideProps>;
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist in ${NAME_OF_PACKAGE}`);
    return null;
  }

  // Pass through color, size, and any additional props to the icon component for flexibility
  return <IconComponent color={color} size={size} className={className} {...props} />;
};

export default Icon;