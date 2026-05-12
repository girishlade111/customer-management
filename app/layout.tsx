import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://vercel.com/gileb64375-5584s-projects/v0-customer-management'),
  title: {
    default: 'Customer Management System',
    template: '%s | Customer Management System',
  },
  description: 'Comprehensive customer management system for managing customer data, contracts, and interactions. Built with Next.js, React, and Tailwind CSS.',
  keywords: [
    'customer management',
    'customer management',
    'customer relationship management',
    'CRM',
    'customer data',
    'contract management',
    'transaction history',
    'customer information',
  ],
  authors: [
    {
      name: 'Customer Management Team',
      url: 'https://vercel.com/gileb64375-5584s-projects/v0-customer-management',
    },
  ],
  creator: 'Customer Management System',
  publisher: 'Vercel',
  generator: 'v0.app',
  applicationName: 'Customer Management System',
  referrer: 'origin-when-cross-origin',
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
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    alternateLocale: 'en_US',
    url: 'https://vercel.com/gileb64375-5584s-projects/v0-customer-management',
    siteName: 'Customer Management System',
    title: 'Customer Management System',
    description: 'Comprehensive customer management system for managing customer data, contracts, and interactions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Customer Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Management System',
    description: 'Comprehensive customer management system for managing customer data, contracts, and interactions.',
    creator: '@customer_management',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://vercel.com/gileb64375-5584s-projects/v0-customer-management',
    languages: {
      ja: 'https://vercel.com/gileb64375-5584s-projects/v0-customer-management',
      en: 'https://vercel.com/gileb64375-5584s-projects/v0-customer-management',
    },
  },
  category: 'business',
  classification: 'Customer Management',
  other: {
    'google-site-verification': 'verification-code',
    'theme-color': '#A31D1D',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
