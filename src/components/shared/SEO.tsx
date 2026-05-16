import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  path?: string
  image?: string
}

const SITE_URL = 'https://aayushk.dev'

function SEO({ title, description, path, image }: SEOProps) {
  const pageTitle = title ? `${title} | Aayush Kumar` : 'Aayush Kumar | Software Engineer'
  const pageDescription = description || 'Software engineer specializing in building backend systems, developer tools, and scalable web platforms.'
  const pageUrl = path ? `${SITE_URL}${path}` : SITE_URL
  const pageImage = image || '/images/profile.gif'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aayush Kumar',
    url: SITE_URL,
    image: `${SITE_URL}/images/profile.gif`,
    sameAs: [
      'https://github.com/aayushkdev',
      'https://linkedin.com/in/aayushkdev',
    ],
    jobTitle: 'Software Engineer',
    knowsAbout: ['Go', 'Python', 'Kubernetes', 'Docker', 'Linux', 'PostgreSQL'],
    description: pageDescription,
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <link rel="canonical" href={pageUrl} />
      <meta name="description" content={pageDescription} />
      <meta name="author" content="Aayush Kumar" />
      <meta name="theme-color" content="#0a192f" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${SITE_URL}${pageImage}`} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${SITE_URL}${pageImage}`} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

export default SEO
