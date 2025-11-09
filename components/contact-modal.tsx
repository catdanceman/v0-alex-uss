"use client"

import type React from "react"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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

  useEffect(() => {
    if (!isOpen) {
      setSubmitStatus("idle")
    }
  }, [isOpen])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", "cb12ff43-05c0-4c52-b98c-e7648ff67914")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        ;(event.target as HTMLFormElement).reset()
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
        <form onSubmit={handleSubmit}>
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

          {submitStatus === "success" && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md">
              <p className="text-green-400 font-bold text-center">
                Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
              </p>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md">
              <p className="text-red-400 font-bold text-center">
                Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.
              </p>
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-lg shadow-yellow-500/30 dark:shadow-yellow-500/20 hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-500/40 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
            >
              {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
