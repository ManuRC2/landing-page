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
        { name: "TypeScript", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "PHP", level: "Intermediate" },
        { name: "C", level: "Intermediate" },
        { name: "Go", level: "Basic" },
        { name: "Kotlin", level: "Basic" },
      ],
    },
    {
      name: "Frontend",
      icon: Globe,
      skills: [
        { name: "React", level: "Intermediate" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "UI/UX Design", level: "Advanced" },
        { name: "jQuery", level: "Advanced" },
        { name: "Vue", level: "Basic" },
        { name: "Angular", level: "Basic" },
      ],
    },
    {
      name: "Backend",
      icon: Server,
      skills: [
        { name: "Django", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Node", level: "Intermediate" },
        { name: "Express", level: "Intermediate" },
        { name: "Flask", level: "Intermediate" },
        { name: "Laravel", level: "Basic" },
      ],
    },
    {
      name: "Database",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MySQL", level: "Intermediate" },
        { name: "SQLite", level: "Advanced" },
        { name: "MongoDB", level: "Basic" },
        { name: "Firebase", level: "Intermediate" },
        { name: "Pocketbase", level: "Intermediate" },
        { name: "SurrealDB", level: "Basic" },
      ],
    },
    {
      name: "DevOps",
      icon: Wrench,
      skills: [
        { name: "CI/CD", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "Jira", level: "Intermediate" },
        { name: "Docker", level: "Advanced" },
        { name: "Linux", level: "Advanced" },
        { name: "Langchain", level: "Intermediate" },
        { name: "Networking", level: "Intermediate" },
      ],
    },
    {
      name: "Mobile",
      icon: Laptop,
      skills: [
        { name: "Progressive Web Apps", level: "Advanced" },
        { name: "KivyMD", level: "Advanced" },
        { name: "React Native", level: "Basic" },
        { name: "Mobile UI Design", level: "Intermediate" },
        { name: "Kotlin Multiplatform", level: "Basic" },
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

