"use client";
import React from "react";
import Lottie from "lottie-react";
import { online } from "@/public/assets/assets";

const Aboutme = () => {
  return (
    <div>
      <div className="font-medium mb-2">about me.</div>
      <div className="text-sd text-sm">
        Hey! I am an engineer, learning how to build and design scalable
        websites and applications. My focus is to build with efficiency, enhance
        user experience, embody design aesthetics, ensure a positive developer
        experience, and drive meaningful impact.
      </div>
      <div className="text-sd text-sm flex items-center justify-start">
        <div>Available for freelance work</div>
        <div className="mt-[4px]">
          <Lottie
            className="w-5"
            animationData={online} // Use the desired Lottie animation from assets
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
