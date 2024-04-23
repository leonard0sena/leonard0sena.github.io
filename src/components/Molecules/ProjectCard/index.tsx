import Image from "next/image";

const languagesColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  Ruby: "#701516",
}

export default function ProjectCard({name, description, language, link}: {name: string; description: string; language: string; link: string}) {

  return (
    <div className="p-5 min-w-0 border-2 border-white space-y-4 text-left w-1/5 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Image src="icons/git-icon.svg" alt="Github" width={20} height={20} />
          <a href={link} target="_blank" className="underline">{name}</a>
        </div>
        <p className="text-sm">{description} </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full" style={{backgroundColor: languagesColors[language as keyof typeof languagesColors]}}></div>
        <span className="text-sm">{language}</span>
      </div>
    </div>
  )
}
