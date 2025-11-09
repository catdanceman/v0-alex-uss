"use client"

import { Award, Briefcase, ThumbsUp } from "lucide-react"
import { useState, useEffect } from "react"
import { ParallaxCard } from "./parallax-card"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * (end - startValue) + startValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("why-us-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="why-us-section" className="py-20 lg:py-28 bg-gradient-to-br from-accent/10 via-background to-card">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Warum Winter & Usselmann GbR?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Von Küste zu Küste sind wir der vertrauenswürdige Partner für anspruchsvolle Wohnungsrenovierungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Jahre Erfahrung */}
          <ParallaxCard intensity={10}>
            <div className="text-center p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4 animate-subtle-zoom">
                <Award className="w-8 h-8 text-gray-900" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">
                {isVisible && <Counter end={15} suffix="+" />}
              </div>
              <p className="text-muted-foreground font-semibold text-lg">Jahre Erfahrung</p>
            </div>
          </ParallaxCard>

          {/* Projekte */}
          <ParallaxCard intensity={10}>
            <div className="text-center p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4 animate-subtle-zoom">
                <Briefcase className="w-8 h-8 text-gray-900" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">
                {isVisible && <Counter end={200} suffix="+" />}
              </div>
              <p className="text-muted-foreground font-semibold text-lg">Projekte</p>
            </div>
          </ParallaxCard>

          {/* Zufriedenheit */}
          <ParallaxCard intensity={10}>
            <div className="text-center p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4 animate-subtle-zoom">
                <ThumbsUp className="w-8 h-8 text-gray-900" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">100%</div>
              <p className="text-muted-foreground font-semibold text-lg">Zufriedenheit</p>
            </div>
          </ParallaxCard>
        </div>
      </div>
    </section>
  )
}
