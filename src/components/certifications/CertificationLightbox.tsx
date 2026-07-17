import { useEffect, useRef } from 'react'
import type { Certification } from '../../types/certification'

interface CertificationLightboxProps {
  certification: Certification | null
  index: number
  onClose: () => void
}

function CertificationLightbox({ certification, index, onClose }: CertificationLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!certification) return

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null
    document.body.classList.add('overflow-hidden')
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('overflow-hidden')
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocusedRef.current?.focus()
    }
  }, [certification, onClose])

  if (!certification) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-[25px] backdrop-blur-[6px] max-[480px]:p-[15px]"
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate ${index + 1} preview`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="group absolute right-[25px] top-[25px] z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[2px] border border-accent bg-navy text-accent transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent max-[480px]:right-[15px] max-[480px]:top-[15px]"
        aria-label="Close certificate preview"
      >
        <span aria-hidden="true" className="relative block h-[18px] w-[18px]">
          <span className="absolute left-1/2 top-1/2 block h-[2px] w-[21px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current transition-transform duration-300 group-hover:rotate-[135deg]" />
          <span className="absolute left-1/2 top-1/2 block h-[2px] w-[21px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current transition-transform duration-300 group-hover:-rotate-[135deg]" />
        </span>
      </button>

      <div className="relative flex max-h-full max-w-[1200px] flex-col items-center gap-[18px]">
        <img
          src={certification.image}
          alt={`Certificate ${index + 1}`}
          className="max-h-[85vh] max-w-[90vw] rounded bg-navy-light object-contain shadow-[0_20px_50px_-20px_rgba(2,12,27,0.9)]"
        />

        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-accent transition-colors duration-300 hover:text-slate focus-visible:outline-none focus-visible:underline"
          >
            Open credential link ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default CertificationLightbox
