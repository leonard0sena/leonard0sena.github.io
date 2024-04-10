import Image from 'next/image'

export function Info() {
  return (
    <div className="flex flex-col border-white border-2 m-10 gap-8 p-8 text-start">
      <h1 className='text-white text-xl'>Other Infos</h1>
      <div>
        <h1>Current Stack</h1>
        <div className='flex flex-row gap-4'>
          <Image src="icons/nodejs-icon.svg" alt='nodejs icon' width={40} height={40} />
          <Image src="icons/javascript.svg" alt='javascript icon' width={40} height={40} />
          <Image src="icons/react.svg" alt='react icon' width={40} height={40} />
          <Image src="icons/typescript-icon.svg" alt='typescript icon' width={40} height={40} />
          <Image src="icons/ruby.svg" alt='react native icon' width={40} height={40} />
        </div>
      </div>
      <div>
        <h1>Tools</h1>
        <div className='flex flex-row gap-4'>
          <Image src="icons/git-icon.svg" alt='git icon' width={40} height={40} />
          <Image src="icons/github-icon.svg" alt='github icon' width={40} height={40} />
          <Image src="icons/visual-studio-code.svg" alt='vscode icon' width={40} height={40} />
          <Image src="icons/docker-icon.svg" alt='docker icon' width={40} height={40} />
          <Image src="icons/figma.svg" alt='figma icon' width={30} height={30} />
          <Image src="icons/aws.svg" alt='aws icon' width={40} height={40} />
          <Image src="icons/terminal.svg" alt='terminal icon' width={40} height={40} />
        </div>
      </div>
    </div>
  )
}