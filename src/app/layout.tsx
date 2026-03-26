import type { Metadata, Viewport } from 'next'
import './../globals.css'
import { Header } from '@/src/components/Header'
import { Footer } from '@/src/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://suaveeTech.tech'),
  title: {
    default: 'suaveeTech - Software Development & SaaS Solutions',
    template: '%s | suaveeTech',
  },
  description: 'suaveeTech is a leading software development agency specializing in custom SaaS platforms, CRM solutions, and automation systems for startups and enterprises.',
  keywords: [
    'software development company',
    'SaaS development agency',
    'CRM development services',
    'power dialer software',
    'custom automation systems',
    'IT consulting',
  ],
  authors: [{ name: 'suaveeTech' }],
  creator: 'suaveeTech',
  publisher: 'suaveeTech',
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
    locale: 'en_US',
    url: 'https://suaveeTech.com',
    siteName: 'suaveeTech',
    title: 'suaveeTech - Software Development & SaaS Solutions',
    description: 'Leading software development agency for custom SaaS platforms and enterprise solutions',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630',
        width: 1200,
        height: 630,
        alt: 'suaveeTech - Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'suaveeTech - Software Development & SaaS Solutions',
    description: 'Leading software development agency for custom SaaS platforms',
    creator: '@suaveeTechdev',
    images: ['https://via.placeholder.com/1200x630'],
  },
  alternates: {
    canonical: 'https://suaveeTech.com',
    languages: {
      en: 'https://suaveeTech.com',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066FF" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
