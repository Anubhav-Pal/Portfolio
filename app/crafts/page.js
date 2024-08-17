"use client";

import Image from "next/image";
import { useState } from "react";
import CraftComponent from "@/components/CraftComponent.jsx";
import {
  abitco,
  appointly,
  bar,
  Bng,
  chatbot,
  clouds,
  dashboard,
  dropdown,
  lotus,
  plane,
  planeout,
  portfolio,
  punjab,
  qutub,
  redbrick,
  sft,
  sunset,
  timeline,
  vase,
} from "@/public/assets/assets";

export default function Page() {
  const craftArray = [
    {
      img: appointly,
      heading: "Appointly",
      subheading:
        "A healthcare management app featuring patient registration, appointment booking, admin controls, multi-appointment support, and SMS notifications via Twilio.",
      depllink: "https://healthcareapp-anubhavpal.vercel.app/",
    },
    {
      img: timeline,
      heading: "Timeliner",
      subheading:
        "Create timelines with multiple layout options and dynamic headings. Built using TLDraw.",
      depllink: "https://tl-draw-timeline-anubhavpal.vercel.app/",
    },
    {
      img: dashboard,
      heading: "Admin Order Dashboard",
      subheading:
        "Manage Orders with Ease. Enabled with Google Authentication and Redux state management",
      depllink: "https://assignment-task-sigma.vercel.app/",
    },
    {
      img: chatbot,
      heading: "ChatAI",
      subheading:
        "An AI-powered chat companion for insightful conversations, built on Google Gemini API",
      depllink: "https://chatappanubhav.vercel.app/",
    },
    {
      img: dropdown,
      heading: "Interactive Dropdown",
      subheading:
        "Interactive Dropdown with Seamless Input Selection and Display",
      depllink: "https://advanced-dropdown.vercel.app/",
    },
    {
      img: portfolio,
      heading: "Portfolio",
      subheading:
        "A sleek modern UI website showcasing my experience and projects",
      depllink: "https://anubhavpal.vercel.app/",
    },
    {
      img: punjab,
      heading: "PGKRAM Analytics Dashboard",
      subheading:
        "Analytics tool for PGKRAM website to increase employment in Punjab.",
      depllink: "https://pgkram.netlify.app/",
    },
    {
      img: abitco,
      heading: "Abitco Creator page",
      subheading: "A simple modern webpage",
      depllink: "https://abitco.vercel.app/",
    },
  ];
  const imagesArray = [
    sunset,
    bar,
    Bng,
    clouds,
    lotus,
    plane,
    planeout,
    qutub,
    redbrick,
    sft,
    vase,
  ];

  const [selected, setSelected] = useState("web");

  return (
    <div className="flex flex-col text-sd">
      <div className="flex items-center justify-around w-full rounded-md hover:cursor-pointer">
        <div
          onClick={() => setSelected("web")}
          className={`py-1 ${
            selected === "web" ? "bg-gray-400" : ""
          } w-1/2 border-2 flex items-center justify-center rounded-l-md`}
        >
          <span className={selected === "web" ? "text-white bg-gray-400" : ""}>
            web
          </span>
        </div>
        <div
          onClick={() => setSelected("📸")}
          className={`py-1 ${
            selected === "📸" ? "bg-gray-400" : ""
          } w-1/2 border-2 flex items-center justify-center rounded-r-md border-l-0`}
        >
          📸
        </div>
      </div>

      <div
        className={`${
          selected === "web" ? "flex flex-col" : "hidden"
        } mt-10 gap-5 items-start`}
      >
        <div className="text-xs opacity-50 hidden sm:flex">
          *hover on images*
        </div>
        <div className="flex flex-wrap gap-10 mb-10">
          {craftArray.map((craft, index) => (
            <div key={index} className="w-full sm:w-auto">
              <CraftComponent
                img={craft.img}
                heading={craft.heading}
                subheading={craft.subheading}
                depllink={craft.depllink}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`${selected === "📸" ? "flex" : "hidden"} mt-10`}>
        <div className="flex flex-wrap justify-start gap-2 md:gap-4 xl:gap-6">
          {imagesArray.map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-end w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64"
            >
              <Image
                src={src}
                className="rounded-3xl border-2 w-full h-full border-black object-cover object-center"
                alt="an image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
