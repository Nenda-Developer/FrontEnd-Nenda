import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import SessionProviders from '@/components/SessionProvider'
import Providers from '@/components/Providers'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProviders>
          <Providers>{children}</Providers>
        </SessionProviders>
      </body>
    </html>
  )
}
