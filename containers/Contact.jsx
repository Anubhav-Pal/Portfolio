"use client"

import React, { useState } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const Contact = () => {
    const [ishovered, setHoveredPos] = useState(false);
    const socials = [
        {
            platform: "Github",
            link: "@Anubhav-Pal",
            actualLink: "https://github.com/Anubhav-Pal"
        },
        {
            platform: "Linkedin",
            link: "@anubhavpal",
            actualLink: "https://www.linkedin.com/in/anubhavpal/"
        },
        {
            platform: "Leetcode",
            link: "@anubhavpalcp",
            actualLink: "https://leetcode.com/anubhavpalcp/"
        },
        {
            platform: "Twitter",
            link: "@AnubhavPal__",
            actualLink: "https://twitter.com/AnubhavPal__"
        },
        {
            platform: "Behance",
            link: "@anubhavpal3",
            actualLink: "https://www.behance.net/anubhavpal3"
        },

    ]
    return (
        <div id='socials'>
            <div className='font-medium mb-4'>contact, socials.</div>
            <div className='flex flex-col'>
                {
                    socials.map((social) => (
                        <div className='flex text-sm'>
                            <div>{social.platform}</div>
                            <div className='text-sd flex items-center' onMouseEnter={() => setHoveredPos(true)} onMouseLeave={() => setHoveredPos(false)} >
                                <div>
                                    <a href={social.actualLink}>{social.link}</a>
                                </div>
                                <div className={`${ishovered===true?'ml-5':''} pl-10`}>
                                    <MdOutlineArrowOutward />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Contact