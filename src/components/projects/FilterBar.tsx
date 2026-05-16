import { memo } from 'react'

interface FilterBarProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const FilterBar = memo(({ categories, activeFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="flex justify-center flex-wrap gap-[12px] mt-[40px]">
      <button
        aria-pressed={activeFilter === 'all'}
        className={`font-mono text-[13px] px-[16px] py-[8px] rounded cursor-pointer transition-all duration-250 ${
          activeFilter === 'all'
            ? 'bg-accent text-navy border border-accent'
            : 'bg-transparent text-slate-muted border border-navy-lightest hover:text-accent hover:border-accent'
        }`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat}
          aria-pressed={activeFilter === cat}
          className={`font-mono text-[13px] px-[16px] py-[8px] rounded cursor-pointer transition-all duration-250 ${
            activeFilter === cat
              ? 'bg-accent text-navy border border-accent'
              : 'bg-transparent text-slate-muted border border-navy-lightest hover:text-accent hover:border-accent'
          }`}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
})

export default FilterBar
