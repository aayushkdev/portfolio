import projectsData from '../data/projects.json'
import type { Project } from '../types/project'
import SEO from '../components/shared/SEO'
import Navbar from '../components/layout/Navbar'
import SkipToContent from '../components/layout/SkipToContent'
import ProjectCard from '../components/projects/ProjectCard'
import Footer from '../components/layout/Footer'

const projects = projectsData as Project[]

function Projects() {
  return (
    <div>
      <SEO title="Projects" description="A collection of things Aayush Kumar has built." path="/projects" />
      <SkipToContent />
      <Navbar variant="minimal" />

      <main id="main-content" className="min-h-screen py-[140px] px-[150px] max-[1080px]:px-[100px] max-[768px]:py-[120px] max-[768px]:px-[50px] max-[480px]:py-[100px] max-[480px]:px-[25px]">
        <header className="text-center mb-[100px] max-[768px]:mb-[60px]">
          <h1 className="text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1] text-slate m-0">
            All Projects
          </h1>
          <p className="text-accent font-mono text-[16px] font-normal mt-[10px]">
            A collection of things I've built
          </p>
        </header>

        <div className="max-w-[1600px] mx-auto">
          <ul className="grid grid-cols-3 gap-[15px] p-0 list-none max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Projects
