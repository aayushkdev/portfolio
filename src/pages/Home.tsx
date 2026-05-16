import Navbar from '../components/layout/Navbar'
import SocialSidebar from '../components/layout/SocialSidebar'
import EmailSidebar from '../components/layout/EmailSidebar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import Contact from '../components/sections/Contact'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <SocialSidebar />
      <EmailSidebar />
      <main>
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
