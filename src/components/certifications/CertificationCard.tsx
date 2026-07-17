import { memo } from 'react'
import type { Certification } from '../../types/certification'

interface CertificationCardProps {
  certification: Certification
  index: number
  onOpen: (certification: Certification) => void
}

const CertificationCard = memo(({ certification, index, onOpen }: CertificationCardProps) => {
  return (
    <li className="relative group">
      <div className="relative h-full overflow-hidden rounded shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all duration-300 group-hover:-translate-y-[7px] group-hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)]">
        <button
          type="button"
          onClick={() => onOpen(certification)}
          className="block w-full cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          aria-label={`Enlarge certificate ${index + 1}`}
        >
          <img
            src={certification.image}
            alt={`Certificate ${index + 1}`}
            loading="lazy"
            className="aspect-[1.414/1] w-full rounded object-contain bg-navy transition-opacity duration-300 group-hover:opacity-85"
          />
        </button>

      </div>
    </li>
  )
})

export default CertificationCard
