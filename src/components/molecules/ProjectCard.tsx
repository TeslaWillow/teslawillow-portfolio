import React from 'react';
import Typography from '../atoms/Typography';
import { Link } from 'react-router';

interface Project {
  id: number;
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
    <Link
      to={`/project/${project.id}`}
    >
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
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={project.id + tag}
                className="text-[10px] uppercase tracking-wider border border-white/20 px-2.5 py-1 rounded-full text-gray-300 bg-white/5 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-display text-2xl mb-2">{project.title}</h3>
          <Typography
            variant="small"
            children={project.description}
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;