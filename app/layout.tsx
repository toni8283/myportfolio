import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-body' })
const instrumentSerif = Instrument_Serif({ weight: '400', subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Toni Blair — Design Engineer & Product Systems',
  description:
    'Portfolio of Toni Blair: IIT Kharagpur engineer designing content-led AI interfaces, full-stack systems, and high-performance digital products from Figma to shipped code.',
  keywords: [
    'Toni Blair',
    'Design Engineer',
    'Content Designer',
    'Product Designer',
    'Full Stack Engineer',
    'AI Interfaces',
    'IIT Kharagpur',
    'Next.js',
    'React',
    'Figma',
  ],
  authors: [{ name: 'Toni Blair', url: 'https://github.com/toni8283' }],
  creator: 'Toni Blair',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Toni Blair — Design Engineer & Product Systems',
    description:
      'Designing content-led AI interfaces, full-stack architectures, and high-performance digital products from Figma to shipped code.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Toni Blair Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toni Blair — Design Engineer & Product Systems',
    description:
      'Designing content-led AI interfaces, full-stack architectures, and high-performance digital products from Figma to shipped code.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111111',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
