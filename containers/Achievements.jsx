import Project from '@/components/Project'
import React from 'react'

const Achievements = () => {
    return (
        <div>
            <div className='font-medium mb-4'>achievements.</div>
            <div className='border-l-2 pl-6 hover:border-orange-300 cursor-default transition-all'>
                <div>
                    <ul className='list-disc'>
                        <li className='text-sd text-sm'>Built a QR generator app for GiHub Internal Team usage. Used React for frontend & fastify for backend and APIs. Created the UI for the app on Figma using GitHub’s Primer design system. Integrated the QR generation with another internal URL shortener service for standardized QR generation. i.e. gh.io</li>
                        <li className='text-sd text-sm'>Built a QR generator app for GiHub Internal Team usage. Used React for frontend & fastify for backend and APIs. Created the UI for the app on Figma using GitHub’s Primer design system. Integrated the QR generation with another internal URL shortener service for standardized QR generation. i.e. gh.io</li>
                        <li className='text-sd text-sm'>Built a QR generator app for GiHub Internal Team usage. Used React for frontend & fastify for backend and APIs. Created the UI for the app on Figma using GitHub’s Primer design system. Integrated the QR generation with another internal URL shortener service for standardized QR generation. i.e. gh.io</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Achievements