import me from "../public/assets/anubhav_pfp.png"
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='flex mt-10  '>
      <div className=''>
        <div className="relative">
          <Image src={me} className='rounded-full w-16 ' alt="" />
          <div className="bg-white rounded-full text-xs absolute bottom-0 right-0">🌻</div>
        </div>

      </div>
      <div>
        <div className='text-2xl font-semibold'>👋 Hi, I am Anubhav</div>
        <div className='text-sd mt-2'>A half frontend software engineer, half designer from India.</div>
        <div className='text-sd'>21, he/him</div>
      </div>
    </div>
  )
}

export default HeroSection