"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FullScreenMenu from "./components/FullScreenMenu"
import FloatingActionButton from "./components/FloatingActionButton"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Creative Agency Portfolio",
  description: "A modern creative agency portfolio showcasing our work and services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header onMenuClick={() => setIsMenuOpen(true)} />
        <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        {children}
        <FloatingActionButton />
        <Footer />
      </body>
    </html>
  )
}
