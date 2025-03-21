"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Music, Gamepad2, Car } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"

export function HobbiesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const photos = [
    { src: "/foto2.JPG", alt: "Foto 1" },
    { src: "/foto3.JPG", alt: "Foto 2" },
    { src: "/foto4.JPG", alt: "Foto 3" },
    { src: "/foto6.JPG", alt: "Foto 4" },
    { src: "/foto7.JPG", alt: "Foto 5" },
    { src: "/foto8.JPG", alt: "Foto 6" },
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
                Photography is a big passion of mine. I really enjoy capturing moments, exploring different perspectives,
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
                    <DialogTitle></DialogTitle>
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
                <h4 className="text-lg font-semibold mb-2">Favorite Artists</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>MGMT</li>
                  <li>Gorillaz</li>
                  <li>Animal Collective</li>
                  <li>The Cure</li>
                </ul>
              </div>
              <Card className="relative bg-secondary/50 bg-[url('/congratulations.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50 rounded-lg z-0 border border-primary/50"></div>
                <CardContent className="relative z-10 p-6">
                  <h4 className="text-lg font-semibold mb-2 text-white">Current Favourite Song</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-md flex items-center justify-center">
                        <Music className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Congratulations</p>
                        <p className="text-sm text-gray-300">MGMT</p>
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
                  VPlaying video games is something I genuinely enjoy. I appreciate how they combine relaxation with the chance to learn and improve.
                </p>
                <h4 className="text-lg font-semibold mb-2">Favorite Games</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Strategy</h5>
                    <p className="text-sm text-muted-foreground">Cities Skylines, Mount & blade: Warband</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">RPG</h5>
                    <p className="text-sm text-muted-foreground">Dark Souls 3, Fallout New Vegas, Terraria</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Racing</h5>
                    <p className="text-sm text-muted-foreground">Forza Horizon, Tokyo Xtreme Racer, NFS Underground</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Indie</h5>
                    <p className="text-sm text-muted-foreground">Outer Wilds, Hades, The Binding of Isaac</p>
                  </div>
                </div>
              </div>

              <Card className="bg-secondary/50 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">My setup</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>CPU: Ryzen 5 3600</li>
                    <li>GPU: EVGA RTX 3080</li>
                    <li>Keeb: Ajazz AK820 Pro</li>
                    <li>Mouse: Logitech G502</li>
                    <li>Monitor: Gigabyte G24F</li>
                    <li>Headphones: AudioTechnica ATH-M20x</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cars" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                Cars have always caught my interest. I like checking out different models, understanding how they work, and enjoy driving them whenever I can.
                </p>
                <h4 className="text-lg font-semibold mb-2">Favorite Cars</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Dream cars</h5>
                    <p className="text-sm text-muted-foreground">Integra Type R, GTR R35</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Realistic dream cars</h5>
                    <p className="text-sm text-muted-foreground">Civic EJ1, BMW E36</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Old sports cars</h5>
                    <p className="text-sm text-muted-foreground">Acura NSX, Carrera GT</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h5 className="font-medium">Modern sports cars</h5>
                    <p className="text-sm text-muted-foreground">GT3 RS, Audi R8</p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/camellia_ej1.jpg"
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

