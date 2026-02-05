import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Torbjörn Sandblad – AI i praktiken',
  description: 'Hur jag arbetar med AI inom marknad, growth, data och automation. Dokumenterade processer och verkliga resultat.',
  openGraph: {
    title: 'Torbjörn Sandblad – AI i praktiken',
    description: 'Hur jag arbetar med AI inom marknad, growth, data och automation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
