import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex mt-10  '>
      <div>
        <div><img src="https://placehold.co/100x100" className='rounded-full' alt="" /></div>
        <div></div>
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