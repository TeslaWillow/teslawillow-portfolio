import React from 'react';
import { ImageDithering } from '@paper-design/shaders-react';

const ProfileImage: React.FC<{ src: string;}> = ({ src }) => {
  const isMobile = window.innerWidth < 768;

  return (
    <div>
        <ImageDithering
            width={isMobile ? 200 : 325}
            height={isMobile ? 200 : 325}
            image={src}
            colorBack="#000000"
            colorFront="#FDF4CC"
            colorHighlight="#FFE066"
            originalColors={false}
            inverted={false}
            type="8x8"
            size={2}
            colorSteps={2}
            fit="cover"
        />
    </div>
  );
};
export default ProfileImage;