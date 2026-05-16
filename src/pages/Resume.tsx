import SEO from '../components/shared/SEO'

function Resume() {
  return (
    <>
      <SEO title="Resume" description="Aayush Kumar's resume." path="/resume" />
      <div className="w-full h-dvh max-h-dvh overflow-y-auto bg-navy">
        <object data="/Aayushkumar_Resume.pdf" type="application/pdf" className="w-full h-full">
          <p className="flex items-center justify-center h-full text-slate-muted font-mono text-[14px]">
            Unable to display PDF.{' '}
            <a
              href="/Aayushkumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline ml-1"
            >
              Download instead
            </a>
          </p>
        </object>
      </div>
    </>
  )
}

export default Resume
