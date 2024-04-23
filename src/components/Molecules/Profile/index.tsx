import Image from "next/image";

export default function Profile () {

  return (
    <div className="flex flex-col gap-8 w-1/3 border-white border-2 m-10 p-8">
      {/* <Image src="icons/logo.svg" alt="Logo" width={100} height={100} /> */}
      <h1 className="text-4xl text-white">Leonardo Sena</h1>
      <p className="text-white">Fullstack Developer</p>
      <div className="flex flex-row gap-4">
        <Image src="icons/location.svg" alt="Location" width={15} height={15} />
        <span className="text-white">São Paulo, Brazil</span>
      </div>
      <div className="flex flex-row gap-4">
        <a href="" target="_blank">
          <Image src="icons/github-icon.svg" alt='github icon' width={30} height={30} />
        </a>
        {/* <a href="" target="_blank">
          <Image src="icons/linkedin-icon.svg" alt="Linkedin" width={30} height={30} />
        </a> */}
        <a href="" target="_blank">
          <Image src="icons/discord.svg" alt="Discord" width={30} height={30} />
        </a>
      </div>
    </div>
  )
}
