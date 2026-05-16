import Navbar from '../components/layout/Navbar'
import SocialSidebar from '../components/layout/SocialSidebar'
import EmailSidebar from '../components/layout/EmailSidebar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'

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
      </main>
    </div>
  )
}

export default Home
