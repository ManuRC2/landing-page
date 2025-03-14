"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Music, Gamepad2, Car } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function HobbiesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const photos = [
    { src: "/placeholder.svg?height=600&width=800", alt: "Landscape photography" },
    { src: "/placeholder.svg?height=800&width=600", alt: "Portrait photography" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Street photography" },
    { src: "/placeholder.svg?height=800&width=600", alt: "Nature photography" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Urban photography" },
    { src: "/placeholder.svg?height=800&width=600", alt: "Architecture photography" },
  ]

  return (
    <section id="hobbies" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Hobbies & Interests" subtitle="What I enjoy outside of coding" />

        <Tabs defaultValue="photography" className="mt-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="photography" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span className="hidden sm:inline">Photography</span>
            </TabsTrigger>
            <TabsTrigger value="music" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="hidden sm:inline">Music</span>
            </TabsTrigger>
            <TabsTrigger value="gaming" className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              <span className="hidden sm:inline">Gaming</span>
            </TabsTrigger>
            <TabsTrigger value="cars" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span className="hidden sm:inline">Cars</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photography" className="mt-6">
            <div className="mb-4">
              <p className="text-muted-foreground">
                Photography is one of my greatest passions. I enjoy capturing moments, exploring different perspectives,
                and experimenting with composition and lighting.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity">
                      <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="relative h-[80vh] w-full">
                      <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-contain" />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="music" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-muted-foreground mb-4">
                  Music has always been an important part of my life. I enjoy discovering new artists and genres, and I
                  find that music helps me focus while coding.
                </p>
                <h4 className="text-lg font-semibold mb-2">Favorite Genres</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Alternative Rock</li>
                  <li>Electronic</li>
                  <li>Jazz</li>
                  <li>Classical</li>
                </ul>
              </div>

              <Card className="bg-secondary/50 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Currently Listening To</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-md flex items-center justify-center">
                        <Music className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Playlist Name</p>
                        <p className="text-sm text-muted-foreground">Various Artists</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gaming" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="text-muted-foreground mb-4">
                  Video games are a great way for me to unwind and relax. I enjoy both casual and competitive gaming,
                  and I'm always excited to try new titles.
                </p>
                <h4 className="text-lg font-semibold mb-2">Favorite Games</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Strategy</h5>
                    <p className="text-sm text-muted-foreground">Civilization, Age of Empires</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">RPG</h5>
                    <p className="text-sm text-muted-foreground">The Witcher, Skyrim</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">FPS</h5>
                    <p className="text-sm text-muted-foreground">Valorant, CS:GO</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Indie</h5>
                    <p className="text-sm text-muted-foreground">Hades, Hollow Knight</p>
                  </div>
                </div>
              </div>

              <Card className="bg-secondary/50 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Gaming Setup</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Custom PC Build</li>
                    <li>Mechanical Keyboard</li>
                    <li>Gaming Mouse</li>
                    <li>Dual Monitor Setup</li>
                    <li>Gaming Headset</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cars" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  I have a deep love for cars - from their engineering and design to the driving experience. I enjoy
                  learning about different models, their history, and technological innovations.
                </p>
                <h4 className="text-lg font-semibold mb-2">Favorite Car Types</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Sports Cars</h5>
                    <p className="text-sm text-muted-foreground">Porsche 911, Audi R8</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Classics</h5>
                    <p className="text-sm text-muted-foreground">Ford Mustang, Jaguar E-Type</p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Car photography"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

