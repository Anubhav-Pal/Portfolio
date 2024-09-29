"use client";
import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const companies = [
  {
    position: "Software Engineering Intern",
    companyName: "Konnectbox",
    companyWebsite: "Konnectbox.com",
    companyWebsiteLink: "https://www.linkedin.com/company/konnect-box/",
    workedOn: [
      "Building a cloud platform that enables users to learn technologies through interactive labs, tailored to various skill sets and industries for effective learning.",
      "Using TypeScript, React, NextJS, Tailwind for building frontend and UI. Using Figma for design conversions.",
    ],
    startingMonth: "Sept, 2024",
    endingMonth: "Present",
  },
  {
    position: "Software Development Engineering Intern",
    companyName: "OPDoc",
    companyWebsite: "opdoc.in",
    companyWebsiteLink: "https://www.opdoc.in/",
    workedOn: [
      "Built a healthcare platform for patients, doctors, and learners, utilizing a personalized AI assistant to enhance patient understanding and accelerating treatment processes, catering to a potential user base of over 50k+ hospitals.",
      "Built multiple layouts, dashboards, chatbot, landing UIs using ReactJS, Typescript and Material UI. Integrated Google Analytics.",
    ],
    startingMonth: "June, 2024",
    endingMonth: "Sept, 2024",
  },
  {
    position: "Frontend Software Engineer Intern",
    companyName: "ClientFlowX",
    companyWebsite: "clientflowx.com",
    companyWebsiteLink: "https://www.clientflowx.com/",
    workedOn: [
      "Developed an admin dashboard, funnel creator and multiple pages using Next.js, TypeScript and shadCN, seamlessly integrating third-party applications and backend APIs.",
      "Built a no-code AI website builder with custom components utilizing the Grapejs library.",
    ],
    startingMonth: "March, 2024",
    endingMonth: "June 2024",
  },
];

const Work = () => {
  const [ishovered, setHoveredPos] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      {companies.map(
        (
          company,
          index // Added index parameter for unique key
        ) => (
          <div
            className="border-l-2 pl-6 hover:border-orange-300 cursor-default transition-all flex flex-col gap-5"
            key={index}
          >
            {" "}
            {/* Added key prop */}
            <div className="flex sm:flex-row flex-col items-start justify-between gap-2">
              <div>
                <div className="capitalize text-md">
                  {company.position}, {company.companyName}
                </div>
                {company.companyName === "Wonder Learn Games" ? (
                  ""
                ) : (
                  <div
                    className="flex items-center gap-[2px] text-sd hover:text-black transition-all ease-in-out"
                    onMouseEnter={() => setHoveredPos(company.companyName)}
                    onMouseLeave={() => setHoveredPos("")}
                  >
                    <div className="text-sm">
                      at,{" "}
                      <a href={company.companyWebsiteLink}>
                        {company.companyWebsite}
                      </a>
                    </div>
                    <div
                      className={`${
                        ishovered === company.companyName
                          ? "translate-x-1 transition-all ease-in-out"
                          : ""
                      }`}
                    >
                      <MdOutlineArrowOutward />
                    </div>
                  </div>
                )}
              </div>
              <div className="text-sd text-sm">
                {company.startingMonth}{" "}
                <span
                  className={`${company.endingMonth === "" ? "hidden" : ""}`}
                >
                  -
                </span>{" "}
                {company.endingMonth}
              </div>
            </div>
            <div>
              <ul className="list-disc flex flex-col gap-3 list-outside">
                {company.workedOn.map((thingWorkedOn, idx) => (
                  <li className="text-sd text-sm ml-3" key={idx}>
                    {thingWorkedOn}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Work;
