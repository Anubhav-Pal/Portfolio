import Image from 'next/image'
import React, { useState } from 'react'
import images from '@/public/assets/assets'
import { GoLinkExternal } from "react-icons/go";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



const CraftComponent = ({ img, heading, subheading, depllink }) => {
    const [hovered, sethovered] = useState(false)

    return (
        <div className='flex flex-col gap-2 items-center justify-between flex-wrap'>
            <div className=' relative w-full flex items-center justify-center cursor-pointer' onMouseEnter={() => sethovered(true)} onMouseLeave={() => sethovered(false)}>
                <Link href={depllink} target='_blank' className='flex items-center justify-center'>
                    <Image src={img} className={`${hovered ? "opacity-55" : ""} w-full h-full object-cover object-left-top rounded-md shadow-md  transition-all`}></Image>
                    <span className={` ${hovered ? "flex" : "hidden"} p-2 absolute opacity-70 rounded-full bg-white`}><FontAwesomeIcon icon={faUpRightFromSquare} size="sm" color="gray" className='bg-white' /></span>
                </Link>
            </div>
            <div className='w-full'>
                <div className='text-sd'>{heading}</div>
                <div className='text-xs opacity-60'>{subheading}</div>
            </div>
        </div>
    )
}

export default CraftComponent