import { useState } from 'react'
import certificationsData from '../data/certifications.json'
import type { Certification } from '../types/certification'
import SEO from '../components/shared/SEO'
import Navbar from '../components/layout/Navbar'
import SkipToContent from '../components/layout/SkipToContent'
import CertificationCard from '../components/certifications/CertificationCard'
import CertificationLightbox from '../components/certifications/CertificationLightbox'
import Footer from '../components/layout/Footer'

const certifications = certificationsData as Certification[]

function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null)
  const selectedIndex = selectedCertification
    ? certifications.findIndex(certification => certification.id === selectedCertification.id)
    : -1

  return (
    <div>
      <SEO title="Certifications" description="A collection of Aayush Kumar's certifications." path="/certs" />
      <SkipToContent />
      <Navbar variant="minimal" />

      <main id="main-content" className="min-h-screen px-[150px] py-[140px] max-[1080px]:px-[100px] max-[768px]:px-[50px] max-[768px]:py-[120px] max-[480px]:px-[25px] max-[480px]:py-[100px]">
        <header className="mb-[100px] text-center max-[768px]:mb-[60px]">
          <h1 className="m-0 text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1] text-slate">
            Certifications
          </h1>
          <p className="mt-[10px] font-mono text-[16px] font-normal text-accent">
            A collection of things I&apos;ve earned
          </p>
        </header>

        <div className="mx-auto max-w-[1600px]">
          {certifications.length > 0 ? (
            <ul className="grid list-none grid-cols-3 gap-[15px] p-0 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
              {certifications.map((certification, index) => (
                <CertificationCard
                  key={certification.id}
                  certification={certification}
                  index={index}
                  onOpen={setSelectedCertification}
                />
              ))}
            </ul>
          ) : (
            <p className="text-center font-mono text-[14px] text-slate-muted">
              Add JPG certificates to <span className="text-accent">public/images/certifications</span> to display them here.
            </p>
          )}
        </div>
      </main>

      <Footer />

      <CertificationLightbox
        certification={selectedCertification}
        index={selectedIndex >= 0 ? selectedIndex : 0}
        onClose={() => setSelectedCertification(null)}
      />
    </div>
  )
}

export default Certifications
