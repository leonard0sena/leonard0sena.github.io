'use client'

import Profile from "@/components/Molecules/Profile";
import PresentationContainer from "@/components/Organisms/PresentationContainer";


export default function Home() {

  return (
    <div className="flex flex-row gap-8 justify-center">
      <Profile />
      <PresentationContainer />
    </div>
  )
}
