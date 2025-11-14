import React from 'react';
import { PROJECTS } from '../constants';
import type { ProjectItem } from '../types';
import { GithubIcon, ExternalLinkIcon } from './Icons';

const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => (
  <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/20 p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50">
    <div className="flex-grow">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-0">{item.title}</h3>
        <div className="flex flex-shrink-0 items-center space-x-3 sm:space-x-4">
          {item.demoLink && (
            <a 
              href={item.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transform text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-white"
              aria-label="Project Demo"
            >
              <ExternalLinkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          )}
          <a 
            href={item.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transform text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-white"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
      <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-400">{item.description}</p>
    </div>
    <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
      {item.tags.map((tag) => (
        <span key={tag} className="rounded bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2 className="font-mono text-2xl sm:text-3xl text-red-500">/projects</h2>
      <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} item={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;