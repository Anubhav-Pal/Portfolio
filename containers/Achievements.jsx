import Project from '@/components/Project'
import React from 'react'

const Achievements = () => {
    return (
        <div>
            <div className='font-medium mb-4'>achievements.</div>
            <div className='border-l-2 pl-6 hover:border-orange-300 cursor-default transition-all'>
                <div>
                    <ul className='list-disc'>
                        <li className='text-sd text-sm'>Selected as a <span className='font-semibold'>Top 30 Winner</span> in the 2023 <span className='font-semibold'> Samsung Solve for Tomorrow </span>, surpassing <span className='font-semibold'>70,000+</span> submissions, and earning commendation from <span className='font-semibold'> Samsung India</span> with a feature on Twitter.</li>
                        <li className='text-sd text-sm'> <span className='font-semibold'> Finalist at SIH 2023</span> - A Prestigious National Level Hackthon</li>
                        <li className='text-sd text-sm'> <span className='font-semibold'> Trident Hacks &rsquo;23</span> - Nationals 2nd runner up out of 800 teams</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Achievements