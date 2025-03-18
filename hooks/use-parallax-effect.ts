"use client"

import { useState, useEffect, useRef } from "react"

interface ParallaxOptions {
  intensity?: number
  perspective?: number
  resetOnLeave?: boolean
}

export function useParallaxEffect({ intensity = 15, perspective = 1000, resetOnLeave = true }: ParallaxOptions = {}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!elementRef.current) return

    const rect = elementRef.current.getBoundingClientRect()

    // Calculate mouse position relative to the element
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate the position as a percentage of the element's dimensions
    const relativeX = (x / rect.width - 0.5) * 2 // -1 to 1
    const relativeY = (y / rect.height - 0.5) * 2 // -1 to 1
    console.log(relativeX, relativeY)

    setPosition({ x: relativeX, y: relativeY })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (resetOnLeave) {
      setPosition({ x: 0, y: 0 })
    }
  }

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [resetOnLeave])

  const transform = isHovering
    ? `perspective(${perspective}px) rotateX(${position.y * -intensity}deg) rotateY(${position.x * intensity}deg)`
    : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`

  return {
    elementRef,
    transform,
    isHovering,
  }
}

