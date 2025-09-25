import './globals.css'

import { Inter, Space_Grotesk } from 'next/font/google'

import type { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import WebVitalsReporter from '@/components/WebVitalsReporter'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-headlines',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Uluwatu Surf School - Professional Surf Instruction in Bali',
    template: '%s | Uluwatu Surf School'
  },
  description: 'Professional surf instruction in Uluwatu, Bali. Local expertise enhanced by modern analysis technology. Group lessons from IDR 400k, semi-private IDR 500k, private + video analysis IDR 700k. ISA certified instructor with 15+ years local knowledge.',
  keywords: ['surf school', 'uluwatu', 'bali surf lessons', 'professional surf instruction', 'reef break surfing', 'video analysis', 'surf coaching', 'bali surfing', 'uluwatu lessons', 'surf school bali', 'pecatu surf', 'ISA certified instructor', 'bukit peninsula surf'],
  authors: [{ name: 'Uluwatu Surf School' }],
  creator: 'Uluwatu Surf School',
  publisher: 'Uluwatu Surf School',
  category: 'Sports & Recreation',
  classification: 'Surf School',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://uluwatusurfschool.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Uluwatu Surf School - Professional Surf Instruction in Bali',
    description: 'Professional surf instruction in Uluwatu, Bali. Local expertise enhanced by modern analysis technology. ISA certified instructor with 15+ years experience.',
    url: 'https://uluwatusurfschool.com',
    siteName: 'Uluwatu Surf School',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Uluwatu Surf School - Professional Surf Instruction in Bali with reef break expertise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uluwatu Surf School - Professional Surf Instruction in Bali',
    description: 'Professional surf instruction in Uluwatu, Bali. Local expertise enhanced by modern analysis technology. ISA certified instructor.',
    images: ['/images/logo.jpg'],
    creator: '@uluwatusurfschool',
    site: '@uluwatusurfschool',
  },
  facebook: {
    appId: '12345678901234567',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  other: {
    'geo.region': 'ID-BA',
    'geo.placename': 'Uluwatu, Bali',
    'geo.position': '-8.8299;115.0849',
    'ICBM': '-8.8299, 115.0849',
    'DC.title': 'Uluwatu Surf School - Professional Surf Instruction',
    'DC.creator': 'Uluwatu Surf School',
    'DC.subject': 'Surf instruction, surf lessons, reef break surfing, Uluwatu, Bali',
    'DC.description': 'Professional surf instruction in Uluwatu, Bali with local expertise and modern coaching technology',
    'DC.language': 'en',
    'DC.coverage': 'Uluwatu, Bali, Indonesia',
    'fb:page_id': '12345678901234567',
    'og:locale:alternate': 'id_ID',
    'article:author': 'https://www.facebook.com/uluwatusurfschool',
    'og:site_name': 'Uluwatu Surf School',
    'og:updated_time': '2025-09-19T00:00:00Z',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-carbon">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Uluwatu Surf" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-carbon text-neutral-100`}>
        <StructuredData />
        <WebVitalsReporter />
        {children}
      </body>
    </html>
  )
}
