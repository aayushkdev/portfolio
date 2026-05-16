import { memo } from 'react'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = memo(({ project }: ProjectCardProps) => {
  const hasGithub = project.githubLink && project.githubLink.trim() !== ''
  const hasDemo = project.demoLink && project.demoLink.trim() !== ''
  const primaryLink = hasDemo ? project.demoLink! : project.githubLink!

  return (
    <li className="relative cursor-default group">
      <div className="flex flex-col items-start relative h-full p-[2rem_1.75rem] rounded bg-navy-light transition-all duration-250 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] group-hover:-translate-y-[7px] group-hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)]">
        <header className="w-full">
          <div className="flex justify-between items-center mb-[35px] w-full">
            <div className="text-accent">
              <img
                src="/images/icons/folder.svg"
                alt="Folder"
                loading="lazy"
                className="w-[40px] h-[40px] icon-accent"
              />
            </div>
            <div className="flex items-center mr-[-10px] text-slate">
              {hasGithub && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-[5px_7px] relative z-[1] hover:text-accent"
                  aria-label="GitHub Link"
                >
                  <img
                    src="/images/icons/github.svg"
                    alt="GitHub"
                    loading="lazy"
                    className="w-[20px] h-[20px] icon-slate hover:icon-accent transition-all duration-250"
                  />
                </a>
              )}
              {hasDemo && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-[5px_7px] relative z-[1] hover:text-accent"
                  aria-label="External Link"
                >
                  <img
                    src="/images/icons/external.svg"
                    alt="External Link"
                    loading="lazy"
                    className="w-[20px] h-[20px] icon-slate hover:icon-accent transition-all duration-250"
                  />
                </a>
              )}
            </div>
          </div>

          <h3 className="m-0 mb-[10px] text-[22px] font-semibold">
            {primaryLink ? (
              <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-accent transition-colors duration-250 before:content-[''] before:block before:absolute before:inset-0 before:z-0"
              >
                {project.title}
              </a>
            ) : (
              <span className="text-slate-light">{project.title}</span>
            )}
          </h3>

          <p className="text-accent font-mono text-[13px] mb-[10px]">{project.category}</p>

          <p className="text-slate-muted text-[17px]">{project.description}</p>
        </header>

        <footer className="mt-auto w-full">
          <ul className="flex items-end flex-wrap p-0 mt-[20px] list-none">
            {project.tech.map(tech => (
              <li
                key={tech}
                className="font-mono text-[12px] leading-[1.75] mr-[15px] text-slate-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </li>
  )
})

export default ProjectCard
