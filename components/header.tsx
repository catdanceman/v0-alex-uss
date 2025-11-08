"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Leistungen" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "Über Uns" },
    { href: "#contact", label: "Kontakt" },
  ]

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-card/70 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-3">
            <Image
              src="/images/design-mode/image-1.png"
              alt="Winter & Usselmann GbR Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-foreground">Winter & Usselmann GbR</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-semibold text-foreground/70 hover:text-accent-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+4915141389442"
              className="hidden lg:flex items-center gap-2 text-foreground/70 hover:text-accent-foreground transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>0151 – 413 894 42</span>
            </a>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-foreground/70 hover:bg-muted"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-card/90 backdrop-blur-md rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-foreground/70 hover:text-accent-foreground transition-colors py-2 text-center"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+4915141389442"
                className="flex items-center justify-center gap-2 text-foreground/70 hover:text-accent-foreground transition-colors font-semibold py-2 border-t border-border"
              >
                <Phone className="w-5 h-5" />
                <span>0151 – 413 894 42</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
