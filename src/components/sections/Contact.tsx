import { useScrollReveal } from '../../hooks/useScrollReveal'

function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-[100px] px-[110px] max-w-[800px] mx-auto text-center mb-[100px] max-[1080px]:py-[100px] max-[1080px]:px-[100px] max-[768px]:py-[80px] max-[768px]:px-[50px] max-[768px]:mb-[50px] max-[480px]:py-[60px] max-[480px]:px-[25px] scroll-mt-[100px] ${isVisible ? 'animate-[fadeIn_0.8s_ease-in_forwards]' : 'opacity-0'}`}
    >
      <h2 className="block text-accent font-mono text-[16px] font-normal mb-[10px] mt-[10px]">
        <span className="text-[13px]">04.</span>
        {' '}What's Next?
      </h2>

      <h2 className="text-slate text-[clamp(40px,5vw,60px)] font-semibold m-0">
        Get In Touch
      </h2>

      <p className="text-slate-muted text-[20px] my-0 mx-auto max-w-[600px] max-[768px]:text-[18px] max-[480px]:text-[16px]">
        I'm currently looking for new opportunities and my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>

      <a
        href="mailto:folio@aayushk.dev"
        className="inline-block relative text-accent bg-transparent border border-accent rounded py-[20px] px-[28px] mt-[50px] font-mono text-[14px] leading-none no-underline cursor-pointer transition-all duration-250 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#64ffda] focus-visible:-translate-x-1 focus-visible:-translate-y-1 focus-visible:shadow-[4px_4px_0_0_#64ffda] focus-visible:outline-none"
      >
        Say Hello
      </a>
    </section>
  )
}

export default Contact
