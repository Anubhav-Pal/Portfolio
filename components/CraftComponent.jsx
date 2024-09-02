import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const CraftComponent = ({ img, heading, subheading, deployedLink, labels }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-2 justify-between w-full sm:w-72 rounded-md hadow-md ">
      <div
        className="relative flex items-center justify-center cursor-pointer hidden sm:block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link
          href={deployedLink}
          target="_blank"
          className="flex items-center justify-center w-full h-full"
        >
          <Image
            src={img}
            alt="Craft Image"
            className={`${
              hovered ? "opacity-55" : ""
            } object-cover w-full h-full rounded-md transition-all ease-in-out`}
          />
          <span
            className={`${
              hovered ? "flex" : "hidden"
            } absolute p-2 opacity-70 rounded-full bg-white`}
          >
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              size="sm"
              color="gray"
            />
          </span>
        </Link>
      </div>
      <div
        className={`w-full flex flex-col gap-2 ${labels.length ? "gap-2" : ""}`}
      >
        <div className="text-base sm:text-sm">
          <Link
            href={deployedLink}
            target="_blank"
            className="block sm:hidden underline text-blue-600 text-sd"
          >
            {heading}
          </Link>
          <span className="hidden sm:block font-semibold">{heading}</span>
        </div>
        {labels.length !== 0 && (
          <div className="text-xs mt-1 sm:mt-0 flex flex-wrap gap-1">
            {labels.map((label,index) => {
              return (
                <div
                  key={index}
                  className="px-2 py-1 rounded-md bg-gray-200 text-xs text-gray-400 font-normal"
                >
                  {label}
                </div>
              );
            })}
          </div>
        )}
        <div className="text-xs opacity-60 mt-1 sm:mt-0">{subheading}</div>
      </div>
    </div>
  );
};

export default CraftComponent;
