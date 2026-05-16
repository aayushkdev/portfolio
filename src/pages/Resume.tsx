import { useLayoutEffect } from 'react'
import SEO from '../components/shared/SEO'

function Resume() {
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0
  }, [])

  return (
    <>
      <SEO title="Resume" description="Aayush Kumar's resume." path="/resume" />
      <div className="w-full h-dvh max-h-dvh flex flex-col items-center justify-center bg-navy">
        <embed
          src="/Aayushkumar_Resume.pdf"
          type="application/pdf"
          className="w-full h-full"
        />
        <p className="absolute bottom-6 text-slate-muted font-mono text-[13px]">
          Can't view?{' '}
          <a
            href="/Aayushkumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Download PDF
          </a>
        </p>
      </div>
    </>
  )
}

export default Resume
