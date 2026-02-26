import React from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ src, alt, className }) => {
  // Logic: Generate fallback URL if it's a webp image
  const isWebp = src.endsWith('.webp');
  const fallbackUrl = isWebp ? src.replace(/\.(webp)$/, '.jpg') : src;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/assets/images/placeholder-error.jpg';
    target.onerror = null; // Guard: prevent infinite loops

    const container = target.parentElement;
    if (container) {
      container.querySelectorAll('source').forEach((s) => s.remove());
    }
  };

  return (
    <picture className={className}>
      {isWebp && <source srcSet={src} type="image/webp" />}
      <source srcSet={fallbackUrl} type="image/jpeg" />
      <img
        src={fallbackUrl}
        className={`w-full h-full object-cover ${className}`}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={handleError}
      />
    </picture>
  );
};

export default SafeImage;