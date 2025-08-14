import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navigation/navbar'
import { PWAProvider } from '@/components/providers/pwa-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'GreenView Landscaping - Professional Landscaping Services in Phoenix, AZ',
    template: '%s | GreenView Landscaping'
  },
  description: 'Transform your outdoor space with GreenView Landscaping. Professional landscaping services in Phoenix, Arizona including landscape design, hardscaping, and maintenance. Get your free quote today!',
  keywords: [
    'landscaping phoenix',
    'landscape design arizona',
    'hardscaping phoenix',
    'garden maintenance phoenix',
    'outdoor living phoenix',
    'desert landscaping',
    'pool landscaping phoenix',
    'commercial landscaping arizona',
    'residential landscaping phoenix',
    'landscape contractor phoenix'
  ],
  authors: [{ name: 'GreenView Landscaping' }],
  creator: 'GreenView Landscaping',
  publisher: 'GreenView Landscaping',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://greenview-landscaping.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://greenview-landscaping.com',
    title: 'GreenView Landscaping - Professional Landscaping Services in Phoenix, AZ',
    description: 'Transform your outdoor space with GreenView Landscaping. Professional landscaping services in Phoenix, Arizona including landscape design, hardscaping, and maintenance.',
    siteName: 'GreenView Landscaping',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GreenView Landscaping - Beautiful outdoor spaces in Phoenix, Arizona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GreenView Landscaping - Professional Landscaping Services in Phoenix, AZ',
    description: 'Transform your outdoor space with GreenView Landscaping. Professional landscaping services in Phoenix, Arizona.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'business',
  classification: 'landscaping services',
  other: {
    'geo.region': 'US-AZ',
    'geo.placename': 'Phoenix',
    'geo.position': '33.4484;-112.0740',
    'ICBM': '33.4484, -112.0740',
    'DC.title': 'GreenView Landscaping',
    'DC.creator': 'GreenView Landscaping',
    'DC.subject': 'Landscaping Services',
    'DC.description': 'Professional landscaping services in Phoenix, Arizona',
    'DC.publisher': 'GreenView Landscaping',
    'DC.contributor': 'GreenView Landscaping',
    'DC.date': '2024-12-01',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://greenview-landscaping.com',
    'DC.language': 'en',
    'DC.coverage': 'Phoenix, Arizona',
    'DC.rights': 'Copyright 2024 GreenView Landscaping',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="GreenView Landscaping" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GreenView" />
        <meta name="description" content="Professional landscaping services in Phoenix, Arizona" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#22c55e" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#22c55e" />

        {/* PWA Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#22c55e" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LandscapingService",
              "name": "GreenView Landscaping",
              "description": "Professional landscaping services in Phoenix, Arizona including landscape design, hardscaping, and maintenance.",
              "url": "https://greenview-landscaping.com",
              "logo": "https://greenview-landscaping.com/logo.png",
              "image": "https://greenview-landscaping.com/og-image.jpg",
              "telephone": "+1-602-555-0123",
              "email": "info@greenview-landscaping.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1234 Landscaping Way",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85001",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.4484,
                "longitude": -112.0740
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Phoenix",
                  "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona"
                },
                {
                  "@type": "City",
                  "name": "Scottsdale",
                  "sameAs": "https://en.wikipedia.org/wiki/Scottsdale,_Arizona"
                },
                {
                  "@type": "City",
                  "name": "Mesa",
                  "sameAs": "https://en.wikipedia.org/wiki/Mesa,_Arizona"
                },
                {
                  "@type": "City",
                  "name": "Tempe",
                  "sameAs": "https://en.wikipedia.org/wiki/Tempe,_Arizona"
                },
                {
                  "@type": "City",
                  "name": "Chandler",
                  "sameAs": "https://en.wikipedia.org/wiki/Chandler,_Arizona"
                },
                {
                  "@type": "City",
                  "name": "Gilbert",
                  "sameAs": "https://en.wikipedia.org/wiki/Gilbert,_Arizona"
                },
                {
                  "@type": "City",
                  "name": "Peoria",
                  "sameAs": "https://en.wikipedia.org/wiki/Peoria,_Arizona"
                },
                {
                  "@type": "City",
                  "name": "Surprise",
                  "sameAs": "https://en.wikipedia.org/wiki/Surprise,_Arizona"
                }
              ],
              "serviceType": [
                "Landscape Design",
                "Hardscaping",
                "Garden Maintenance",
                "Tree Services",
                "Irrigation Systems",
                "Outdoor Living Spaces"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 08:00-18:00",
              "paymentAccepted": ["Cash", "Credit Card", "Check"],
              "currenciesAccepted": "USD",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Landscaping Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Landscape Design",
                      "description": "Custom landscape design for residential and commercial properties"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hardscaping",
                      "description": "Patios, walkways, retaining walls, and outdoor structures"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Jennifer Martinez"
                  },
                  "reviewBody": "The team transformed our neglected backyard into a beautiful outdoor living space. They were professional, on time, and exceeded our expectations."
                }
              ],
              "sameAs": [
                "https://www.facebook.com/greenviewlandscaping",
                "https://www.instagram.com/greenviewlandscaping",
                "https://www.linkedin.com/company/greenviewlandscaping"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <PWAProvider>
          <Navbar />
          <main>{children}</main>
        </PWAProvider>
      </body>
    </html>
  )
}
