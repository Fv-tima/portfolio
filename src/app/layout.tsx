import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Arima } from 'next/font/google'
import './globals.css'

import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })
const poppins = Arima({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />{children}</body>
    </html>
  )
}
