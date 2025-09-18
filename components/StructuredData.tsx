import Script from 'next/script'

export default function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation", "TouristAttraction"],
    "name": "Uluwatu Surf School",
    "alternateName": "Professional Surf Instruction Uluwatu",
    "description": "Professional surf instruction in Uluwatu, Bali. Local expertise enhanced by modern analysis technology. Offering group lessons, semi-private, and private surf coaching with video analysis. ISA certified instructor with 15+ years local knowledge.",
    "url": "https://uluwatusurfschool.com",
    "telephone": "+62-812-3456-7890",
    "email": "info@uluwatusurfschool.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Uluwatu",
      "addressLocality": "Pecatu",
      "addressRegion": "Bali",
      "postalCode": "80361",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-8.8299",
      "longitude": "115.0849"
    },
    "openingHours": "Mo-Su 06:00-18:00",
    "priceRange": "IDR 400,000 - IDR 700,000",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "Scotty",
      "description": "Head Instructor with 15+ years of local surfing experience in Bali",
      "jobTitle": "Head Surf Instructor",
      "hasCredential": "ISA Level 2 Certified Instructor"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Surf Lesson Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Group Surf Lesson",
            "description": "2-hour group surf lesson with maximum 4 students per instructor. Includes all equipment, safety briefing, and photo documentation.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Uluwatu Surf School"
            }
          },
          "price": "400000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Semi-Private Surf Lesson",
            "description": "2-hour semi-private surf lesson with maximum 2 students. Enhanced personal attention and technique development.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Uluwatu Surf School"
            }
          },
          "price": "500000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Surf Lesson with Tech Analysis",
            "description": "2.5-hour private surf lesson with professional video analysis technology for detailed technique review and improvement.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Uluwatu Surf School"
            }
          },
          "price": "700000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Equipment Rental",
        "value": "Surfboards and safety equipment included"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Video Analysis",
        "value": "Professional video analysis for technique improvement"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Safety Training",
        "value": "Comprehensive safety briefing and ocean awareness"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Professional Instruction",
        "value": "ISA certified instructor with 15+ years local experience"
      }
    ],
    "sameAs": [
      "https://instagram.com/uluwatusurfschool_official",
      "https://instagram.com/scotty_dex"
    ],
    "knowsAbout": [
      "Uluwatu surf break",
      "Reef break surfing",
      "Surf instruction",
      "Ocean safety",
      "Video analysis",
      "Bali surfing",
      "Bukit Peninsula waves",
      "Surf coaching methodology"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Uluwatu, Bali",
      "containedInPlace": {
        "@type": "Place",
        "name": "Bali, Indonesia"
      }
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-8.8299",
        "longitude": "115.0849"
      },
      "geoRadius": "10000"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Uluwatu Surf School",
    "url": "https://uluwatusurfschool.com",
    "logo": "https://uluwatusurfschool.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-3456-7890",
      "contactType": "customer service",
      "availableLanguage": ["English", "Indonesian"],
      "areaServed": "ID"
    },
    "sameAs": [
      "https://instagram.com/uluwatusurfschool_official",
      "https://instagram.com/scotty_dex"
    ]
  }

  return (
    <>
      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessData)
        }}
      />
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
    </>
  )
}