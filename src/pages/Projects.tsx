import { useState } from 'react'
import projectsData from '../data/projects.json'
import type { Project } from '../types/project'
import Navbar from '../components/layout/Navbar'
import SkipToContent from '../components/layout/SkipToContent'
import FilterBar from '../components/projects/FilterBar'
import ProjectCard from '../components/projects/ProjectCard'
import Footer from '../components/layout/Footer'

const projects = projectsData as Project[]
const categories = [...new Set(projects.map(p => p.category))]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div>
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
          <FilterBar
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {filtered.length > 0 ? (
            <ul className="grid grid-cols-3 gap-[15px] mt-[50px] p-0 list-none max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ul>
          ) : (
            <p className="text-center text-slate-muted font-mono text-[14px] mt-[80px]">
              No projects found in this category.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Projects
