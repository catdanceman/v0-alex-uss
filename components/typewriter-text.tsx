"use client"

import { useEffect, useState } from "react"

const words = ["Renovierung", "Sanierung", "Restaurierung"]

export function TypewriterText() {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1))
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1800)
          }
        } else {
          setText(currentWord.slice(0, text.length - 1))
          if (text.length - 1 === 0) {
            setIsDeleting(false)
            setWordIndex((wordIndex + 1) % words.length)
          }
        }
      },
      isDeleting ? 70 : 120,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex])

  return (
    <span className="block bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent min-h-[1.2em]">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}
