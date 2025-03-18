"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-background/10 to-background z-10",
          scrolled ? "opacity-80" : "opacity-60",
        )}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="container relative z-20 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter animate-fade-in">
            Manuel Colusso
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] animate-fade-in-delayed">
            Software Engineer specializing in web applications and exploring new technologies
          </p>

          <div className="flex items-center gap-4 mt-8 animate-fade-in-delayed-more">
            <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full"
            onClick={() => window.open("https://github.com/ManuRC2", "_blank")}>
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full"
            onClick={() => window.open("https://linkedin.com/in/manuelcolusso/", "_blank")}>
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full"
            onClick={() => window.open("mailto:manuel@colusso.ar", "_blank")}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          <Button onClick={scrollToContact} className="mt-12 animate-bounce-slow" variant="ghost">
            <ArrowDown className="h-5 w-5 mr-2" />
            Explore
          </Button>
        </div>
      </div>
    </section>
  )
}

