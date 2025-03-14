"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { ParallaxCard } from "@/components/ui/parallax-card"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // Show success message (in a real app, you'd use a toast or alert)
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Contact Me" subtitle="Let's get in touch" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ParallaxCard>
            <Card className="border-primary/20 h-full">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending...</span>
                        <Send className="h-4 w-4 animate-pulse" />
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ParallaxCard>

          <ParallaxCard>
            <div className="space-y-8 h-full bg-background p-6 rounded-lg border border-primary/20">
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm text-muted-foreground">manuel.colusso@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/manuelcolusso</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <p className="text-sm text-muted-foreground">github.com/manuelcolusso</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-sm text-muted-foreground">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Availability</h3>
                <p className="text-muted-foreground">
                  I'm currently open to freelance opportunities and interesting projects. Feel free to reach out if
                  you'd like to collaborate or discuss potential work.
                </p>
                <p className="text-muted-foreground mt-2">Response time: Usually within 24-48 hours</p>
              </div>
            </div>
          </ParallaxCard>
        </div>
      </div>
    </section>
  )
}

