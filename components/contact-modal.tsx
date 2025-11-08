"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-8 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-center text-foreground mb-6">Kostenlose Beratung anfordern</h3>
        <form action="#" method="POST">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Ihr Name"
                className="w-full px-3 py-2 bg-background/50 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="ihre@email.de"
                className="w-full px-3 py-2 bg-background/50 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                Telefon (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Ihre Telefonnummer"
                className="w-full px-3 py-2 bg-background/50 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Ihr Projekt
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben..."
                className="w-full px-3 py-2 bg-background/50 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              Anfrage senden
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
