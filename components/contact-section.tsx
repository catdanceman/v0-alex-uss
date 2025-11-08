"use client"

import { useState } from "react"
import { ContactModal } from "./contact-modal"
import { ParallaxCard } from "./parallax-card"
import { Phone, Mail, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useScrollAnimation()

  return (
    <>
      <section ref={ref} id="contact" className="py-20 md:py-32 bg-card scroll-animation">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Kontaktieren Sie uns</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Wir freuen uns auf Ihre Kontaktaufnahme und Ihr Projekt.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ParallaxCard intensity={8}>
              <div className="p-10 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/20">
                        <MapPin className="w-6 h-6 card-icon" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Adresse</h3>
                        <p className="text-muted-foreground">Winter & Usselmann GbR</p>
                        <p className="text-muted-foreground">Michael Winter</p>
                        <p className="text-muted-foreground">Bachstraße 36</p>
                        <p className="text-muted-foreground">23909 Ratzeburg</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/20">
                        <Phone className="w-6 h-6 card-icon" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Telefon</h3>
                        <a
                          href="tel:015141389442"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          0151 – 413 894 42
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/20">
                        <Mail className="w-6 h-6 card-icon" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">E-Mail</h3>
                        <a
                          href="mailto:info@wintuss.de"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          info@wintuss.de
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg shadow-yellow-500/30 dark:shadow-yellow-500/20 hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-500/40 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Jetzt kostenloses Angebot anfordern
                  </button>
                </div>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
