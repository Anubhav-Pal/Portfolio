"use client"

import Image from "next/image";
import { useState } from "react"
import images from '../../public/assets/assets.js';
import CraftComponent from "@/components/CraftComponent.jsx";



export default function Page() {

    const craftArray = [
        {
            img: images[11],
            heading: "Admin Order Dashboard",
            subheading: "Manage Orders with Ease. Enabled with Google Authentication and Redux state management",
            depllink: "https://utilize-order-dashboard.vercel.app/",
        },
        {
            img: images[12],
            heading: "Interactive Dropdown",
            subheading: "Interactive Dropdown with Seamless Input Selection and Display",
            depllink: "https://advanced-dropdown.vercel.app/",
        },
        {
            img: images[17],
            heading: "Tailwind Playground",
            subheading: "Experiment with Tailwind CSS effortlessly on your browser",
            depllink: "https://tailwind-playground-omega.vercel.app/",
        },
        {
            img: images[13],
            heading: "Portfolio",
            subheading: "A sleek modern UI website showcasing my experience and projects",
            depllink: "https://anubhavpal.vercel.app/",
        },
        {
            img: images[14],
            heading: "ChatAI",
            subheading: "An AI-powered chat companion for insightful conversations, built on Google Gemini API",
            depllink: "https://chatappanubhav.vercel.app/",
        },
        {
            img: images[15],
            heading: "Abitco Creator page",
            subheading: "A simple modern webpage",
            depllink: "https://abitco.vercel.app/",
        },

    ]

    const [selected, setSelected] = useState("web");
    return (
        <div className='flex flex-col mt-10 text-sd '>
            <div className="px-10 md:px-60">
                <div className="flex items-center justify-around w-full rounded-md hover:cursor-pointer">
                    <div onClick={() => { setSelected("web") }} className={`py-1 ${selected === "web" ? 'bg-gray-400' : ''} w-1/2 border-2  flex items-center justify-around rounded-l-md`}>
                        <span className={`${selected === "web" ? 'bg-gray-400 text-white' : ''}`} >web</span>
                    </div>
                    <div onClick={() => { setSelected("📸") }} className={`py-1 ${selected === "📸" ? 'bg-gray-400' : ''} w-1/2 border-2  flex items-center justify-around rounded-r-md border-l-0`}>
                        📸
                    </div>
                </div>
            </div>

            <div className={`${selected === "web" ? 'flex flex-col' : 'hidden'} mt-10 gap-5 items-start px-10 md:px-60`}>
                <div className="text-xs opacity-50 hidden sm:flex">*hover on images*</div>
                <div className="flex gap-3 sm:gap-10 flex-wrap">
                    {
                        craftArray.map((craft, index) => {
                            return (
                                <div key={index} className="w-ful sm:w-1/3">
                                    <CraftComponent img={craft.img} heading={craft.heading} subheading={craft.subheading} depllink={craft.depllink} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>


            <div className={`${selected === "📸" ? 'flex' : 'hidden'} mt-10 px-10 md:px-60`} >
                <div className="flex flex-wrap justify-around gap-1">
                    <div className="flex gap-1 justify-between w-full items-center">
                        <div className="w-1/2 flex items-center justify-end">
                            <div>
                                <Image src={images[0]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-center" alt="an image" />
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-start">
                            <div>

                                <Image src={images[1]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-center" alt="an image" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1 justify-between w-full items-center">
                        <div className="w-1/2 flex items-center justify-end">
                            <div>
                                <Image src={images[2]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-bottom" alt="an image" />
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-start">
                            <div>

                                <Image src={images[3]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-right" alt="an image" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1 justify-between w-full items-center">
                        <div className="w-1/2 flex items-center justify-end">
                            <div>
                                <Image src={images[4]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-center" alt="an image" />
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-start">
                            <div>

                                <Image src={images[5]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-center" alt="an image" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1 justify-between w-full items-center">
                        <div className="w-1/2 flex items-center justify-end">
                            <div>
                                <Image src={images[6]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-center" alt="an image" />
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-start">
                            <div>

                                <Image src={images[7]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-center" alt="an image" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1 justify-between w-full items-center">
                        <div className="w-1/2 flex items-center justify-end">
                            <div>
                                <Image src={images[8]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-center" alt="an image" />
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-start">
                            <div>

                                <Image src={images[9]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-center" alt="an image" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1 justify-between w-full items-center">
                        <div className="w-1/2 flex items-center justify-end">
                            <div>
                                <Image src={images[10]} className="rounded-3xl border-2 w-40 h-40 md:w-72 md:h-72 border-black object-cover object-top" alt="an image" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}