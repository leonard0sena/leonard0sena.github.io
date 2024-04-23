import About from "@/components/Molecules/About";
import Info from "@/components/Molecules/Info";

export default function PresentationContainer(){

  return (
    <div className="flex flex-col gap-8 w-2/3">
      <About />
      <Info />
    </div>
  )
}
