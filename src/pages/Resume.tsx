import { useEffect } from 'react'
import SEO from '../components/shared/SEO'

function Resume() {
  useEffect(() => {
    window.location.replace('/Aayushkumar_Resume.pdf')
  }, [])

  return <SEO title="Resume" description="Aayush Kumar's resume." path="/resume" />
}

export default Resume
