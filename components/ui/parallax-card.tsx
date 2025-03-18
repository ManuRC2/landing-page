"use client"

import type { ReactNode } from "react"
import { useParallaxEffect } from "@/hooks/use-parallax-effect"
import { cn } from "@/lib/utils"

interface ParallaxCardProps {
  children: ReactNode
  className?: string
  intensity?: number
  perspective?: number
  resetOnLeave?: boolean
}

export function ParallaxCard({
  children,
  className,
  intensity = 2,
  perspective = 1000,
  resetOnLeave = true,
}: ParallaxCardProps) {
  const { elementRef, transform, isHovering } = useParallaxEffect({
    intensity,
    perspective,
    resetOnLeave,
  })

  return (
    <div
      ref={elementRef}
      className={cn("transition-transform duration-200 ease-out", isHovering && "z-10", className)}
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  )
}

