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
  gpt3page,
  lotus,
  modernbank,
  plane,
  planeout,
  portfolio,
  punjab,
  qutub,
  redbrick,
  sft,
  sunset,
  timeline,
  usabilityhub,
  vase,
  deck,
} from "@/public/assets/assets";

export default function Page() {
  const [imagesHovered, setImagesHovered] = useState(false);
  const craftArray = [
    {
      img: appointly,
      heading: "Appointly",
      subheading:
        "A healthcare management app featuring patient registration, appointment booking, admin controls, multi-appointment support, and SMS notifications via Twilio.",
      deployedLink: "https://healthcareapp-anubhavpal.vercel.app/",
      labels: ["NextJS", "TypeScript", "Appwrite", "Tailwind", "Twilio"],
    },
    {
      img: timeline,
      heading: "Timeliner",
      subheading:
        "Create timelines with multiple layout options and dynamic headings. Built using TLDraw.",
      deployedLink: "https://tl-draw-timeline-anubhavpal.vercel.app/",
      labels: ["React", "TypeScript", "TLDraw", "Tailwind"],
    },
    {
      img: dashboard,
      heading: "Admin Order Dashboard",
      subheading:
        "Manage Orders with Ease. Enabled with Google Authentication and Redux state management",
      deployedLink: "https://assignment-task-sigma.vercel.app/",
      labels: ["React", "React-redux", "Auth0", "Tailwind"],
    },
    {
      img: chatbot,
      heading: "ChatAI",
      subheading:
        "An AI-powered chat companion for insightful conversations, built on Google Gemini API",
      deployedLink: "https://chatappanubhav.vercel.app/",
      labels: ["React", "Gemini API", "Tailwind"],
    },
    {
      img: deck,
      heading: "Card Deck Component",
      subheading:
        "Exploring Performance Optimization with requestAnimationFrame and useCallback in React",
      deployedLink: "https://crafts-cards-deck.vercel.app/",
      labels: ["Adv. Javascript", "Performance", "React", "Tailwind"],
    },
    {
      img: dropdown,
      heading: "Interactive Dropdown",
      subheading:
        "Interactive Dropdown with Seamless Input Selection and Display",
      deployedLink: "https://advanced-dropdown.vercel.app/",
      labels: ["Javascript", "Array methods", "Tailwind"],
    },
    {
      img: portfolio,
      heading: "Portfolio",
      subheading:
        "A sleek modern website showcasing my experience and projects",
      deployedLink: "https://anubhavpal.vercel.app/",
      labels: ["NextJS", "Tailwind"],
    },
    {
      img: modernbank,
      heading: "Modern Bank Landing Page",
      deployedLink: "https://luminous-sorbet-6f6b65.netlify.app/",
      labels: ["UI", "React", "Tailwind", "landing page"],
    },
    {
      img: gpt3page,
      heading: "GPT-3 Landing Page",
      deployedLink: "https://reliable-arithmetic-67bfb8.netlify.app/",
      labels: ["UI", "React", "Tailwind", "landing page"],
    },
    {
      img: usabilityhub,
      heading: "Usability Hub Landing Page",
      deployedLink: "https://exquisite-concha-c26ccb.netlify.app/",
      labels: ["UI", "landing page"],
    },
  ];

  const imagesArray = [
    plane,
    sunset,
    Bng,
    clouds,
    lotus,
    bar,
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
                deployedLink={craft.deployedLink || ""}
                labels={craft.labels}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        onMouseEnter={() => setImagesHovered(true)}
        onMouseLeave={() => setImagesHovered(false)}
        className={`${
          selected === "📸" ? "flex" : "hidden"
        } mt-10 py-5 relative h-full min-h-[300px] w-full  flex-wrap gap-5 justify-center items-center`}
      >
        {imagesArray.map((src, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setImagesHovered(true)}
              className=" overflow-hidden rounded-3xl border-2 border-black transform transition-transform duration-300"
              style={
                !imagesHovered
                  ? index < imagesArray.length / 2
                    ? {
                        position: "absolute",
                        top: `${index * 7}%`, // Move images downward
                        left: `${index * 7}%`, // Move images to the right,
                        zIndex:
                          index < imagesArray.length / 2
                            ? `${index * 7}` // Move images downward
                            : `${(imagesArray.length - index - 1) * 7}`,
                      }
                    : {
                        position: "absolute",
                        position: "absolute",
                        top: `${(imagesArray.length - index - 1) * 7}%`, // Move images downward
                        right: `${(imagesArray.length - index - 1) * 7}%`, // Move images to the right,
                        zIndex:
                          index < imagesArray.length / 2
                            ? `${index * 7}` // Move images downward
                            : `${(imagesArray.length - index - 1) * 7}`,
                      }
                  : {
                      zIndex: 20,
                      transform: "scale(1.05)",
                    }
              }
            >
              <Image
                src={src}
                className="w-32 h-32 sm:w-48 hover:scale-105  transform transition-transform duration-300 sm:h-48 md:w-64 md:h-64 object-cover object-center"
                alt={`image-${index}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
