import React from 'react'

export function ProjectsCard({
  projects,
}: {
  projects: { name: string; description: string; link: string; }[]
}) {
  return (
    <div className="projects">
      {projects.map((project) => (
        <div className="embla__slide p-10 mt-5 min-w-0 flex-[0_0_20%] border-2 border-white" key={project.name}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}
