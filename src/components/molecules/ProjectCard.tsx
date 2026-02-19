import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

/**
 * ProjectCard Molecule
 * Implements Glassmorphism and clean hover states.
 */
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  // Guard Clause
  if (!project) return null;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-tighter border border-white/20 px-2 py-0.5 rounded-full text-gray-400">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-2xl mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 font-light">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;