import { useState, useEffect } from 'react'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { navLinks } from '../../types/nav'
import IconHex from '../shared/IconHex'
import IconLogo from '../shared/IconLogo'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.scrollY < 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHidden = scrollDirection === 'down' && !scrolledToTop

  return (
    <header
      className={`fixed top-0 z-50 w-full px-[50px] max-lg:px-10 max-md:px-[25px] transition-all duration-300 bg-[rgba(10,25,47,0.85)] backdrop-blur-[10px]
        ${!scrolledToTop
          ? 'h-[70px] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]'
          : 'h-[100px]'
        }
        ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className="flex justify-between items-center w-full h-full relative font-mono z-50">
        <a
          href="/"
          aria-label="home"
          className="group text-accent relative w-[42px] h-[42px] block
            transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1"
        >
          <div className="absolute top-0 left-0 -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[3px]">
            <IconHex />
          </div>
          <div className="relative z-10">
            <IconLogo />
          </div>
        </a>

        <div className="flex items-center max-md:hidden">
          <ol className="flex items-center list-none p-0 m-0">
            {navLinks.map((link, i) => (
                  <li key={i} className="mx-[5px] text-xs relative">
                    <a
                      href={link.url}
                      className="p-[10px] text-slate hover:text-accent transition-colors duration-300 text-sm font-mono"
                    >
                  <span className="text-accent text-xs mr-[5px]">{String(i + 1).padStart(2, '0')}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent border border-accent rounded px-4 py-3 text-[13px] font-mono leading-none ml-[15px]
              hover:shadow-[3px_3px_0_0_#64ffda] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Resume
          </a>
        </div>

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </nav>
    </header>
  )
}

export default Navbar
