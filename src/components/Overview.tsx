import React from 'react';
import { SKILLS, PROJECTS, EXPERIENCES } from '../constants';
import { GithubIcon, ExternalLinkIcon, LinkedinIcon, MailIcon } from './Icons';

// Glass-style grid container with blur + transparency
const GridItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={`rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-red-500/30 overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const Overview: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative mx-auto flex lg:h-screen lg:max-h-screen flex-col lg:items-center lg:justify-center lg:overflow-hidden px-4 py-4 sm:px-8 sm:py-8"
    >
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden mb-6">
        <h1 className="font-mono text-2xl tracking-wider text-red-500 mb-2">AAYUSH KUMAR</h1>
        <p className="text-sm text-gray-400 mb-3">
          Software developer and open-source contributor building scalable solutions and intuitive user experiences.
        </p>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/aayushkdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Profile">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/aayushkdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn Profile">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href="mailto:contact@aayushk.dev" className="text-gray-400 hover:text-white transition-colors" aria-label="Send Email">
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Mobile Photo - Only visible on mobile */}
      <div className="lg:hidden mb-6 flex justify-center">
        <div className="w-32 h-32 overflow-hidden rounded-lg border border-white/10">
          <img
            src="/headshot.jpg"
            alt="Aayush Kumar headshot"
            className="h-full w-full object-cover hover:brightness-110 transition-all duration-700"
            loading="lazy"
          />
        </div>
      </div>

      {/* Main grid - Desktop layout + mobile content */}
      <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 sm:gap-6 lg:h-full lg:max-h-[calc(100vh-8rem)]">
        {/* Headshot - Hidden on mobile, visible on desktop */}
        <GridItem className="hidden lg:flex items-center justify-center">
          <div className="aspect-square w-full overflow-hidden rounded-lg border border-white/10">
            <img
              src="/headshot.jpg"
              alt="Aayush Kumar headshot"
              className="h-full w-full object-cover grayscale hover:grayscale-0 hover:brightness-110 transition-all duration-700"
              loading="lazy"
            />
          </div>
        </GridItem>

        {/* About */}
        <GridItem>
          <h3 className="font-mono text-base sm:text-lg text-red-400">// about</h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            building thoughtful interfaces and efficient systems with a focus on
            simplicity and usability.
          </p>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
            balancing code precision with creative exploration across open-source
            projects and design systems.
          </p>
        </GridItem>

        {/* Experience */}
        <GridItem>
          <h3 className="font-mono text-base sm:text-lg text-red-400">// experience</h3>
          <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
            {EXPERIENCES.slice(0, 2).map((experience) => (
              <div key={experience.company}>
                <p className="text-white font-semibold text-base sm:text-lg">{experience.company}</p>
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                  {experience.role} — {experience.period}
                </p>
              </div>
            ))}
          </div>
        </GridItem>

        {/* Skills */}
        <GridItem className="sm:col-span-2 lg:col-span-2">
          <h3 className="font-mono text-base sm:text-lg text-red-400">// skill inventory</h3>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
            {SKILLS.slice(0, 4)
              .flatMap((cat) => cat.skills.slice(0, 5))
              .map((skill) => (
                <span
                  key={skill.name}
                  className="rounded border border-gray-700/60 bg-gray-800/40 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-gray-300 hover:border-red-500/40 hover:text-red-400 transition"
                >
                  {skill.name}
                </span>
              ))}
          </div>
        </GridItem>

        {/* Projects */}
        <GridItem>
          <h3 className="font-mono text-base sm:text-lg text-red-400">// featured projects</h3>
          <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
            {PROJECTS.slice(0, 3).map((project) => (
              <div
                key={project.title}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/10 pb-2"
              >
                <div className="mb-2 sm:mb-0">
                  <p className="font-semibold text-white text-sm sm:text-base">{project.title}</p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {project.tags.slice(0, 3).join(', ')}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    <ExternalLinkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    <GithubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </GridItem>
      </div>
    </section>
  );
};

export default Overview;