"use client"

import { useState } from "react"
import { ContactModal } from "./contact-modal"
import { TypewriterText } from "./typewriter-text"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-accent/20 via-background to-card animated-gradient" />
        <img
          src="/images/design-mode/image-2.png"
          alt="Modernes Wohnzimmer"
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-15 animate-subtle-zoom"
        />
        <div className="container mx-auto px-6 text-center z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-4">
              <span>Haus & Wohnung</span>
              <br />
              <TypewriterText />
            </h1>

            <p className="text-lg md:text-xl font-semibold text-foreground/80 mb-8">
              Von der Planung bis zur perfekten Ausführung – Winter & Usselmann GbR ist Ihr Partner für beste Qualität
              aus einer Hand.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg shadow-yellow-500/30 dark:shadow-yellow-500/20 hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-500/40 transform hover:-translate-y-1 transition-all duration-300"
            >
              Kostenlose Beratung anfordern
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
