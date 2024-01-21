import React from 'react'

const Work = () => {
  return (
    <div className='border-l-2 pl-6 hover:border-orange-300 cursor-default transition-all flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <div>
          <div className='capitalize text-lg'>frontend web developer intern, Altruism Labs</div>
          <div className=' text-sm'>at, <a href="http://www.altruismlabs.com/">altruismlabs.com</a></div>
        </div>
        <div className='text-sd text-sm'>May, 2023-present</div>
      </div>
      <div>
        <ul className='list-disc flex flex-col gap-3'>
          <li className='text-sd text-sm'>Designed and developed sophisticated interactive React components for seamless web and mobile experiences.</li>
          <li className='text-sd text-sm'>Successfully integrated the Chart.js library to enhance data visualization capabilities.</li>
        </ul>
        
      </div>
    </div>
  )
}

export default Work