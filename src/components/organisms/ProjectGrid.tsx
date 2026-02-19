// ./src/components/organisms/ProjectGrid.tsx
import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";
import ProjectCard from '../molecules/ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

/**
 * ProjectGrid Organism
 * Fetches data from JSON and renders an animated grid of projects.
 */
const ProjectGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a fetch or reading from local JSON
    // In a real Vercel deploy, this file will be in /public/data/
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading projects:", err);
        setLoading(false);
      });
  }, []);

  // Guard Clause: Loading state
  if (loading) return <div className="text-gray-500 font-display italic">Loading masterpieces...</div>;
  
  // Guard Clause: Empty state
  if (projects.length === 0) return null;

  // Animation variants for Stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-5 lg:py-10" id="projects-section">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectGrid;