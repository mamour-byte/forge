import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  author = 'Forge – Thiendella Fall',
  type = 'website',
  robots = 'index, follow'
}) {
  const siteName = 'Forge – Agence Digitale à Dakar'
  const defaultImage = '/images/forge-banner.jpg'
  const baseUrl = 'https://forge.sn'

  const fullTitle = title ? `${title}` : siteName
  const fullUrl = url ? url : baseUrl

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || "Forge est une agence digitale basée à Dakar, spécialisée dans le développement de sites web modernes, d'applications mobiles et de solutions logicielles sur mesure pour les entreprises."} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || ''} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  )
}
