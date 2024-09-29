import Project from "@/components/Project";
import React from "react";

const Achievements = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="font-medium">achievements & recognitions.</div>
      <div className="border-l-2 pl-6 hover:border-orange-300 cursor-default transition-all">
        <div>
          <ul className="list-disc flex flex-col gap-3 list-outside ml-3">
            <li className="text-sd text-sm">
              Selected as a <span className="font-semibold">Top 30 Winner</span>{" "}
              in the 2023{" "}
              <span className="font-semibold">
                {" "}
                Samsung Solve for Tomorrow{" "}
              </span>
              , surpassing <span className="font-semibold">70,000+</span>{" "}
              submissions, and earning commendation from{" "}
              <span className="font-semibold"> Samsung India</span> on Twitter.
            </li>
            <li className="text-sd text-sm">
              {" "}
              <span className="font-semibold"> Finalist at SIH 2023</span> - A
              Prestigious National Level Hackthon
            </li>
            <li className="text-sd text-sm">
              {" "}
              <span className="font-semibold"> Trident Hacks 2023</span> -
              Nationals 2nd runner up out of 800 teams
            </li>
            <li className="text-sd text-sm">
              {" "}
              <span className="font-semibold">
                Google Developers Student Club
              </span>
              : UI/UX designer & developer (April 2022- Present)
            </li>
            <li className="text-sd text-sm">
              <span className="font-semibold">Open Source</span>: Hacktoberfest
              project maintainer 2023 (Foss Events 2.0)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
