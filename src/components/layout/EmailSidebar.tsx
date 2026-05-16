import { memo } from 'react'

const EmailSidebar = memo(() => {
  return (
    <div className="fixed right-[40px] max-[1200px]:right-[20px] max-[769px]:right-[10px] bottom-0 z-10 flex flex-col items-center max-[769px]:hidden after:content-[''] after:block after:w-[1px] after:h-[90px] after:bg-slate-muted after:mt-[20px]">
      <a
        href="mailto:folio@aayushk.dev"
        className="[writing-mode:vertical-rl] text-sm text-slate-light font-mono tracking-[0.1em] p-[10px] hover:text-accent hover:-translate-y-[3px] transition-all duration-300 focus-visible:outline-none focus-visible:text-accent"
      >
        folio@aayushk.dev
      </a>
    </div>
  )
})

export default EmailSidebar
