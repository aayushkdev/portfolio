import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import projectsData from '../../data/projects.json'
import type { Project } from '../../types/project'

const allProjects = projectsData as Project[]
const featuredProjects = allProjects.slice(0, 3)

function FeaturedProjects() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="work"
      className={`py-[100px] px-[110px] max-w-[1200px] mx-auto max-[1080px]:py-[100px] max-[1080px]:px-[100px] max-[768px]:py-[80px] max-[768px]:px-[50px] max-[480px]:py-[60px] max-[480px]:px-[25px] scroll-mt-[100px] ${isVisible ? 'animate-[fadeIn_0.8s_ease-in_forwards]' : 'opacity-0'}`}
    >
      <h2 className="flex items-center w-full whitespace-nowrap text-[clamp(26px,5vw,32px)] font-semibold text-slate mb-[40px]">
        <span className="text-accent font-mono text-[clamp(16px,3vw,20px)] font-normal mr-[10px] relative bottom-[4px]">
          03.
        </span>
        Some Things I've Built
        <span className="relative block w-[300px] h-[1px] ml-[20px] bg-navy-lightest max-[768px]:w-[200px] max-[480px]:w-[100px] max-[480px]:ml-[10px]" />
      </h2>

      <ul className="list-none p-0 m-0 mb-[100px] max-[768px]:mb-[50px] max-[480px]:mb-[30px]">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0
          const hasDemo = project.demoLink && project.demoLink.trim() !== ''
          const hasGithub = project.githubLink && project.githubLink.trim() !== ''
          const primaryLink = hasDemo ? project.demoLink! : project.githubLink!
          const imageName = project.image || `${project.title.toLowerCase().replace(/\s+/g, '-')}.png`
          const imagePath = `/images/projects/${imageName}`

          return (
            <li
              key={project.id}
              className="relative grid grid-cols-12 gap-[10px] items-center mb-[100px] max-[768px]:mb-[70px] max-[768px]:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] max-[768px]:rounded max-[768px]:bg-navy-light max-[480px]:mb-[50px] max-[480px]:shadow-[0_10px_20px_-10px_rgba(2,12,27,0.7)]"
            >
              <div
                className={`relative row-span-full max-[768px]:p-[40px_40px_30px] max-[768px]:text-left max-[768px]:z-[5] max-[480px]:p-[30px_25px_25px] ${
                  isEven
                    ? 'col-span-6 col-start-7 max-[1080px]:col-span-8 max-[1080px]:col-start-5 text-right max-[768px]:text-left'
                    : 'col-span-6 col-start-1 max-[1080px]:col-span-8 max-[1080px]:col-start-1'
                } max-[768px]:col-span-full`}
              >
                <div>
                  <p className="m-[10px_0] text-accent font-mono text-[13px] font-normal max-[480px]:text-[11px] max-[480px]:m-[8px_0]">
                    Featured Project
                  </p>

                  <h3 className="text-slate text-[clamp(24px,5vw,28px)] font-semibold m-0 mb-[20px] max-[768px]:text-[clamp(20px,5vw,24px)] max-[480px]:text-[clamp(18px,5vw,22px)] max-[480px]:mb-[15px]">
                    <a
                      href={primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} (opens in new tab)`}
                      className="text-inherit no-underline hover:text-accent transition-colors duration-250 max-[768px]:before:content-[''] max-[768px]:before:block max-[768px]:before:absolute max-[768px]:before:inset-0 max-[768px]:before:z-0"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className="relative z-[2] p-[25px] rounded bg-navy-light text-slate-muted text-[18px] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] max-[768px]:p-[20px_0] max-[768px]:bg-transparent max-[768px]:shadow-none max-[768px]:text-[16px] max-[480px]:text-[14px] max-[480px]:leading-[1.5]">
                    <p>{project.description}</p>
                  </div>

                  {project.tech.length > 0 && (
                    <ul
                      className={`flex flex-wrap relative z-[2] m-[25px_0_10px] p-0 list-none max-[480px]:m-[20px_0_10px] ${
                        isEven ? 'justify-end max-[768px]:justify-start' : ''
                      }`}
                    >
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className={`font-mono text-[13px] whitespace-nowrap mb-[5px] text-slate-muted max-[768px]:text-slate-light max-[480px]:text-[11px] ${
                            isEven
                              ? 'ml-[20px] max-[768px]:mr-[10px] max-[768px]:ml-0 max-[480px]:mr-[15px]'
                              : 'mr-[20px] max-[480px]:mr-[15px]'
                          }`}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div
                    className={`flex items-center relative mt-[10px] text-slate max-[480px]:mt-[15px] ${
                      isEven
                        ? 'justify-end mr-[-10px] ml-0 max-[768px]:justify-start max-[768px]:ml-[-10px] max-[768px]:mr-0'
                        : 'ml-[-10px]'
                    }`}
                  >
                    {hasGithub && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Link (opens in new tab)"
                        className="flex items-center justify-center p-[10px] hover:text-accent max-[480px]:p-[8px]"
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
                        aria-label="External Link (opens in new tab)"
                        className="flex items-center justify-center p-[10px] hover:text-accent max-[480px]:p-[8px]"
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
              </div>

              <div
                className={`relative row-span-full z-[1] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] ${
                  isEven
                    ? 'col-span-7 col-start-1'
                    : 'col-span-7 col-start-6'
                } max-[768px]:col-span-full max-[768px]:max-h-[280px] max-[768px]:opacity-25 max-[480px]:max-h-[220px]`}
              >
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} screenshot (opens in new tab)`}
                    className="block w-full h-full bg-accent rounded group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 z-[3] mix-blend-screen bg-navy transition-all duration-250 pointer-events-none group-hover:bg-transparent group-focus:bg-transparent" />
                    <img
                      className="rounded w-full h-auto block mix-blend-multiply grayscale contrast-[1] brightness-90 transition-all duration-250 group-hover:filter-none group-hover:mix-blend-normal max-[768px]:object-cover max-[768px]:w-full max-[768px]:h-full max-[768px]:max-h-[280px] max-[768px]:grayscale max-[768px]:contrast-[1] max-[768px]:brightness-50 max-[480px]:max-h-[220px]"
                      src={imagePath}
                      alt={project.title}
                      loading="lazy"
                    />
                  </a>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="flex justify-center items-center mt-[80px] max-[768px]:mt-[60px] max-[480px]:mt-[40px]">
        <Link
          to="/projects"
          className="inline-block text-accent font-mono text-[14px] leading-none border border-accent rounded py-[20px] px-[28px] bg-transparent no-underline cursor-pointer transition-all duration-250 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#64ffda] focus-visible:-translate-x-1 focus-visible:-translate-y-1 focus-visible:shadow-[4px_4px_0_0_#64ffda] focus-visible:outline-none max-[480px]:py-[16px] max-[480px]:px-[24px] max-[480px]:text-[13px] max-[480px]:w-full max-[480px]:max-w-[280px]"
        >
          View All Projects
        </Link>
      </div>
    </section>
  )
}

export default FeaturedProjects
