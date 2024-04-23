import Image from 'next/image'

const stackIcons = [
  { src: "icons/nodejs-icon.svg", alt: 'nodejs icon' },
  { src: "icons/javascript.svg", alt: 'javascript icon' },
  { src: "icons/react.svg", alt: 'react icon' },
  { src: "icons/typescript-icon.svg", alt: 'typescript icon' },
  { src: "icons/ruby.svg", alt: 'ruby icon' },
];

const toolIcons = [
  { src: "icons/git-icon.svg", alt: 'git icon' },
  { src: "icons/github-icon.svg", alt: 'github icon' },
  { src: "icons/visual-studio-code.svg", alt: 'vscode icon' },
  { src: "icons/docker-icon.svg", alt: 'docker icon' },
  { src: "icons/figma.svg", alt: 'figma icon', width: 30, height: 30 },
  { src: "icons/aws.svg", alt: 'aws icon' },
  { src: "icons/terminal.svg", alt: 'terminal icon' },
];

export default function Info() {

  return (
    <div className="flex flex-col border-white border-2 m-10 gap-8 p-8 text-start">
      <h1 className='text-white text-xl'>Other Infos</h1>
      <div>
        <h1>Current Stack</h1>
        <div className="flex flex-row gap-4">
          {stackIcons.map(icon => (
            <Image src={icon.src} alt={icon.alt} width={40} height={40} key={icon.alt} />
          ))}
        </div>
      </div>
      <div>
        <h1>Tools</h1>
        <div className="flex flex-row gap-4">
          {toolIcons.map(icon => (
            <Image src={icon.src} alt={icon.alt} width={icon.width || 40} height={icon.height || 40} key={icon.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}
