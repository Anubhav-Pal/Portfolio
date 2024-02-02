import Image from 'next/image'
import React, { useState } from 'react'
import images from '@/public/assets/assets'
import { GoLinkExternal } from "react-icons/go";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



const CraftComponent = () => {
    const [hovered, sethovered] = useState(false)

    return (
        <div className='flex flex-col gap-2 mx-2'>
            <div className='roun relative flex items-center justify-center cursor-pointer' onMouseEnter={() => sethovered(true)} onMouseLeave={() => sethovered(false)}>
                <Link href="https://advanced-dropdown.vercel.app/" target='_blank' className='flex items-center justify-center'>
                    <Image src={images[12]} className={`${hovered ? "opacity-55" : ""} w-full rounded-md shadow-md  transition-all`}></Image>
                    <span className={` ${hovered ? "flex" : "hidden"} p-2 absolute opacity-70 rounded-full bg-white`}><FontAwesomeIcon icon={faUpRightFromSquare} size="sm" color="gray" className='bg-white' /></span>
                </Link>
            </div>
            <div>
                <div className='text-sd'>Interactive Dropdown</div>
                <div className='text-xs opacity-60'>Interactive Dropdown with Seamless Input Selection and Display</div>
            </div>
        </div>
    )
}

export default CraftComponent