import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const CraftComponent = ({ img, heading, subheading, depllink }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-2 justify-between w-full sm:w-60">
      <div
        className="relative flex items-center justify-center cursor-pointer hidden sm:block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link
          href={depllink}
          target="_blank"
          className="flex items-center justify-center w-full h-full"
        >
          <Image
            src={img}
            alt="Craft Image"
            className={`${
              hovered ? "opacity-55" : ""
            } object-cover w-full h-full rounded-md shadow-md transition-all ease-in-out`}
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
      <div className="w-full">
        <div className="text-base sm:text-sm">
          <Link
            href={depllink}
            target="_blank"
            className="block sm:hidden underline text-blue-600 text-sd"
          >
            {heading}
          </Link>
          <span className="hidden sm:block">{heading}</span>
        </div>
        <div className="text-xs opacity-60 mt-1 sm:mt-0">{subheading}</div>
      </div>
    </div>
  );
};

export default CraftComponent;
