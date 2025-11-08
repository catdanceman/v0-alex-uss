"use client"

import type React from "react"

import { useRef, useState } from "react"

interface ProjectCardProps {
  image: string
  label: string
  labelColor: "red" | "green"
  alt: string
}

export function ProjectCard({ image, label, labelColor, alt }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rotateXValue = (mouseY / (rect.height / 2)) * -10
    const rotateYValue = (mouseX / (rect.width / 2)) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const shadowColor = labelColor === "red" ? "red-500" : "green-500"

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative p-4 rounded-2xl bg-card/30 backdrop-blur-lg border border-border shadow-lg transition-all duration-300 perspective-1000"
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: "transform 0.1s ease-out, box-shadow 0.3s ease",
        boxShadow: isHovering
          ? `0 20px 40px -10px hsl(var(--${shadowColor}) / 0.4)`
          : `0 10px 20px -5px hsl(var(--${shadowColor}) / 0.2)`,
      }}
    >
      <img
        src={image || "/placeholder.svg"}
        className="rounded-xl w-full h-full object-cover"
        alt={alt}
        style={{
          transform: isHovering ? `translateZ(20px)` : "translateZ(0px)",
          transition: "transform 0.3s ease",
        }}
      />
      <span
        className={`absolute top-6 left-6 ${
          labelColor === "red" ? "bg-red-500" : "bg-green-500"
        } text-white font-bold py-1 px-4 rounded-full`}
        style={{
          transform: isHovering ? `translateZ(40px)` : "translateZ(0px)",
          transition: "transform 0.3s ease",
        }}
      >
        {label}
      </span>
    </div>
  )
}
