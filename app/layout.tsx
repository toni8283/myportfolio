import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-body' })
const instrumentSerif = Instrument_Serif({ weight: '400', subsets: ['latin'], variable: '--font-display' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://toni8283.github.io/myportfolio'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Toni Blair: Design Engineer, AI & Full-Stack Developer | Portfolio',
    template: '%s | Toni Blair',
  },
  description:
    'Official portfolio of Toni Blair: IIT Kharagpur engineer and design technologist crafting AI interfaces, full-stack systems, and digital products. Featured projects: Chalo, personal essays, and open-source software.',
  applicationName: 'Toni Blair Portfolio',
  keywords: [
    'Toni Blair',
    'Toni Blair portfolio',
    'Toni Blair IIT Kharagpur',
    'Toni Blair developer',
    'Toni Blair engineer',
    'Toni Blair design engineer',
    'toni8283',
    'toni8283 portfolio',
    'Toni Blair github',
    'Toni Blair software',
    'Chalo app Toni Blair',
    'The Unseen Test of Character Toni Blair',
    'Design Engineer',
    'Product Designer',
    'Full Stack Engineer',
    'AI Interfaces',
    'IIT Kharagpur engineer',
    'Ocean Engineering IIT Kharagpur',
    'Next.js developer',
    'React Native developer',
    'FastAPI engineer',
  ],
  authors: [{ name: 'Toni Blair', url: 'https://github.com/toni8283' }],
  creator: 'Toni Blair',
  publisher: 'Toni Blair',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Toni Blair: Design Engineer & Product Systems',
    description:
      'Official portfolio of Toni Blair: IIT Kharagpur engineer designing content-led AI interfaces, full-stack systems, and digital products from Figma to shipped code.',
    url: '/',
    siteName: 'Toni Blair Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toni Blair: Design Engineer & Product Systems',
    description:
      'Official portfolio of Toni Blair: IIT Kharagpur engineer designing content-led AI interfaces, full-stack systems, and digital products from Figma to shipped code.',
    creator: '@toni8283',
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
  category: 'technology',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Toni Blair',
      alternateName: ['Toni', 'toni8283'],
      url: siteUrl,
      jobTitle: 'Design Engineer & Software Developer',
      description:
        'IIT Kharagpur engineer and designer building full-stack software, AI interfaces, and digital products.',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Indian Institute of Technology Kharagpur',
        alternateName: 'IIT Kharagpur',
        sameAs: 'https://www.iitkgp.ac.in/',
      },
      knowsAbout: [
        'Software Engineering',
        'Product Design',
        'Artificial Intelligence',
        'Full-Stack Systems',
        'React Native',
        'FastAPI',
        'Next.js',
        'PostgreSQL',
        'Linux',
        'Ocean Engineering',
      ],
      sameAs: ['https://github.com/toni8283'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Toni Blair Portfolio',
      description:
        'Official portfolio of Toni Blair: IIT Kharagpur engineer designing content-led AI interfaces, full-stack systems, and digital products.',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profile`,
      url: siteUrl,
      name: 'Toni Blair Portfolio',
      mainEntity: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
