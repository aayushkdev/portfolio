import { useLayoutEffect } from 'react'
import SEO from '../components/shared/SEO'
import Navbar from '../components/layout/Navbar'
import SkipToContent from '../components/layout/SkipToContent'
import SocialSidebar from '../components/layout/SocialSidebar'
import EmailSidebar from '../components/layout/EmailSidebar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import Contact from '../components/sections/Contact'
import Footer from '../components/layout/Footer'

function Home() {
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0
  }, [])

  return (
    <div>
      <SEO />
      <SkipToContent />
      <Navbar />
      <SocialSidebar />
      <EmailSidebar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
