import { StrictMode, useLayoutEffect, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import ErrorBoundary from './components/shared/ErrorBoundary'

history.scrollRestoration = 'manual'

function Layout() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0
  }, [pathname])

  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [pathname])

  return <Outlet />
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/resume', element: <Resume /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>,
)
