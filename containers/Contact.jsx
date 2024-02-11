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
            platform: "Gmail",
            link: "anubhavpal.excl@gmail.com",
            actualLink: "mailto:anubhavpal.excl@gmail.com"
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
        {
            platform: "Resume",
            link: "/resume",
            actualLink: "https://www.behance.net/anubhavpal3"
        },

    ]
    return (
        <div id='socials'>
            <div className='font-medium mb-4'>contact, socials.</div>
            <div className='flex flex-col gap-5'>
                {
                    socials.map((social) => (
                        <div className='flex text-sm gap-5'>
                            <div>{social.platform}</div>
                            <div className='text-sd flex items-center gap-1' onMouseEnter={() => setHoveredPos(true)} onMouseLeave={() => setHoveredPos(false)} >
                                <div>
                                    <a href={social.actualLink} target='_blank'>{social.link}</a>
                                </div>
                                <div className={`${ishovered===true?'ml-5':''}`}>
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