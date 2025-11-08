"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

export function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="tel:+4915141389442"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-yellow-400 text-gray-900 font-bold px-6 py-4 rounded-full shadow-lg shadow-yellow-500/30 hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-500/40 transform hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Phone className="w-6 h-6 animate-subtle-zoom" />
      <span className="hidden md:inline whitespace-nowrap">0151 – 413 894 42</span>
    </a>
  )
}
