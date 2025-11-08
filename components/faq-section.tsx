"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ParallaxCard } from "./parallax-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FAQSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const ref = useScrollAnimation()

  const faqs = [
    {
      question: "Wie lange dauert eine typische Badsanierung?",
      answer:
        "Eine komplette Badsanierung dauert in der Regel zwischen 2 und 3 Wochen, abhängig vom Umfang der Arbeiten, den Trocknungszeiten und der Verfügbarkeit von Materialien. Wir erstellen für jedes Projekt einen detaillierten Zeitplan.",
    },
    {
      question: "Bieten Sie eine kostenlose Erstberatung an?",
      answer:
        "Ja, absolut. Wir bieten eine unverbindliche und kostenlose Erstberatung vor Ort an. Dabei besprechen wir Ihre Wünsche, begutachten die Gegebenheiten und können Ihnen eine erste Kosteneinschätzung geben.",
    },
    {
      question: "Arbeiten Sie mit festen Preisen?",
      answer:
        "Wir erstellen detaillierte und transparente Angebote. Wo immer möglich, bieten wir Festpreise für klar definierte Leistungspakete an, um Ihnen maximale Planungssicherheit zu geben. Eventuelle Zusatzarbeiten werden immer vorab mit Ihnen besprochen.",
    },
    {
      question: "Muss ich während der Renovierung aus der Wohnung ausziehen?",
      answer:
        "Das hängt vom Umfang ab. Bei einer Komplettsanierung ist ein Auszug oft unumgänglich. Bei kleineren Projekten, wie der Renovierung einzelner Räume, bemühen wir uns, die Beeinträchtigungen so gering wie möglich zu halten, damit Sie in der Wohnung bleiben können.",
    },
    {
      question: "Welche Materialien verwenden Sie für Renovierungen?",
      answer:
        "Wir legen großen Wert auf Qualität und Nachhaltigkeit. Daher verwenden wir ausschließlich hochwertige Materialien von namhaften Herstellern, die eine lange Lebensdauer und ein einwandfreies Ergebnis garantieren. Gerne beraten wir Sie bei der Auswahl.",
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/30 scroll-animation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Häufig gestellte Fragen</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Antworten auf die wichtigsten Fragen rund um Ihr Renovierungsprojekt.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ParallaxCard key={index} intensity={6}>
              <div className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border p-6 hover:shadow-lg transition-shadow duration-300">
                <button
                  onClick={() => setOpenAccordion(openAccordion === index + 1 ? null : index + 1)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-300 card-icon ${
                      openAccordion === index + 1 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === index + 1 && (
                  <div className="pt-4 text-muted-foreground animate-in fade-in slide-in-from-top-2">{faq.answer}</div>
                )}
              </div>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  )
}
