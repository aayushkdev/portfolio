const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/aayushkdev',
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3 m14 6v-3.87 a3.37 3.37 0 0 0-.94-2.61 c3.14-.35 6.44-1.54 6.44-7 A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1 S18.73.65 16 2.48 a13.38 13.38 0 0 0-7 0 C6.27.65 5.09 1 5.09 1 A5.07 5.07 0 0 0 5 4.77 a5.44 5.44 0 0 0-1.5 3.78 c0 5.42 3.3 6.61 6.44 7 A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/aayushkdev',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: 'Email',
    url: 'mailto:folio@aayushk.dev',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
]

const SocialSidebar = () => {
  return (
    <div className="fixed left-[40px] max-[1200px]:left-[20px] max-[769px]:left-[10px] bottom-0 w-[40px] z-10 max-[769px]:hidden">
      <ul className="flex flex-col items-center list-none m-0 p-0 after:content-[''] after:block after:w-[1px] after:h-[90px] after:mx-auto after:bg-slate-light">
        {socialLinks.map((link) => (
          <li key={link.label} className="last-of-type:mb-5">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-[10px] block text-slate-light hover:text-accent hover:-translate-y-[3px] transition-all duration-300 focus-visible:outline-none focus-visible:text-accent"
            >
              <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <title>{link.label}</title>
                {link.icon}
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialSidebar
