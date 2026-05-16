import { useEffect } from 'react'
import { navLinks } from '../../types/nav'

interface MobileMenuProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }

    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, setMenuOpen])

  return (
    <>
      <button
        className={`md:hidden flex items-center justify-center relative z-50 mr-[-15px] p-[15px] border-0 bg-transparent text-inherit cursor-pointer`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <div className="relative w-[30px] h-[24px]">
          <span
            className={`absolute right-0 block h-[2px] bg-accent rounded transition-all duration-200 ${
              menuOpen
                ? 'top-1/2 -translate-y-1/2 w-full opacity-0 duration-100'
                : 'top-0 w-[120%] delay-[250ms] duration-100'
            }`}
          />
          <span
            className={`absolute right-0 top-1/2 -translate-y-1/2 block w-[30px] h-[2px] bg-accent rounded transition-transform duration-200 ${
              menuOpen ? '[rotate:225deg] delay-[120ms]' : ''
            }`}
          >
            <span
              className={`absolute right-0 h-[2px] bg-accent rounded transition-all duration-200 ${
                menuOpen
                  ? 'bottom-0 w-full [rotate:-90deg] delay-[120ms] duration-200'
                  : '-bottom-[10px] w-4/5 delay-[250ms] duration-100'
              }`}
            />
          </span>
        </div>
      </button>

      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <aside
        className={`md:hidden fixed top-0 right-0 bottom-0 z-40 w-[min(75vw,400px)] h-screen bg-navy-light shadow-[-10px_0_30px_-15px_rgba(2,12,27,0.7)] transition-transform duration-300 flex items-center justify-center ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-between w-full h-full py-[50px_10px] text-center">
          <ol className="list-none p-0 m-0 w-full">
            {navLinks.map((link, i) => (
              <li key={i} className="mb-5 text-[clamp(14px,4vw,22px)]">
                <span className="block text-accent text-sm mb-1">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <a
                  href={link.url}
                  className="text-slate-light font-mono hover:text-accent transition-colors duration-300 inline-block w-full py-[3px_20px]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent border border-accent rounded px-[50px] py-[18px] w-max text-sm font-mono
              hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px] transition-all duration-300 mb-10"
          >
            Resume
          </a>
        </nav>
      </aside>
    </>
  )
}

export default MobileMenu
