"use client"

import { Home, Bath, PaintBucket, LayoutGrid, Hammer, Wrench } from "lucide-react"
import { ParallaxCard } from "./parallax-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ServicesSection() {
  const ref = useScrollAnimation()

  const services = [
    {
      title: "Komplettsanierung",
      description: "Wir modernisieren Ihre gesamte Wohnung oder Ihr Haus, von der Entkernung bis zum finalen Anstrich.",
      icon: Home,
    },
    {
      title: "Bad & Küche",
      description: "Traumbäder und moderne Küchen nach Maß, inklusive Fliesenarbeiten und Montage.",
      icon: Bath,
    },
    {
      title: "Maler- & Putzarbeiten",
      description: "Professionelle Anstriche, Spachteltechniken und Putzarbeiten für Innen- und Außenwände.",
      icon: PaintBucket,
    },
    {
      title: "Bodenbelagsarbeiten",
      description: "Verlegung von Parkett, Laminat, Vinyl und Dielen, inklusive Schleifarbeiten und Sockelleisten.",
      icon: LayoutGrid,
    },
    {
      title: "Trockenbau",
      description: "Moderne Raumkonzepte durch das Verkleiden von Wänden und Decken sowie Vorwandinstallationen.",
      icon: Hammer,
    },
    {
      title: "Tischlerarbeiten",
      description: "Präzise Montage von Türen und Zargen sowie Lieferung und Einbau von kompletten Küchen.",
      icon: Wrench,
    },
  ]

  return (
    <section ref={ref} id="services" className="py-20 md:py-32 bg-muted/30 scroll-animation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Unsere Leistungen</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bieten ein umfassendes Spektrum an Bauleistungen für die Sanierung und Instandhaltung Ihrer Immobilie.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ParallaxCard key={index} intensity={10}>
                <div className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6 card-icon animate-subtle-zoom">
                    <Icon className="w-8 h-8 text-gray-900" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-center text-foreground mb-3">{service.title}</h3>
                  <p className="text-center text-muted-foreground">{service.description}</p>
                </div>
              </ParallaxCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
