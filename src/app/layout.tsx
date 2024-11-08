import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Arima } from 'next/font/google'
import { Oxanium } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })
const poppins = Oxanium({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Fatima Oluwalogbon",
  description: "Solve and create beautiful web experiences",
  icons: {
    icon: "/image/profile.jpeg", // Path to the favicon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className + "flex text-lightText"}>
      <div className="bg-darkBg min-h-screen justify-between flex md:flex-row flex-col md:px-28 px-0">
   <Nav />
       {children}
       </div>
       </body>
    </html>
  )
}
