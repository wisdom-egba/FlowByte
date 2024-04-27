import React from "react";
import videoBg from "../assets/icons/videoBackground.mp4";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="">
      <div
        className="relative flex items-center  
        justify-center h-[60vh] md:h-[100vh] lg:h-[70vh] md:min-h-full overflow-hidden w-full"
      >
        <video
          loop
          autoPlay
          muted
          src={videoBg}
          className="absolute z-10 w-auto md:min-w-full md:min-h-full  max-w-none"
        ></video>
        <div className="absolute bg-[rgba(0,0,0,0.7)] h-[70vh] md:h-[100vh] lg:h-[70vh] w-full top-0 right-0 left-0 bottom-0 z-20 flex items-center justify-center ">
          <div className=" text-[#fff] flex flex-col items-center justify-center ">
            <h1 className="text-3xl md:text-6xl lg:text-7xl py-16 capitalize flex items-center justify-center w-[100%] md:[70%] px-1 md:px-0 text-center">
              Maximise your workspace to full potential
            </h1>
            <Button content="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
