import React from 'react';
import Typography from '../atoms/Typography';
import Typewriter from '../atoms/Typewriter';
import portfolioData from '../../assets/data/portfolio.json';

const Hero: React.FC = () => {
  const { roles } = portfolioData.profile;

  // Guard Clause: If no roles provided, show a fallback
  if (!roles || roles.length === 0) {
    return <Typography variant="h1">Developer</Typography>;
  }

  return (
    <section className="flex flex-col gap-4">
      <Typography variant="caption" className="uppercase">
        HÉCTOR J. CABALLERO - TESLAWILLOW
      </Typography>

      <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold min-h-[1.2em]">
        <Typewriter words={roles} />
      </h1>

      <Typography variant="body" className="max-w-2xl mt-4">
        With a passion for creating immersive digital experiences, I specialize 
        in crafting visually stunning and highly performant web applications.
      </Typography>

      <div className="mt-8 flex items-center gap-4 group cursor-pointer w-fit">
        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110">
          <span className="rotate-45">→</span>
        </div>
        <a href="#projects-section" className="uppercase text-xs tracking-widest font-bold">View Projects</a>
      </div>
    </section>
  );
};

export default Hero;