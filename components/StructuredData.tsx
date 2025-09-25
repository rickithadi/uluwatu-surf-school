import Script from 'next/script'

export default function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation", "TouristAttraction"],
    "name": "Uluwatu Surf School",
    "alternateName": "Professional Surf Instruction Uluwatu",
    "description": "Professional surf instruction in Uluwatu, Bali. Local expertise enhanced by modern analysis technology. Offering group lessons, semi-private, and private surf coaching with video analysis. ISA certified instructor with 15+ years local knowledge.",
    "url": "https://uluwatusurfschool.com",
    "telephone": "+62-819-9988-5826",
    "email": "dexscott04@gmail.com",
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
    "paymentAccepted": "Cash",
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
    "logo": "https://uluwatusurfschool.com/images/logo.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-819-9988-5826",
      "contactType": "customer service",
      "availableLanguage": ["English", "Indonesian"],
      "areaServed": "ID"
    },
    "sameAs": [
      "https://instagram.com/uluwatusurfschool_official",
      "https://instagram.com/scotty_dex"
    ]
  }

  // Website structured data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Uluwatu Surf School",
    "url": "https://uluwatusurfschool.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://uluwatusurfschool.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  // FAQ structured data
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What experience level do I need for Uluwatu surf lessons?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We welcome all levels from complete beginners to advanced surfers. Our ISA certified instructors tailor each lesson to your skill level and provide appropriate safety training for Uluwatu's reef break conditions."
        }
      },
      {
        "@type": "Question", 
        "name": "What's included in the surf lesson price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All lessons include professional surfboard, safety equipment, comprehensive safety briefing, professional instruction, and photo documentation. Private lessons also include video analysis technology for technique improvement."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book my surf lesson?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking at least 24-48 hours in advance, especially during peak season. However, we often have same-day availability depending on conditions and instructor schedule."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Uluwatu Surf School different from other surf schools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our head instructor has 15+ years of local Uluwatu experience and is ISA certified. We combine traditional local knowledge with modern video analysis technology, maintain small group sizes (max 4 students), and specialize in reef break surfing instruction."
        }
      }
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
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />
    </>
  )
}