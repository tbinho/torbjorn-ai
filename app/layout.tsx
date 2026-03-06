import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Praktiska AI-case med Torbjörn Sandblad',
  description: 'Torbjörns AI-sajt beskriver praktiska case. Hur AI använts konkret för att skapa värde i marknadsföring och företagsbyggande.',
  openGraph: {
    title: 'Praktiska AI-case med Torbjörn Sandblad',
    description: 'Torbjörns AI-sajt beskriver praktiska case. Hur AI använts konkret för att skapa värde i marknadsföring och företagsbyggande.',
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
