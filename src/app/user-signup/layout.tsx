import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User SignUp',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-nenda-dark">
      <body>{children}</body>
    </html>
  )
}
