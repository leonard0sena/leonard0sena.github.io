"use client"

import { useEffect, useState } from "react";
import { ProjectsCard } from "./ProjectCard";

async function getRepos() {
  const response = await fetch("https://api.github.com/users/leonard0sena/repos");
  return response.json();
}

export default function Projects() {
  const [projects, setProjects] = useState<{ name: string; description: string; link: string; }[]>([]);

  useEffect(() => {
    getRepos().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ProjectsCard projects={projects} />
    </div>
  )
}
