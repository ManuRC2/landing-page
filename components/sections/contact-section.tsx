"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, LoaderCircle, Mail, MapPin, Send, Check } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function isSubmittingToHTML(isSubmitting: number) {
    switch (isSubmitting) {	
      case 0:
        return <>
        <span className="mr-2">Send Message</span>
        <Send className="h-4 w-4" />
      </>
      case 1:
        return <>
        <span className="mr-2">Sending...</span>
        <LoaderCircle className="h-4 w-4 animate-spin" />
      </>
      case 2:
        return <>
        <span className="mr-2">Message sent!</span>
        <Check className="h-4 w-4" />
      </>
         
    }
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(1)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500)) // TODO
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    formData.append("access_key", "790481e3-5d52-4067-abee-009b23fa1276");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
      
    // Reset form
    setFormData({ name: "", email: "", message: "" })

    if (data.success) {
      setIsSubmitting(2)
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } else {
      toast.error("Error when sending the message. Please try again later.");
    }
    setIsSubmitting(0)
  }
  

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Contact Me" subtitle="Let's get in touch" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
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

                <Button type="submit" className="w-full" disabled={isSubmitting == 1}>
                  {isSubmittingToHTML(isSubmitting)}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 h-full bg-background p-6 rounded-lg border border-primary/20">
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:manuel@colusso.ar" target="_blank">
                      manuel@colusso.ar
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="https://linkedin.com/in/manuelcolusso" target="_blank">
                      linkedin.com/in/manuelcolusso
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-sm text-muted-foreground">
                      <a target="_blank" href="https://github.com/manurc2">
                      github.com/manurc2
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="https://www.google.com/maps/place/Rosario,+Santa+Fe+Province" target="_blank">
                      Rosario, Argentina
                      </a>
                    </p>
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
              <p className="text-muted-foreground mt-2">Response time: Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

