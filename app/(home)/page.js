import Aboutme from "@/components/Aboutme";
import HeroSection from "@/components/HeroSection";
import Works from "@/containers/Works";

export default function Page() {
  return (
    <div className="main-home-container p-10">
      <div className="flex flex-col gap-10">
        <HeroSection />
        <Aboutme/>
        <Works/>
      </div>
    </div>
  )
}