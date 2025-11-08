"use client"

import { useState, useEffect } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "./ui/button"

export function TestimonialsSection() {
  const ref = useScrollAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  const reviews = [
    {
      name: "Familie Schmidt",
      comment:
        "Absolut professionell von Anfang bis Ende. Unsere Altbauwohnung erstrahlt in neuem Glanz. Die Liebe zum Detail ist unglaublich. Wir sind begeistert!",
    },
    {
      name: "Herr Meier",
      comment:
        "Die Badsanierung war ein voller Erfolg. Das Team von Winter & Usselmann war pünktlich, sauber und extrem kompetent. Jederzeit wieder!",
    },
    {
      name: "Frau Bauer",
      comment:
        "Der maßgefertigte Einbauschrank ist ein Traum. Er passt perfekt und die Qualität ist hervorragend. Tolle Beratung und Umsetzung.",
    },
    {
      name: "Dr. Lena Vogel",
      comment:
        "Die Kommunikation während des gesamten Projekts war exzellent. Alle unsere Wünsche wurden berücksichtigt und das Ergebnis übertrifft unsere Erwartungen.",
    },
    {
      name: "Markus Weber",
      comment:
        "Sehr zuverlässiges und fähiges Team. Unsere Küche wurde komplett modernisiert und sieht fantastisch aus. Klare Empfehlung!",
    },
  ]

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) setItemsPerView(1)
      else if (window.innerWidth < 1024) setItemsPerView(2)
      else setItemsPerView(3)
      setCurrentIndex(0)
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const next = () => {
    if (currentIndex < reviews.length - itemsPerView) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <section ref={ref} id="reviews" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Das sagen unsere zufriedenen Kunden
          </h2>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-800 backdrop-blur-lg p-8 rounded-2xl shadow-lg h-full border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-4 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic mb-6">{review.comment}</p>
                    <p className="font-bold text-gray-900 dark:text-gray-100">{review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            onClick={prev}
            disabled={currentIndex === 0}
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 -translate-y-1/2 rounded-full shadow-lg disabled:opacity-50 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-gray-100" />
          </Button>
          <Button
            onClick={next}
            disabled={currentIndex >= reviews.length - itemsPerView}
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 -translate-y-1/2 rounded-full shadow-lg disabled:opacity-50 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-gray-100" />
          </Button>
        </div>
      </div>
    </section>
  )
}
