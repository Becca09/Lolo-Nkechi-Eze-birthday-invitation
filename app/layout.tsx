import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lolo Nkechi Eze - 60th Birthday Celebration',
  description: 'You are cordially invited to celebrate Lolo Nkechi Eze\'s 60th Birthday',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
