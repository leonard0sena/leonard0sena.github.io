'use client'
import { About } from "./About";
import { Info } from "./Info";
import { Profile } from "./Profile";

export default function Home() {

  return (
    <>
      <div className="flex flex-row gap-8 justify-center">
        <Profile />
        <div className="flex flex-col gap-8 w-2/3">
          <About />
          <Info />
        </div>
      </div>
    </>
  )
}
