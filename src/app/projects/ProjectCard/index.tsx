import React from 'react'

export function ProjectsCard({
  projects,
}: {
  projects: { name: string; description: string; link: string; }[]
}) {
  return (
    <div className="projects">
      {projects.map((project) => (
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}
