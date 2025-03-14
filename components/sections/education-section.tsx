import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { ParallaxCard } from "@/components/ui/parallax-card"
import { BookOpen, GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Education" subtitle="Academic background and qualifications" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ParallaxCard>
            <Card className="border-primary/20 transition-all duration-300 hover:border-primary/40 h-full">
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Computer Science</CardTitle>
                  <CardDescription>Universidad de Buenos Aires (UBA)</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-2">Currently Studying</div>
                <p className="text-sm">
                  Pursuing a degree in Computer Science, focusing on software engineering, algorithms, and data
                  structures. The program provides a strong theoretical foundation alongside practical programming
                  skills.
                </p>
              </CardContent>
            </Card>
          </ParallaxCard>

          <ParallaxCard>
            <Card className="border-primary/20 transition-all duration-300 hover:border-primary/40 h-full">
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>IT Technician</CardTitle>
                  <CardDescription>Technical Institute</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-2">Completed</div>
                <p className="text-sm">
                  Earned a technical qualification in Information Technology, covering fundamentals of programming,
                  networking, and system administration. This provided the practical skills that launched my career in
                  software development.
                </p>
              </CardContent>
            </Card>
          </ParallaxCard>
        </div>
      </div>
    </section>
  )
}

