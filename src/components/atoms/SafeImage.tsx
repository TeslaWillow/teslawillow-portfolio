import React from 'react';

interface SafeImageProps {
  src: string;
  srcMobile?: string; // Optional prop for mobile-specific assets
  alt: string;
  className?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ src, srcMobile, alt, className }) => {
  // Helpers to generate fallbacks
  const getFallback = (path: string) => path.endsWith('.webp') 
    ? path.replace(/\.(webp)$/, '.jpg') 
    : path;

  const desktopFallback = getFallback(src);
  const mobileFallback = srcMobile ? getFallback(srcMobile) : null;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/assets/images/placeholder-error.jpg';
    target.onerror = null; // Guard Clause: prevent infinite loops

    const container = target.parentElement;
    if (container) {
      container.querySelectorAll('source').forEach((s) => s.remove());
    }
  };

  return (
    <picture className={className}>
      {/* MOBILE SOURCES (Max-width: 768px) */}
      {srcMobile && (
        <>
          <source srcSet={srcMobile} media="(max-width: 768px)" type="image/webp" />
          <source srcSet={mobileFallback!} media="(max-width: 768px)" type="image/jpeg" />
        </>
      )}

      {/* DESKTOP / DEFAULT SOURCES */}
      {src.endsWith('.webp') && <source srcSet={src} type="image/webp" />}
      <source srcSet={desktopFallback} type="image/jpeg" />

      <img
        src={desktopFallback}
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