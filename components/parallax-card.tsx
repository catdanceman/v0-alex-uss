"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"

interface ParallaxCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function ParallaxCard({ children, className = "", intensity = 15 }: ParallaxCardProps) {
  const [transform, setTransform] = useState("")
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * intensity
    const rotateY = ((centerX - x) / centerX) * intensity

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`parallax-card ${className}`}
      style={{
        transform,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  )
}
