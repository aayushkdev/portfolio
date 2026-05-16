import heroData from '../../data/hero.json'

const { greeting, name, byline, description } = heroData

const fadeInClass = 'animate-[fadeIn_0.5s_ease-in_forwards] opacity-0'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start w-full max-w-[1000px] mx-auto px-[25px] max-lg:px-[100px] max-lg:pt-[200px] max-lg:pb-[200px] max-md:px-[50px] max-md:pt-[150px] max-md:pb-[150px] max-sm:px-[25px] max-sm:pt-[125px] max-sm:pb-[125px]">
      <h1
        className={`text-accent font-mono text-[clamp(14px,5vw,16px)] font-normal mb-[30px] ml-[4px] ${fadeInClass}`}
        style={{ animationDelay: '0.1s' }}
      >
        {greeting}
      </h1>
      <h2
        className={`text-slate font-sans font-semibold leading-[1.1] text-[clamp(40px,8vw,80px)] max-md:text-[clamp(40px,10vw,60px)] ${fadeInClass}`}
        style={{ animationDelay: '0.2s' }}
      >
        {name}
      </h2>
      <h3
        className={`text-slate-muted font-sans font-semibold leading-[0.9] text-[clamp(40px,8vw,80px)] max-md:text-[clamp(40px,10vw,60px)] mt-[5px] ${fadeInClass}`}
        style={{ animationDelay: '0.3s' }}
      >
        {byline}
      </h3>
      <p
        className={`mt-[20px] max-w-[540px] text-slate-muted ${fadeInClass}`}
        style={{ animationDelay: '0.4s' }}
      >
        {description}
      </p>
      <div className={fadeInClass} style={{ animationDelay: '0.5s' }}>
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
