import { memo } from 'react'

const Footer = memo(() => {
  return (
    <footer className="text-center py-[40px] text-slate-muted text-[14px]">
      <div className="hidden max-[768px]:flex justify-center gap-[25px] mt-[20px] mb-5">
        <a href="https://github.com/aayushkdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)">
          <img
            src="/images/icons/github.svg"
            alt=""
            width="24"
            height="24"
            loading="lazy"
            className="icon-slate hover:icon-accent transition-all duration-250"
          />
        </a>
        <a href="https://linkedin.com/in/aayushkdev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)">
          <img
            src="/images/icons/linkedin.svg"
            alt=""
            width="24"
            height="24"
            loading="lazy"
            className="icon-slate hover:icon-accent transition-all duration-250"
          />
        </a>
        <a href="mailto:folio@aayushk.dev" aria-label="Email">
          <img
            src="/images/icons/mail.svg"
            alt=""
            width="24"
            height="24"
            loading="lazy"
            className="icon-slate hover:icon-accent transition-all duration-250"
          />
        </a>
      </div>
      <p>
        <a href="https://github.com/aayushkdev/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-accent relative after:content-[''] after:absolute after:w-full after:h-px after:bottom-0 after:left-0 after:bg-accent after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">Copyright and stuff</a>
      </p>
    </footer>
  )
})

export default Footer
