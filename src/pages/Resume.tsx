import SEO from '../components/shared/SEO'

function Resume() {
  return (
    <>
      <SEO title="Resume" description="Aayush Kumar's resume." path="/resume" />
      <div className="w-full h-dvh max-h-dvh overflow-y-auto">
        <iframe src="/Aayushkumar_Resume.pdf" className="w-full h-full border-0" title="Resume" />
      </div>
    </>
  )
}

export default Resume
