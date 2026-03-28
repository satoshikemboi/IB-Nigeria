import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path, type = "website" }) {
  const siteName = "fxbrokers.com.ng";
  const fullTitle = `${title} | ${siteName}`;
  const url = `https://fxbrokers.com.ng${path || ""}`;

  // 1. Logic for Review vs Organization Schema
  const mainSchema = type === "review" ? {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "FinancialService",
      "name": title.split(' ')[0], 
      "image": "https://fxbrokers.com.ng/logo.png"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.8",
      "bestRating": "5"
    },
    "author": { "@type": "Organization", "name": siteName }
  } : {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": "https://fxbrokers.com.ng",
    "logo": "https://fxbrokers.com.ng/logo.png"
  };

  // 2. Logic for Breadcrumb Schema (The "Yes" request)
  const pathSegments = path ? path.split('/').filter(Boolean) : [];
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fxbrokers.com.ng"
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        "item": `https://fxbrokers.com.ng/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Structured Data: Combining both Schemas in an array */}
      <script type="application/ld+json">
        {JSON.stringify([mainSchema, breadcrumbList])}
      </script>

      {/* Social Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}