import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { ParallaxCard } from "@/components/ui/parallax-card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Who I Am</h3>
            <p className="text-muted-foreground">
              I'm a Software Engineer with over 2 years of experience at Consultar Plus, where I develop ERP Web
              Applications and mobile solutions. I'm curious by nature and always eager to experiment with new
              technologies and approaches.
            </p>
            <p className="text-muted-foreground">
              Recently, I've been exploring self-hosting solutions and built a home server using an old laptop, which is
              currently hosting this website.
            </p>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2">Personal Traits</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Innovative</Badge>
                <Badge variant="outline">Versatile</Badge>
                <Badge variant="outline">Problem Solver</Badge>
                <Badge variant="outline">Team-oriented</Badge>
                <Badge variant="outline">Continuous Learner</Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ParallaxCard intensity={8}>
              <Card className="bg-secondary/50 border-primary/20 h-full">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Current Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Developing robust ERP solutions while exploring modern web frameworks and cloud technologies.
                  </p>
                </CardContent>
              </Card>
            </ParallaxCard>

            <ParallaxCard intensity={8}>
              <Card className="bg-secondary/50 border-primary/20 h-full">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Tech Philosophy</h4>
                  <p className="text-sm text-muted-foreground">
                    I believe in using the right tool for the job, not just the trendiest one. Efficiency and
                    maintainability are key.
                  </p>
                </CardContent>
              </Card>
            </ParallaxCard>

            <ParallaxCard intensity={8} className="sm:col-span-2">
              <Card className="bg-secondary/50 border-primary/20 h-full">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Future Goals</h4>
                  <p className="text-sm text-muted-foreground">
                    Completing my Computer Science degree at UBA while continuing to grow professionally and explore
                    emerging technologies.
                  </p>
                </CardContent>
              </Card>
            </ParallaxCard>
          </div>
        </div>
      </div>
    </section>
  )
}

