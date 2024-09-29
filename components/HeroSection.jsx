import me from "../public/assets/anubhav_pfp.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex mt-10 gap-3 items-center">
      <div className="">
        <div className="relative group hover:grayscale">
          <Image
            src={me}
            className="rounded-full w-16 transition-all duration-300 ease-in-out group-hover:animate-bump"
            alt=""
          />
          <div className="bg-white rounded-full text-xs absolute bottom-0 right-0">
            🌻
          </div>
        </div>
      </div>
      <div>
        <div className="text-lg md:text-xl font-semibold">
          Hey, I am Anubhav
        </div>
        <div className="text-sd">
          A frontend/full stack software engineer, and designer from India.
        </div>
        <div className="text-sd">22, he/him</div>
      </div>
    </div>
  );
};

export default HeroSection;
