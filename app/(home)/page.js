import Aboutme from "@/components/Aboutme";
import HeroSection from "@/components/HeroSection";
import Contact from "@/containers/Contact";
import Projects from "@/containers/Projects";
import Works from "@/containers/Works";

export default function Page() {
  return (
    <div className="main-home-container">
      <div className="flex flex-col gap-10">
        <HeroSection />
        <Aboutme/>
        <Works/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}