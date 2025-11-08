"use client"

import { ProjectCard } from "./project-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ProjectsSection() {
  const ref = useScrollAnimation()

  const projects = [
    {
      title: "Badezimmersanierung in Ratzeburg",
      before: "/images/bathroom-before.png",
      after: "/images/bathroom-after.png",
    },
    {
      title: "Wohnungsmodernisierung in Mölln",
      before: "/images/apartment-before.png",
      after: "/images/apartment-after.png",
    },
  ]

  return (
    <section ref={ref} id="projects" className="py-20 md:py-32 bg-background scroll-animation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Unsere Projekte</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sehen Sie den Unterschied, den professionelle Handwerkskunst ausmacht.
          </p>
        </div>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{project.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <ProjectCard
                  image={project.before}
                  label="Vorher"
                  labelColor="red"
                  alt={`${project.title} vor der Renovierung`}
                />
                <ProjectCard
                  image={project.after}
                  label="Nachher"
                  labelColor="green"
                  alt={`${project.title} nach der Renovierung`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
