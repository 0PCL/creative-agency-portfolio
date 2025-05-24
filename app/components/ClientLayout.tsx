"use client"

import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import FullScreenMenu from "./FullScreenMenu"
import FloatingActionButton from "./FloatingActionButton"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {children}
      <FloatingActionButton />
      <Footer />
    </>
  )
} 