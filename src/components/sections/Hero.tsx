import { useScrollReveal } from '../../hooks/useScrollReveal'
import heroData from '../../data/hero.json'

const { greeting, name, byline, description } = heroData

const Hero = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col justify-center items-start w-full max-w-[1000px] mx-auto px-[25px] max-[1200px]:px-[100px] max-[1200px]:pt-[200px] max-[1200px]:pb-[200px] max-[768px]:px-[50px] max-[768px]:pt-[150px] max-[768px]:pb-[150px] max-[480px]:px-[25px] max-[480px]:pt-[125px] max-[480px]:pb-[125px] ${isVisible ? 'animate-[fadeIn_0.8s_ease-in_forwards]' : 'opacity-0'}`}>
      <h1 className="text-accent font-mono text-[clamp(14px,5vw,16px)] font-normal mb-[30px] ml-[4px]">
        {greeting}
      </h1>
      <h2 className="text-slate font-sans font-semibold leading-[1.1] text-[clamp(40px,8vw,80px)] max-md:text-[clamp(40px,10vw,60px)]">
        {name}
      </h2>
      <h3 className="text-slate-muted font-sans font-semibold leading-[0.9] text-[clamp(40px,8vw,80px)] max-md:text-[clamp(40px,10vw,60px)] mt-[5px]">
        {byline}
      </h3>
      <p className="mt-[20px] max-w-[540px] text-slate-muted">
        {description}
      </p>
      <div>
        <a
          href="#work"
          className="text-accent border border-accent rounded px-[1.75rem] py-[1.25rem] text-sm font-mono leading-none mt-[50px] inline-block hover:shadow-[4px_4px_0_0_var(--color-accent)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:shadow-[4px_4px_0_0_var(--color-accent)] focus-visible:-translate-x-1 focus-visible:-translate-y-1"
        >
          Check out my work!
        </a>
      </div>
    </section>
  )
}

export default Hero
