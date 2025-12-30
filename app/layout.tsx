import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'

import '../styles/global/reset.css'
import '../styles/global/variables.css'
import '../styles/global/typography.css'
import '../styles/global/layout.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: {
    default: 'Yulia Travels | Professional House sitter & Global Nomad',
    template: '%s | Yulia Travels'
  },
  description: 'Professional housesitting portfolio and personal travel journal documenting slow living and estate stewardship across the globe.',
  metadataBase: new URL('https://yuliatravels.com'),
};

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = Playfair_Display({
  subsets: ['latin'],
  // weight: ['400', '500', '600', '700', '800', '900'],
  // style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <div className="rootLayout">
          <Header />
          <main className="rootMain">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
