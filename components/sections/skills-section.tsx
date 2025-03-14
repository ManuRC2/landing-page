import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ParallaxCard } from "@/components/ui/parallax-card"
import { Code, Database, Globe, Server, Wrench, Laptop } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      name: "Languages",
      icon: Code,
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "SQL", level: "Intermediate" },
        { name: "TypeScript", level: "Intermediate" },
      ],
    },
    {
      name: "Frontend",
      icon: Globe,
      skills: [
        { name: "React", level: "Intermediate" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "Responsive Design", level: "Advanced" },
        { name: "UI/UX Design", level: "Intermediate" },
      ],
    },
    {
      name: "Backend",
      icon: Server,
      skills: [
        { name: "Django", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Express", level: "Intermediate" },
      ],
    },
    {
      name: "Database",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
        { name: "MongoDB", level: "Basic" },
        { name: "SQLite", level: "Advanced" },
      ],
    },
    {
      name: "DevOps",
      icon: Wrench,
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Linux", level: "Intermediate" },
        { name: "CI/CD", level: "Basic" },
      ],
    },
    {
      name: "Mobile",
      icon: Laptop,
      skills: [
        { name: "React Native", level: "Intermediate" },
        { name: "Mobile UI Design", level: "Intermediate" },
        { name: "Progressive Web Apps", level: "Basic" },
      ],
    },
  ]

  // Function to get badge variant based on skill level
  const getBadgeVariant = (level: string) => {
    switch (level) {
      case "Advanced":
        return "default"
      case "Intermediate":
        return "secondary"
      case "Basic":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <ParallaxCard key={category.name} intensity={10}>
              <Card className="border-primary/20 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name} variant={getBadgeVariant(skill.level)} className="px-3 py-1">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  )
}

