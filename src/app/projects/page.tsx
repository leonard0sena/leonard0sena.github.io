"use client"

import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";

async function getRepos() {
  const response = await fetch("https://api.github.com/users/leonard0sena/repos");
  return response.json();
}

export default function Projects() {
  const [projects, setProjects] = useState<{ name: string; description: string; html_url: string; language: string; }[]>([]);

  useEffect(() => {
    getRepos().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <div className="m-10 flex flex-wrap gap-5">
      {
        projects.map((project) => (
          <ProjectCard key={project.name} name={project.name} description={project.description} language={project.language} link={project.html_url} />
        ))
      }
    </div>
  )
}
