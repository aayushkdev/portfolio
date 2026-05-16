import Navbar from '../components/layout/Navbar'
import SocialSidebar from '../components/layout/SocialSidebar'
import EmailSidebar from '../components/layout/EmailSidebar'
import Hero from '../components/sections/Hero'

function Home() {
  return (
    <div>
      <Navbar />
      <SocialSidebar />
      <EmailSidebar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Home
