import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
