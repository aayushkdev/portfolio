import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

function ResumeRedirect() {
  useEffect(() => {
    window.location.replace('/Aayushkumar_Resume.pdf')
  }, [])
  return null
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<ResumeRedirect />} />
    </Routes>
  )
}

export default App
