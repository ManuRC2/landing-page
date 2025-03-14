import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { ParallaxCard } from "@/components/ui/parallax-card"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Work Experience" subtitle="My professional journey" />

        <div className="mt-12 space-y-8">
          <ParallaxCard>
            <Card className="border-primary/20 transition-all duration-300 hover:border-primary/40">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Software Engineer</CardTitle>
                    <CardDescription>Consultar Plus</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">2021 - Present (2+ years)</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Developing and maintaining ERP Web Applications and mobile solutions for clients across various
                  industries.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Designed and implemented responsive web interfaces using modern frameworks</li>
                  <li>Developed backend systems with Django to handle complex business logic</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                  <li>Implemented mobile-friendly features to enhance user experience</li>
                  <li>Participated in code reviews and technical discussions to improve code quality</li>
                </ul>
              </CardContent>
            </Card>
          </ParallaxCard>

          <ParallaxCard>
            <Card className="border-primary/20 transition-all duration-300 hover:border-primary/40 opacity-80">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Freelance Developer</CardTitle>
                    <CardDescription>Self-employed</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">2020 - 2021</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Worked on various web development projects for small businesses and individuals.</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Built custom websites and web applications based on client requirements</li>
                  <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                  <li>Managed project timelines and client communications</li>
                </ul>
              </CardContent>
            </Card>
          </ParallaxCard>
        </div>
      </div>
    </section>
  )
}

