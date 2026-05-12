import { Metadata } from 'next'
import Page from "../page"

export const metadata: Metadata = {
  title: 'Customer Management System - 顧客管理システム | Home',
  description: 'Access the customer management system to view and manage customer data, contracts, and transactions. Japanese language interface for customer information management.',
}

export default function SyntheticV0PageForDeployment() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Customer Management System',
    alternateName: '顧客管理システム',
    description: 'Comprehensive customer management system for managing customer data, contracts, and interactions with Japanese language interface.',
    url: 'https://vercel.com/gileb64375-5584s-projects/v0-customer-management',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Customer Management System',
      url: 'https://vercel.com/gileb64375-5584s-projects/v0-customer-management',
    },
    featureList: [
      'Customer data management',
      'Contract transaction history',
      'Customer information display',
      'Date range filtering',
      'Multi-language support (Japanese/English)',
    ],
    softwareVersion: '1.0.0',
    browserRequirements: 'Requires JavaScript enabled',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Page />
    </>
  )
}