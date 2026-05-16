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
      <p>Copyright and stuff</p>
    </footer>
  )
})

export default Footer
