import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import Script from 'next/script'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://uluwatusurfschool.com'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://uluwatusurfschool.com${item.href}` })
      }))
    ]
  }

  return (
    <>
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      <nav aria-label="Breadcrumb" className="border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-500 py-4">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <ChevronRight className="h-4 w-4 text-neutral-600" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
