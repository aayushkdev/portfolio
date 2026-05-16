import { Component, type ReactNode, type ErrorInfo } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-navy text-slate-muted font-sans">
          <h1 className="text-accent font-mono text-[16px] mb-4">Something went wrong</h1>
          <button
            onClick={() => window.location.reload()}
            className="text-accent border border-accent rounded px-4 py-3 text-[13px] font-mono cursor-pointer hover:shadow-[4px_4px_0_0_var(--color-accent)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
          >
            Reload page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
