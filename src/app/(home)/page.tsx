'use client'
import Carousel from "@/components/Molecules/Carousel";
import { About } from "./About";
import { Info } from "./Info";
import { useEffect, useState } from "react";

async function getRepos() {
  const response = await fetch("https://api.github.com/users/leonard0sena/repos");
  return response.json();
}

export default function Home() {
  const [projects, setProjects] = useState<{ name: string; description: string; link: string; }[]>([]);

  useEffect(() => {
    getRepos().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex", textAlign: "center", justifyContent: "space-between" }}>
        <About />
        <Info />
      </div>
      <Carousel items={projects} />
    </>
  )
}
