import { useEffect, useRef, type KeyboardEvent } from 'react'
import { navLinks } from '../../types/nav'

interface MobileMenuProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen)
    const main = document.getElementById('main-content')
    if (main) main.classList.toggle('blur-sm', menuOpen)

    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      window.addEventListener('keydown', onKeyDown)
      menuRef.current?.scrollTo(0, 0)
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
      const main = document.getElementById('main-content')
      if (main) main.classList.remove('blur-sm')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, setMenuOpen])

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab') return
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    )
    if (!focusable || focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  return (
    <>
      <button
        ref={hamburgerRef}
        className="md:hidden flex items-center justify-center relative z-50 mr-[-15px] p-[15px] border-0 bg-transparent text-inherit cursor-pointer focus-visible:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
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
              menuOpen ? '[transform:rotate(225deg)] delay-[120ms]' : ''
            }`}
          >
            <span
              className={`absolute right-0 h-[2px] bg-accent rounded transition-all duration-200 ${
                menuOpen
                  ? 'bottom-0 w-full [transform:rotate(-90deg)] delay-[120ms] duration-200'
                  : '-bottom-[10px] w-4/5 delay-[250ms] duration-100'
              }`}
            />
          </span>
        </div>
      </button>

      {menuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        onKeyDown={handleKeyDown}
        className={`md:hidden fixed top-0 right-0 h-screen z-40 w-[min(75vw,400px)] bg-navy-light shadow-[-10px_0_30px_-15px_rgba(2,12,27,0.7)] transition-transform duration-300 flex flex-col ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-between w-full px-[10px] py-[50px] text-center bg-navy-light h-full">
          <ol className="list-none p-0 m-0 w-full">
            {navLinks.map((link) => (
              <li key={link.id} className="mb-5 text-[clamp(14px,4vw,22px)]">
                <span className="block text-accent text-sm mb-1">
                  {String(link.id + 1).padStart(2, '0')}.
                </span>
                <a
                  href={link.url}
                  className="mobile-menu-link text-slate-light font-mono hover:text-accent transition-colors duration-300 inline-block w-full pt-[3px] pb-[20px] px-[20px] focus-visible:outline-none focus-visible:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent border border-accent rounded px-[50px] py-[18px] w-max text-sm font-mono
              hover:shadow-[4px_4px_0_0_var(--color-accent)] hover:-translate-x-[5px] hover:-translate-y-[5px] transition-all duration-300 mb-10 focus-visible:outline-none focus-visible:shadow-[4px_4px_0_0_var(--color-accent)] focus-visible:-translate-x-[5px] focus-visible:-translate-y-[5px]"
            aria-label="Resume (opens in new tab)"
          >
            Resume
          </a>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
