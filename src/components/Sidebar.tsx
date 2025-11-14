import React from 'react';
import { NAV_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import type { Section } from '../App';

interface SidebarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="flex flex-col lg:h-full lg:w-1/3 lg:max-w-sm xl:w-1/4">
      <div className="flex-grow">
        <h1 className="font-mono text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-wider text-red-500">
          <span className="lg:hidden">A.</span>
          <span className="hidden lg:block">AAYUSH KUMAR</span>
        </h1>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-400 lg:block hidden">
          Software developer and open-source contributor building scalable solutions and intuitive user experiences.
        </p>
        <nav className="mt-3 sm:mt-4 lg:mt-12 flex flex-row lg:flex-col lg:space-y-4 space-x-3 sm:space-x-4 lg:space-x-0">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveSection(link.href as Section)}
              className={`block text-left font-mono text-sm sm:text-base lg:text-lg capitalize transition-all duration-200 ${
                activeSection === link.href
                  ? 'text-red-500'
                  : 'text-gray-400 hover:text-white lg:hover:translate-x-1'
              }`}
            >
              / {link.name}
            </button>
          ))}
          
          <a
            href="resume"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-left font-mono text-sm sm:text-base lg:text-lg capitalize transition-all duration-200 text-gray-400 hover:text-white lg:hover:translate-x-1 mt-4 lg:mt-0"
          >
            / resume
          </a>
        </nav>
      </div>
      
      <div className="mt-4 lg:mt-8 lg:block hidden">
        <div className="mt-6 flex items-center space-x-6">
          <a href="https://github.com/aayushkdev" target="_blank" rel="noopener noreferrer" className="transform text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-white" aria-label="GitHub Profile">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/aayushkdev" target="_blank" rel="noopener noreferrer" className="transform text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-white" aria-label="LinkedIn Profile">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href="mailto:contact@aayushk.dev" className="transform text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-white" aria-label="Send Email">
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">&copy; {new Date().getFullYear()} Aayush Kumar.</p>
      </div>
    </aside>
  );
};

export default Sidebar;