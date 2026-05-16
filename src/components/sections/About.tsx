import { useScrollReveal } from '../../hooks/useScrollReveal'
import aboutData from '../../data/about.json'

const { paragraph1, paragraph2, links, skills, image } = aboutData as {
  paragraph1: string[]
  paragraph2: string
  links: Record<string, string>
  skills: string[]
  image: string
}

const About = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="about"
      className={`py-[100px] px-[110px] max-w-[1200px] mx-auto max-[1080px]:py-[100px] max-[1080px]:px-[100px] max-[768px]:py-[80px] max-[768px]:px-[50px] max-[480px]:py-[60px] max-[480px]:px-[25px] scroll-mt-[100px] ${isVisible ? 'animate-[fadeIn_0.8s_ease-in_forwards]' : 'opacity-0'}`}
    >
      <h2 className="flex items-center w-full whitespace-nowrap text-[clamp(26px,5vw,32px)] font-semibold text-slate mb-[40px]">
        <span className="text-accent font-mono text-[clamp(16px,3vw,20px)] font-normal mr-[10px] relative bottom-[4px]">
          01.
        </span>
        About Me
        <span className="relative block w-[300px] h-[1px] ml-[20px] bg-navy-lightest max-[768px]:w-[200px] max-[480px]:w-[100px] max-[480px]:ml-[10px]" />
      </h2>

      <div className="grid grid-cols-[3fr_2fr] gap-[50px] max-[768px]:block">
        <div className="about-text">
          <p className="mb-[15px] text-slate-muted last-of-type:mb-0">
            {paragraph1.map((seg, i) =>
              links[seg] ? (
                <a
                  key={i}
                  href={links[seg]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent relative after:content-[''] after:absolute after:w-full after:h-px after:bottom-0 after:left-0 after:bg-accent after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {seg}
                </a>
              ) : (
                <span key={i}>{seg}</span>
              ),
            )}
          </p>
          <p className="mb-[15px] text-slate-muted last-of-type:mb-0">{paragraph2}</p>
          <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] gap-x-[10px] gap-y-0 p-0 mt-[20px] overflow-hidden list-none">
            {skills.map((skill) => (
              <li
                key={skill}
                className="relative mb-[10px] pl-[20px] font-mono text-xs text-slate-muted before:content-['▹'] before:absolute before:left-0 before:text-accent before:text-sm before:leading-[12px]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative max-w-[300px] max-[768px]:mx-auto max-[768px]:mt-[50px] max-[768px]:w-[70%]">
          <div className="group relative w-full rounded bg-accent shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all duration-250 hover:-translate-x-1 hover:-translate-y-1">
            <img
              src={image}
              alt="Profile"
              className="relative rounded w-full aspect-square object-cover mix-blend-multiply grayscale contrast-[1] group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-250"
            />
            <div className="absolute top-[14px] left-[14px] w-full h-full border-2 border-accent rounded -z-10 transition-all duration-250 group-hover:translate-x-[8px] group-hover:translate-y-[8px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
