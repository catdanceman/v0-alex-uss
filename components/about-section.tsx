"use client"

import { ParallaxCard } from "./parallax-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="about" className="py-20 md:py-32 bg-card scroll-animation">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Über Winter & Usselmann GbR</h2>
            <p className="text-lg text-foreground/90 mb-4">
              Wir sind ein dynamisches, aufstrebendes und hochmotiviertes Unternehmen mit Sitz im Herzen von
              Schleswig-Holstein (Ratzeburg).
            </p>
            <p className="text-muted-foreground mb-4">
              Nach langjähriger Erfahrung in der Baubranche bieten wir jegliche Bauleistungen in der Wohnungssanierung
              und Instandhaltung von Immobilien aller Gewerke an.
            </p>
            <p className="text-muted-foreground mb-6 border-l-4 border-accent pl-4 italic">
              Unser Credo ist, nachhaltige Qualität zu leisten, um Ihnen damit langfristige Zufriedenheit zu
              garantieren. Ihre Zufriedenheit ist unser Maßstab.
            </p>
          </div>
          <div>
            <ParallaxCard intensity={8}>
              <div className="p-4 rounded-2xl liquid-glass">
                <img
                  src="/images/design-mode/image-13.png.jpeg"
                  alt="Team von Winter & Usselmann GbR"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </ParallaxCard>
          </div>
        </div>
      </div>
    </section>
  )
}
