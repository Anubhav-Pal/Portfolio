import me from "../public/assets/anubhav_pfp.jpg"
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='flex mt-10 gap-1 md:gap-3 '>
      <div className=''>
        <div className="relative">
          <Image src={me} className='rounded-full w-16  hover:grayscale transition-all' alt="" />
          <div className="bg-white rounded-full text-xs absolute bottom-0 right-0">🌻</div>
        </div>

      </div>
      <div>
        <div className='text-2xl font-semibold'>👋 Hi, I am Anubhav</div>
        <div className='text-sd mt-2'>A frontend/full stack software engineer, and designer from India.</div>
        <div className='text-sd'>21, he/him</div>
      </div>
    </div>
  )
}

export default HeroSection