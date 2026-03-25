import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path, type = "website" }) {
  const siteName = "fxbrokers.ng";
  const fullTitle = `${title} | ${siteName}`;
  const url = `https://fxbrokers.ng${path || ""}`;

  // Logic to determine which Schema to inject
  const schemaData = type === "review" ? {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "FinancialService",
      "name": title.split(' ')[0], // Grabs the Broker name
      "image": "https://fxbrokers.ng/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NG"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.8",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": siteName
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName
    }
  } : {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": "https://fxbrokers.ng",
    "logo": "https://fxbrokers.ng/logo.png",
    "sameAs": [
      "https://twitter.com/fxbrokersng",
      "https://t.me/fxbrokersng"
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type === "review" ? "article" : "website"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://fxbrokers.ng/og-share.jpg" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://fxbrokers.ng/og-share.jpg" />

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}