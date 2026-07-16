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
      <div className="relative flex max-h-full max-w-[1200px] flex-col items-center gap-[18px]">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-[-8px] top-[-8px] z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-accent bg-navy text-accent transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close certificate preview"
        >
          <span aria-hidden="true" className="text-[24px] leading-none">×</span>
        </button>

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
