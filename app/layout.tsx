import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const display = Barlow_Condensed({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Mid Wilshire Gym | Find Your Next — 24 Hour Fitness',
  description: 'Explore 24 Hour Fitness Mid Wilshire in Los Angeles. Real club photos, strength and cardio equipment, GX24 classes, personal training, memberships, and club hours.',
  robots: { index: false, follow: false },
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111211',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${display.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
