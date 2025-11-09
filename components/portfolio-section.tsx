"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function PortfolioSection() {
  const ref = useScrollAnimation()
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [transforms, setTransforms] = useState<{ [key: number]: string }>({})

  const allImages = [
    {
      image: "/images/living-room.png",
      title: "Wohnzimmer Umbau",
    },
    {
      image: "/images/kitchen.png",
      title: "Küchenmodernisierung",
    },
    {
      image: "/images/bathroom.png",
      title: "Badsanierung",
    },
    {
      image: "/images/wardrobe.png",
      title: "Individueller Möbelbau",
    },
    {
      image: "/images/open-plan.png",
      title: "Altbausanierung",
    },
    {
      image: "/images/bathroom-before.png",
      title: "Badezimmersanierung in Ratzeburg - Vorher",
    },
    {
      image: "/images/bathroom-after.png",
      title: "Badezimmersanierung in Ratzeburg - Nachher",
    },
    {
      image: "/images/apartment-before.png",
      title: "Wohnungsmodernisierung in Mölln - Vorher",
    },
    {
      image: "/images/apartment-after.png",
      title: "Wohnungsmodernisierung in Mölln - Nachher",
    },
  ]

  const portfolioItems = [
    {
      image: "/images/living-room.png",
      title: "Wohnzimmer Umbau",
      span: "col-span-1",
    },
    {
      image: "/images/kitchen.png",
      title: "Küchenmodernisierung",
      span: "lg:col-span-2",
    },
    {
      image: "/images/bathroom.png",
      title: "Badsanierung",
      span: "col-span-1",
    },
    {
      image: "/images/wardrobe.png",
      title: "Individueller Möbelbau",
      span: "lg:col-span-2",
    },
    {
      image: "/images/open-plan.png",
      title: "Altbausanierung",
      span: "lg:col-span-2",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * 8
    const rotateY = ((centerX - x) / centerX) * 8

    setTransforms((prev) => ({
      ...prev,
      [index]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    }))
  }

  const handleMouseLeave = (index: number) => {
    setTransforms((prev) => ({
      ...prev,
      [index]: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    }))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return

      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex])

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % allImages.length)
    }
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + allImages.length) % allImages.length)
    }
  }

  return (
    <>
      <section
        ref={ref}
        id="portfolio"
        className="py-20 lg:py-28 bg-indigo-700/90 text-white dark:bg-indigo-900/90 scroll-animation"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Entdecken Sie unsere Projekte</h2>
            <p className="mt-4 text-lg text-indigo-200 max-w-3xl mx-auto">
              Lassen Sie sich von unseren abgeschlossenen Renovierungen inspirieren. Hier sehen Sie die Qualität unserer
              Arbeit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-xl relative ${item.span} h-64 md:h-80 cursor-pointer`}
                style={{
                  transform: transforms[index] || "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  transition: "transform 0.1s ease-out",
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <p className="absolute bottom-4 left-4 text-white font-bold text-lg z-10">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedImageIndex !== null} onOpenChange={(open) => !open && setSelectedImageIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-8 w-8 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          {selectedImageIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image
                  src={allImages[selectedImageIndex].image || "/placeholder.svg"}
                  alt={allImages[selectedImageIndex].title}
                  fill
                  className="object-contain"
                  sizes="95vw"
                />
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <p className="text-white text-xl font-bold bg-black/60 px-6 py-3 rounded-lg backdrop-blur-sm">
                  {allImages[selectedImageIndex].title}
                </p>
                <p className="text-white/70 text-sm bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm">
                  {selectedImageIndex + 1} / {allImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
