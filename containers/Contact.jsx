"use client";

import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Contact = () => {
  const [ishovered, setHoveredPos] = useState(false);
  const socials = [
    {
      platform: "Linkedin",
      link: "@anubhavpal",
      actualLink: "https://www.linkedin.com/in/anubhavpal/",
    },
    {
      platform: "Github",
      link: "@Anubhav-Pal",
      actualLink: "https://github.com/Anubhav-Pal",
    },

    {
      platform: "Leetcode",
      link: "@anubhavpalcp",
      actualLink: "https://leetcode.com/anubhavpalcp/",
    },
    {
      platform: "Gmail",
      link: "anubhavpal.excl@gmail.com",
      actualLink: "mailto:anubhavpal.excl@gmail.com",
    },
    {
      platform: "Twitter",
      link: "@AnubhavPal__",
      actualLink: "https://twitter.com/AnubhavPal__",
    },
    {
      platform: "Behance",
      link: "@anubhavpal3",
      actualLink: "https://www.behance.net/anubhavpal3",
    },
    {
      platform: "Resume",
      link: "/resume",
      actualLink:
        "https://drive.google.com/file/d/1Sq9ql5S9yqNJDs36m47M4b1RxxLGdIZL/view?usp=drive_link",
    },
  ];
  return (
    <div id=" flex flex-col gap-5">
      <div className="font-medium socials">contact, socials.</div>
      <div className="flex gap-5 mt-5">
        <div className="flex flex-col justify-center items-start gap-5">
          {socials.map((social) => (
            <div className="flex text-sm gap-5" key={social}>
              <div>{social.platform}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          {socials.map((social) => (
            <div key={social} className="flex text-sm gap-5">
              <div
                className={` ${
                  ishovered === social.platform ? "" : "text-sd"
                } flex items-center gap-1`}
                onMouseEnter={() => setHoveredPos(social.platform)}
                onMouseLeave={() => setHoveredPos("")}
              >
                <div>
                  <a href={social.actualLink} target="_blank">
                    {social.link}
                  </a>
                </div>
                <div
                  className={`${
                    ishovered === social.platform
                      ? "translate-x-1 transition-all ease-in-out"
                      : ""
                  }`}
                >
                  <MdOutlineArrowOutward />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
