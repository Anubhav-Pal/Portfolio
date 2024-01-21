import Aboutme from "@/components/Aboutme";
import HeroSection from "@/components/HeroSection";
import Achievements from "@/containers/Achievements";
import Contact from "@/containers/Contact";
import Projects from "@/containers/Projects";
import Works from "@/containers/Works";

export default function Page() {
  return (
    <div className="main-home-container px-10 md:px-60">
      <div className="flex flex-col gap-10 mb-24">
        <HeroSection />
        <Aboutme/>
        <Works/>
        <Projects/>
        <Achievements/>
        <Contact/>
      </div>
    </div>
  )
}