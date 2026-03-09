import type { Metadata } from 'next'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Items Market',
  description: 'Just some crap and stuff to fake real market UI ;)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <main
            style={{
              flex: 1,
              maxWidth: '1200px',
              width: '100%',
              margin: '0 auto',
              padding: '1.5rem',
            }}
          >
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
