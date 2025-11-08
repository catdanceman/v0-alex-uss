"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function WhyUsSection() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 lg:py-28 scroll-animation">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Warum Winter & Usselmann GbR?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Von Küste zu Küste sind wir der vertrauenswürdige Partner für anspruchsvolle Wohnungsrenovierungen.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
          {/* 15+ Years */}
          <div className="flex flex-col items-center animate-fade-in">
            <div className="w-48 h-48 bg-gray-800 dark:bg-gray-950 rounded-full flex flex-col justify-center items-center shadow-2xl shadow-gray-500/20 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:shadow-gray-500/40 animate-pulse-slow cursor-pointer">
              <span className="text-5xl font-bold text-white">15+</span>
              <span className="text-gray-300 mt-1">Jahre Erfahrung</span>
            </div>
          </div>
          {/* 200+ Projects */}
          <div className="flex flex-col items-center animate-fade-in animation-delay-200">
            <div className="w-56 h-56 bg-yellow-400 rounded-full flex flex-col justify-center items-center shadow-2xl shadow-yellow-500/30 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:shadow-yellow-500/50 animate-pulse-slow cursor-pointer">
              <span className="text-5xl font-bold text-gray-900">200+</span>
              <span className="text-gray-800 mt-1">Projekte</span>
            </div>
          </div>
          {/* 100% Satisfaction */}
          <div className="flex flex-col items-center animate-fade-in animation-delay-400">
            <div className="w-48 h-48 bg-indigo-600 rounded-full flex flex-col justify-center items-center shadow-2xl shadow-indigo-500/30 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:shadow-indigo-500/50 animate-pulse-slow cursor-pointer">
              <span className="text-5xl font-bold text-white">100%</span>
              <span className="text-gray-200 mt-1">Zufriedenheit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
