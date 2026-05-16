import { useState, useRef, useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import experienceData from '../../data/experience.json'
import type { Experience } from '../../types/experience'

const jobs = experienceData as Experience[]

const Experience = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const [activeTab, setActiveTab] = useState(0)
  const [highlightStyle, setHighlightStyle] = useState({ transform: 'translateY(0px)' })
  const activeBtnRef = useRef<HTMLButtonElement>(null)
  const tabListRef = useRef<HTMLDivElement>(null)
  const isMobile = useRef(false)

  useEffect(() => {
    const updateHighlight = () => {
      if (activeBtnRef.current && tabListRef.current) {
        if (isMobile.current) {
          setHighlightStyle({
            transform: `translateX(${activeBtnRef.current.offsetLeft}px)`,
            width: `${activeBtnRef.current.offsetWidth}px`,
          })
        } else {
          setHighlightStyle({
            transform: `translateY(${activeTab * 42}px)`,
          })
        }
      }
    }
    updateHighlight()
    window.addEventListener('resize', updateHighlight)
    return () => window.removeEventListener('resize', updateHighlight)
  }, [activeTab])

  useEffect(() => {
    isMobile.current = window.innerWidth <= 768
    const checkMobile = () => { isMobile.current = window.innerWidth <= 768 }
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      ref={ref}
      id="experience"
      className={`py-[100px] px-[110px] max-w-[1200px] mx-auto max-[1080px]:py-[100px] max-[1080px]:px-[100px] max-[768px]:py-[80px] max-[768px]:px-[50px] max-[480px]:py-[60px] max-[480px]:px-[25px] ${isVisible ? 'animate-[fadeIn_0.8s_ease-in_forwards]' : 'opacity-0'}`}
    >
      <h2 className="flex items-center w-full whitespace-nowrap text-[clamp(26px,5vw,32px)] font-semibold text-slate mb-[40px]">
        <span className="text-accent font-mono text-[clamp(16px,3vw,20px)] font-normal mr-[10px] relative bottom-[4px]">
          02.
        </span>
        Where I've Worked
        <span className="relative block w-[300px] h-[1px] ml-[20px] bg-navy-lightest max-[768px]:w-[200px] max-[480px]:w-[100px] max-[480px]:ml-[10px]" />
      </h2>

      <div className="flex min-h-[340px] max-[768px]:block">
        <div
          ref={tabListRef}
          className="relative z-[3] w-max p-0 m-0 list-none max-[768px]:flex max-[768px]:overflow-x-auto max-[768px]:w-full max-[768px]:mb-[30px]"
          role="tablist"
          aria-label="Job tabs"
        >
          <div
            className="absolute top-0 left-0 z-10 w-[2px] h-[42px] rounded bg-accent transition-transform duration-250 delay-[0.1s] max-[768px]:top-auto max-[768px]:bottom-0 max-[768px]:w-[var(--tab-width,120px)] max-[768px]:h-[2px]"
            style={highlightStyle}
          />
          {jobs.map((job, i) => (
            <button
              key={i}
              ref={i === activeTab ? activeBtnRef : null}
              role="tab"
              aria-selected={i === activeTab}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
              onClick={() => setActiveTab(i)}
              className={`flex items-center w-full h-[42px] px-[20px] pb-[2px] border-0 border-l-2 border-navy-lightest bg-transparent font-mono text-[13px] font-normal leading-none text-left whitespace-nowrap cursor-pointer transition-all duration-250 hover:bg-navy-light hover:text-accent max-[768px]:border-l-0 max-[768px]:border-b-2 max-[768px]:min-w-[120px] max-[768px]:justify-center max-[768px]:text-center ${
                i === activeTab ? 'text-accent' : 'text-slate-muted'
              }`}
            >
              {job.tabLabel || job.company}
            </button>
          ))}
        </div>

        <div className="relative w-full ml-[20px] max-[768px]:ml-0">
          {jobs.map((job, i) => (
            <div
              key={i}
              id={`panel-${i}`}
              role="tabpanel"
              aria-labelledby={`tab-${i}`}
              className={`w-full px-[5px] py-[10px] ${i === activeTab ? 'block' : 'hidden'}`}
            >
              <h3 className="mb-[2px] text-[22px] font-medium leading-[1.3] text-slate-light">
                <span>{job.role}</span>
                <span className="text-accent"> @ {job.company}</span>
              </h3>
              <p className="mb-[25px] text-slate-muted font-mono text-[13px]">{job.period}</p>
              <ul className="p-0 m-0 list-none text-lg">
                {job.description.map((item, j) => (
                  <li
                    key={j}
                    className="relative pl-[30px] mb-[10px] text-slate-muted before:content-['▹'] before:absolute before:left-0 before:text-accent before:text-xl before:leading-[12px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
