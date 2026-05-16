import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

function Resume() {
  return (
    <div className="w-screen h-screen">
      <iframe src="/Aayushkumar_Resume.pdf" className="w-full h-full border-0" title="Resume" />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}

export default App
